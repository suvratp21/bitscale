import React, { useState } from 'react';
import { Menu, ChevronDown, ArrowRight, Power, ToggleLeft } from 'lucide-react';

const BottomBar = () => {
  const [autoDedupe, setAutoDedupe] = useState(true);
  const [autoRunColumns, setAutoRunColumns] = useState(true);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-100 border-t border-gray-200 px-4 sm:px-6 py-3">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-3 py-2 bg-white rounded-lg text-sm text-gray-700 hover:bg-gray-50">
            <Menu className="w-4 h-4" />
            <span>Bitscale...book</span>
            <span className="text-gray-400">...</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          
          <button className="flex items-center space-x-2 px-3 py-2 bg-white rounded-lg text-sm text-gray-700 hover:bg-gray-50">
            <span>Find People</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right side */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 w-full sm:w-auto justify-start sm:justify-end">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Power className="w-4 h-4" />
            <span>Kill Run</span>
          </div>
          
          <span className="text-sm text-gray-500">Coming Soon</span>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-700">Auto Dedupe</span>
            <div 
              className={`relative inline-block w-10 h-6 rounded-full cursor-pointer transition-colors duration-200 ${
                autoDedupe ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              onClick={() => setAutoDedupe(!autoDedupe)}
            >
              <div 
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                  autoDedupe ? 'translate-x-4' : 'translate-x-0'
                }`}
              ></div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-700">Auto Run Columns</span>
            <div 
              className={`relative inline-block w-10 h-6 rounded-full cursor-pointer transition-colors duration-200 ${
                autoRunColumns ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              onClick={() => setAutoRunColumns(!autoRunColumns)}
            >
              <div 
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                  autoRunColumns ? 'translate-x-4' : 'translate-x-0'
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar; 