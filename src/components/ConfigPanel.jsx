import React, { useState } from 'react';
import { Save, Eye, GripVertical, ToggleLeft } from 'lucide-react';

const ConfigPanel = ({ type, onClose }) => {
  const [fromValue, setFromValue] = useState('100000');
  const [toValue, setToValue] = useState('100000');
  const [columns, setColumns] = useState([
    { id: 1, name: 'Rename Grid', enabled: true },
    { id: 2, name: 'Rename Grid', enabled: true },
    { id: 3, name: 'For a very long column name that gets truncated...', enabled: true },
    { id: 4, name: 'Rename Grid', enabled: true },
    { id: 5, name: 'Rename Grid', enabled: true },
  ]);https://bitscale-ten-sigma.vercel.app/

  const toggleColumn = (id) => {
    setColumns(columns.map(col => 
      col.id === id ? { ...col, enabled: !col.enabled } : col
    ));
  };

  if (type === 'rows') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl p-6 w-80">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Rows</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              ✕
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                <input
                  type="text"
                  value={fromValue}
                  onChange={(e) => setFromValue(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">To*</label>
                <input
                  type="text"
                  value={toValue}
                  onChange={(e) => setToValue(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <p className="text-xs text-gray-500">*Leave blank to remove limit</p>
            
            <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              <Save className="w-4 h-4" />
              <span>Apply</span>
            </button>
            
            <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
              <Eye className="w-4 h-4" />
              <span>Show All Rows</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'columns') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl p-6 w-96 max-h-96 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">column</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              ✕
            </button>
          </div>
          
          <div className="space-y-2 mb-4">
            {columns.map((column) => (
              <div key={column.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
                <GripVertical className="w-4 h-4 text-gray-400" />
                <span className="flex-1 text-sm text-gray-700 truncate" title={column.name}>
                  {column.name}
                </span>
                <div className="relative inline-block w-10 h-6 bg-blue-500 rounded-full cursor-pointer">
                  <div 
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      column.enabled ? 'right-1' : 'left-1'
                    }`}
                    onClick={() => toggleColumn(column.id)}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
            <Eye className="w-4 h-4" />
            <span>Show All Column</span>
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default ConfigPanel; 