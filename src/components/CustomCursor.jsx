import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import './CustomCursor.css';

const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
const springConfigSlow = { damping: 35, stiffness: 150, mass: 0.8 };

// Coding-themed heart emojis and symbols
const codeHearts = [
  '<3', '{ }', '/>',  '01',
  '&&', '=>', '++', '()',
  '[ ]', '/**/', '!=', '===',
  '#!', '::', '~>', '|>',
];

const heartColors = [
  '#6366f1', '#818cf8', '#22d3ee', '#34d399',
  '#f472b6', '#fb923c', '#a78bfa', '#38bdf8',
];

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);

  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);
  const trailSpringX = useSpring(trailX, springConfigSlow);
  const trailSpringY = useSpring(trailY, springConfigSlow);

  const [hoverState, setHoverState] = useState('default');
  const [isClicking, setIsClicking] = useState(false);
  const [stickyTarget, setStickyTarget] = useState(null);
  const [ripples, setRipples] = useState([]);
  const [hearts, setHearts] = useState([]);
  const [isShaking, setIsShaking] = useState(false);
  const rippleId = useRef(0);
  const heartId = useRef(0);

  // Shake detection refs
  const posHistory = useRef([]);
  const shakeTimer = useRef(null);
  const lastHeartTime = useRef(0);
  const directionChanges = useRef(0);
  const lastDirection = useRef({ x: 0, y: 0 });

  const spawnHeart = useCallback((x, y) => {
    const now = Date.now();
    // Throttle: spawn a heart every 60ms during shake
    if (now - lastHeartTime.current < 60) return;
    lastHeartTime.current = now;

    const id = heartId.current++;
    const symbol = codeHearts[Math.floor(Math.random() * codeHearts.length)];
    const color = heartColors[Math.floor(Math.random() * heartColors.length)];
    const angle = (Math.random() - 0.5) * 120; // spread angle in degrees
    const distance = 60 + Math.random() * 80;
    const rad = (angle * Math.PI) / 180;
    const targetX = Math.cos(rad) * distance;
    const targetY = -Math.abs(Math.sin(rad) * distance) - 30 - Math.random() * 60; // always float up
    const rotation = (Math.random() - 0.5) * 60;
    const scale = 0.7 + Math.random() * 0.6;
    const isActualHeart = Math.random() < 0.35; // 35% chance of actual heart symbol

    setHearts(prev => [
      ...prev.slice(-30), // keep max 30 hearts alive
      { id, x, y, targetX, targetY, rotation, scale, symbol, color, isActualHeart },
    ]);

    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== id));
    }, 1200);
  }, []);

  const detectShake = useCallback((clientX, clientY) => {
    const now = Date.now();
    posHistory.current.push({ x: clientX, y: clientY, t: now });

    // Keep only last 300ms of positions
    posHistory.current = posHistory.current.filter(p => now - p.t < 300);

    if (posHistory.current.length < 4) return;

    // Calculate direction changes (sign flips in velocity)
    const recent = posHistory.current;
    let changes = 0;
    for (let i = 2; i < recent.length; i++) {
      const dx1 = recent[i - 1].x - recent[i - 2].x;
      const dy1 = recent[i - 1].y - recent[i - 2].y;
      const dx2 = recent[i].x - recent[i - 1].x;
      const dy2 = recent[i].y - recent[i - 1].y;

      // Direction changed if velocity sign flipped
      if ((dx1 > 0 && dx2 < 0) || (dx1 < 0 && dx2 > 0)) changes++;
      if ((dy1 > 0 && dy2 < 0) || (dy1 < 0 && dy2 > 0)) changes++;
    }

    // Also check total distance (speed)
    let totalDist = 0;
    for (let i = 1; i < recent.length; i++) {
      const dx = recent[i].x - recent[i - 1].x;
      const dy = recent[i].y - recent[i - 1].y;
      totalDist += Math.sqrt(dx * dx + dy * dy);
    }

    const isShakeDetected = changes >= 3 && totalDist > 100;

    if (isShakeDetected) {
      setIsShaking(true);
      spawnHeart(clientX, clientY);

      clearTimeout(shakeTimer.current);
      shakeTimer.current = setTimeout(() => {
        setIsShaking(false);
      }, 400);
    }
  }, [spawnHeart]);

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;

    // Shake detection
    detectShake(clientX, clientY);

    // Check for sticky/magnetic elements
    const target = e.target.closest('[data-cursor]');
    const stickyEl = e.target.closest('[data-magnetic]');

    if (stickyEl) {
      const rect = stickyEl.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = clientX - centerX;
      const distY = clientY - centerY;

      const pullStrength = 0.4;
      cursorX.set(centerX + distX * pullStrength - 10);
      cursorY.set(centerY + distY * pullStrength - 10);
      trailX.set(centerX - 20);
      trailY.set(centerY - 20);

      const moveFactor = 0.2;
      stickyEl.style.transform = `translate(${distX * moveFactor}px, ${distY * moveFactor}px)`;
      stickyEl.style.transition = 'transform 0.15s ease-out';

      setStickyTarget(stickyEl);
    } else {
      cursorX.set(clientX - 10);
      cursorY.set(clientY - 10);
      trailX.set(clientX - 20);
      trailY.set(clientY - 20);

      if (stickyTarget) {
        stickyTarget.style.transform = '';
        stickyTarget.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        setStickyTarget(null);
      }
    }

    if (target) {
      setHoverState(target.dataset.cursor || 'hover');
    } else if (e.target.closest('a, button, [role="button"]')) {
      setHoverState('hover');
    } else if (e.target.closest('h1, h2, h3, .section-title')) {
      setHoverState('text');
    } else {
      setHoverState('default');
    }
  }, [cursorX, cursorY, trailX, trailY, stickyTarget, detectShake]);

  const handleMouseDown = useCallback((e) => {
    setIsClicking(true);

    const id = rippleId.current++;
    setRipples(prev => [...prev, { id, x: e.clientX, y: e.clientY }]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id));
    }, 800);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsClicking(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    cursorX.set(-100);
    cursorY.set(-100);
    trailX.set(-100);
    trailY.set(-100);
  }, [cursorX, cursorY, trailX, trailY]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(shakeTimer.current);
    };
  }, [handleMouseMove, handleMouseDown, handleMouseUp, handleMouseLeave]);

  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className={`cursor cursor--dot ${hoverState !== 'default' ? 'cursor--active' : ''} ${isShaking ? 'cursor--shaking' : ''}`}
        style={{ x: springX, y: springY }}
        animate={{
          scale: isClicking ? 0.6 : isShaking ? 1.4 : hoverState === 'hover' ? 1.8 : hoverState === 'text' ? 2.5 : 1,
          opacity: hoverState === 'text' ? 0.6 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Trailing ring */}
      <motion.div
        className={`cursor cursor--ring ${hoverState !== 'default' ? 'cursor--ring-active' : ''} ${isShaking ? 'cursor--ring-shaking' : ''}`}
        style={{ x: trailSpringX, y: trailSpringY }}
        animate={{
          scale: isClicking ? 0.8 : isShaking ? 1.8 : hoverState === 'hover' ? 1.5 : hoverState === 'text' ? 2 : 1,
          borderColor: isShaking
            ? 'rgba(244, 114, 182, 0.7)'
            : hoverState === 'hover'
            ? 'rgba(99, 102, 241, 0.6)'
            : hoverState === 'text'
            ? 'rgba(34, 211, 238, 0.4)'
            : 'rgba(255, 255, 255, 0.2)',
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Click ripples */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="cursor-ripple"
            style={{ left: ripple.x, top: ripple.y }}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>

      {/* Shake hearts - coding love particles */}
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="cursor-heart"
            style={{
              left: heart.x,
              top: heart.y,
              color: heart.color,
            }}
            initial={{
              scale: 0,
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 0,
            }}
            animate={{
              scale: heart.scale,
              opacity: 0,
              x: heart.targetX,
              y: heart.targetY,
              rotate: heart.rotation,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.2, 0.8, 0.3, 1],
              opacity: { duration: 1.2, ease: 'easeIn' },
            }}
          >
            {heart.isActualHeart ? (
              <svg className="cursor-heart__svg" viewBox="0 0 24 24" width="20" height="20" fill={heart.color}>
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            ) : (
              <span className="cursor-heart__code mono">{heart.symbol}</span>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}
