
import React, { useState, useEffect } from 'react';

interface LoaderProps {
  onLoadComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadComplete }) => {
  const [count, setCount] = useState(0);
  const [showLShape, setShowLShape] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const countInterval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(countInterval);
          setTimeout(() => setShowLShape(true), 300);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(countInterval);
  }, []);

  useEffect(() => {
    if (showLShape) {
      setTimeout(() => {
        setIsComplete(true);
        setTimeout(onLoadComplete, 800);
      }, 2000);
    }
  }, [showLShape, onLoadComplete]);

  if (isComplete) return null;

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center transition-colors duration-300">
      {/* Counter in corner */}
      <div className="absolute top-8 right-8 text-foreground text-6xl font-bold">
        {count}
      </div>
      
      {/* L-Shape animation in center */}
      {showLShape && (
        <div className="relative">
          <div 
            className="w-32 h-32 bg-foreground loader-animation"
            style={{
              clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'
            }}
          />
        </div>
      )}
      
      {/* Loading text */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground text-xl">
        Loading...
      </div>
    </div>
  );
};

export default Loader;
