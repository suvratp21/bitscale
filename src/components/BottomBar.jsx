import React from 'react';
import { Menu, ChevronDown, ArrowRight, Power, ToggleLeft } from 'lucide-react';

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-100 border-t border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
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
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Power className="w-4 h-4" />
            <span>Kill Run</span>
          </div>
          
          <span className="text-sm text-gray-500">Coming Soon</span>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-700">Auto Dedupe</span>
            <div className="relative inline-block w-10 h-6 bg-blue-500 rounded-full cursor-pointer">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-700">Auto Run Columns</span>
            <div className="relative inline-block w-10 h-6 bg-blue-500 rounded-full cursor-pointer">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar; 