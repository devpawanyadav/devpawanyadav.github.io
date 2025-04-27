import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm z-50">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="relative w-16 h-16">
          {[...Array(3)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary dark:border-t-accent"
              animate={{ 
                rotate: 360,
                scale: 1 - i * 0.2
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2
              }}
            />
          ))}
        </div>
        <motion.p
          className="mt-4 text-gray-600 dark:text-gray-300 font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loading;