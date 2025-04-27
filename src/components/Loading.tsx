const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center animate-fadeIn">
        <div className="relative w-16 h-16">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className={`absolute inset-0 rounded-full border-4 border-transparent border-t-primary dark:border-t-accent animate-spin`}
              style={{
                animationDelay: `${i * 0.2}s`,
                transform: `scale(${1 - i * 0.2})`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 font-medium animate-fadeIn">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;