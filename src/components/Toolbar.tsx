import React from 'react';
import { ChevronDown, Filter, ArrowUpDown, Star } from 'lucide-react';

const Toolbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-gray-50 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
          <span>Data Source</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        
        <button className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
          3 Rows
        </button>
        
        <button className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
          50/50 Columns
        </button>
        
        <button className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </button>
        
        <button className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
          <ArrowUpDown className="w-4 h-4" />
          <span>Sort</span>
        </button>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200">
          <span>Action</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        
        <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-black rounded">
          <Star className="w-4 h-4" />
          <span>Enrichment</span>
        </button>
      </div>
    </div>
  );
};

export default Toolbar; 