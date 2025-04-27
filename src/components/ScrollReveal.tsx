import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right';
  delay?: number;
  duration?: number;
  threshold?: number;
  margin?: string;
}

const animations = {
  'fade': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  'slide-up': {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  'slide-left': {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  'slide-right': {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  }
};

const ScrollReveal = ({ 
  children, 
  animation = 'fade',
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  margin = '-100px'
}: ScrollRevealProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
    rootMargin: margin
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={animations[animation]}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;