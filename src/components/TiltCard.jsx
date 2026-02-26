import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './TiltCard.css';

export default function TiltCard({
  children,
  className = '',
  glareColor = 'rgba(255, 255, 255, 0.08)',
  tiltAmount = 15,
  perspective = 800,
  scale = 1.02,
  ...props
}) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -tiltAmount;
    const rotateY = ((x - centerX) / centerX) * tiltAmount;

    setTilt({ rotateX, rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        scale: isHovered ? scale : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        mass: 0.5,
      }}
      style={{ perspective: `${perspective}px` }}
      {...props}
    >
      {children}

      {/* Glare / light reflection overlay */}
      <div
        className="tilt-card__glare"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, ${glareColor} 0%, transparent 60%)`,
          opacity: glare.opacity,
        }}
      />

      {/* Edge shine effect */}
      <div
        className="tilt-card__shine"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `linear-gradient(
            ${105 + tilt.rotateY * 2}deg,
            transparent 40%,
            rgba(255, 255, 255, 0.03) 45%,
            rgba(255, 255, 255, 0.06) 50%,
            rgba(255, 255, 255, 0.03) 55%,
            transparent 60%
          )`,
        }}
      />

      {/* Bottom reflection / shadow */}
      <div
        className="tilt-card__reflection"
        style={{
          opacity: isHovered ? 0.6 : 0,
          transform: `translateX(${tilt.rotateY * 0.5}px) scaleY(0.15) scaleX(0.9)`,
        }}
      />
    </motion.div>
  );
}
