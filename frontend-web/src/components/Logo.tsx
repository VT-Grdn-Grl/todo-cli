
import React from 'react';
import { CheckCircle2, Zap } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center justify-center mb-8 animate-fade-in">
      <div className="relative">
        {/* Main logo container */}
        <div className="flex items-center space-x-2">
          {/* Animated check icon */}
          <div className="relative">
            <CheckCircle2 
              className="w-8 h-8 text-blue-500 animate-pulse" 
              fill="currentColor"
            />
            <Zap 
              className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 animate-bounce" 
              fill="currentColor"
            />
          </div>
          
          {/* App name with gradient */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              TaskFlow
            </h1>
            <p className="text-sm text-gray-500 -mt-1 font-medium">
              Flow through your day ✨
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-2 -left-2 w-3 h-3 bg-blue-200 rounded-full animate-ping opacity-75"></div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-purple-200 rounded-full animate-ping opacity-75 animation-delay-700"></div>
      </div>
    </div>
  );
};

export default Logo;
