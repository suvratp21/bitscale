import React from 'react';
import { Star, Bookmark, MoreHorizontal, Cloud, ChevronDown, ArrowLeft } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200">
      {/* Left side */}
      <div className="flex items-center space-x-3">
        <button className="text-gray-400 hover:text-gray-600">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button className="text-gray-400 hover:text-gray-600">
          <Star className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">Bitscale workbook</h1>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Cloud className="w-4 h-4" />
          <span>Changes saved</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span>2,450,005/9,999,999</span>
        </div>
      </div>
    </div>
  );
};

export default Header; 