import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Filter, ArrowUpDown, Star, MoreHorizontal, Grid, SortAsc, SortDesc, Plus, Trash2, Edit, Copy, Settings, Share, Download, FileText, Users, Sparkles, Type, Link, Braces } from 'lucide-react';
import DropdownMenu from './DropdownMenu.jsx';

const Toolbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [rowsPopover, setRowsPopover] = useState(false);
  const [columnsPopover, setColumnsPopover] = useState(false);
  const [rowsCount, setRowsCount] = useState(5);
  const [columnsCount, setColumnsCount] = useState(5);
  
  const rowsRef = useRef(null);
  const columnsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (rowsRef.current && !rowsRef.current.contains(event.target)) {
        setRowsPopover(false);
      }
      if (columnsRef.current && !columnsRef.current.contains(event.target)) {
        setColumnsPopover(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const gridMenuItems = [
    { label: 'Unstar Grid', icon: <Star className="w-4 h-4" />, onClick: () => console.log('Unstar Grid') },
    { label: 'Rename Grid', icon: <Edit className="w-4 h-4" />, onClick: () => console.log('Rename Grid') },
    { label: 'Delete Grid', icon: <Trash2 className="w-4 h-4" />, onClick: () => console.log('Delete Grid'), destructive: true },
  ];

  const sortMenuItems = [
    { label: 'Ascending', icon: <SortAsc className="w-4 h-4" />, onClick: () => console.log('Sort Ascending') },
    { label: 'Descending', icon: <SortDesc className="w-4 h-4" />, onClick: () => console.log('Sort Descending') },
  ];

  const actionMenuItems = [
    { label: 'Add New Column', icon: <Plus className="w-4 h-4" />, onClick: () => console.log('Add New Column') },
    { label: 'Add New Row', icon: <Plus className="w-4 h-4" />, onClick: () => console.log('Add New Row') },
    { label: 'Dedupe Column', icon: <Braces className="w-4 h-4" />, onClick: () => console.log('Dedupe Column') },
    { label: 'Find People for Company', icon: <Users className="w-4 h-4" />, onClick: () => console.log('Find People for Company') },
    { separator: true },
    { label: 'Share as Link', icon: <Share className="w-4 h-4" />, onClick: () => console.log('Share as Link') },
    { label: 'Download as Excel', icon: <Download className="w-4 h-4" />, onClick: () => console.log('Download as Excel') },
    { label: 'Download as CSV', icon: <FileText className="w-4 h-4" />, onClick: () => console.log('Download as CSV') },
  ];

  const enrichmentMenuItems = [
    { label: 'Input Column', icon: <Type className="w-4 h-4" />, onClick: () => console.log('Input Column') },
    { label: 'Merge Column', icon: <Link className="w-4 h-4" />, onClick: () => console.log('Merge Column') },
    { label: 'Formula Column', icon: <Braces className="w-4 h-4" />, onClick: () => console.log('Formula Column') },
  ];

  const addColumnMenuItems = [
    { label: 'Add Enrichment', icon: <Sparkles className="w-4 h-4" />, onClick: () => console.log('Add Enrichment'), highlighted: true },
    { label: 'Input Column', icon: <Type className="w-4 h-4" />, onClick: () => console.log('Input Column') },
    { label: 'Merge Column', icon: <Link className="w-4 h-4" />, onClick: () => console.log('Merge Column') },
    { label: 'Formula Column', icon: <Braces className="w-4 h-4" />, onClick: () => console.log('Formula Column') },
  ];

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div className="flex items-center justify-between px-6 py-3 bg-gray-50 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        {/* Data Source */}
        <button className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
          <span>Data Source</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        
        {/* Rows Popover */}
        <div className="relative" ref={rowsRef}>
          <button 
            className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
            onClick={() => setRowsPopover(!rowsPopover)}
          >
            3 Rows
          </button>
          
          {rowsPopover && (
            <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50 min-w-64">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    value={rowsCount}
                    onChange={(e) => setRowsCount(parseInt(e.target.value) || 0)}
                    className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                    min="1"
                  />
                  <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300">
                    Add Rows
                  </button>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Plus className="w-4 h-4 text-gray-600" />
                  <input
                    type="number"
                    value={rowsCount}
                    onChange={(e) => setRowsCount(parseInt(e.target.value) || 0)}
                    className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                    min="1"
                  />
                  <span className="text-sm text-gray-600">Rows</span>
                </div>
                
                <div className="border-t border-gray-200 pt-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      value={rowsCount}
                      onChange={(e) => setRowsCount(parseInt(e.target.value) || 0)}
                      className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                      min="1"
                    />
                    <button className="px-3 py-1 bg-gray-800 text-white rounded text-sm hover:bg-gray-900">
                      Add Rows
                    </button>
                  </div>
                </div>
                
                <button className="w-full flex items-center justify-center space-x-2 px-3 py-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50">
                  <Sparkles className="w-4 h-4" />
                  <span>Adding Rows</span>
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Columns Popover */}
        <div className="relative" ref={columnsRef}>
          <button 
            className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
            onClick={() => setColumnsPopover(!columnsPopover)}
          >
            50/50 Columns
          </button>
          
          {columnsPopover && (
            <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50 min-w-64">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    value={columnsCount}
                    onChange={(e) => setColumnsCount(parseInt(e.target.value) || 0)}
                    className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                    min="1"
                  />
                  <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300">
                    Add Columns
                  </button>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Plus className="w-4 h-4 text-gray-600" />
                  <input
                    type="number"
                    value={columnsCount}
                    onChange={(e) => setColumnsCount(parseInt(e.target.value) || 0)}
                    className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                    min="1"
                  />
                  <span className="text-sm text-gray-600">Columns</span>
                </div>
                
                <div className="border-t border-gray-200 pt-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      value={columnsCount}
                      onChange={(e) => setColumnsCount(parseInt(e.target.value) || 0)}
                      className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                      min="1"
                    />
                    <button className="px-3 py-1 bg-gray-800 text-white rounded text-sm hover:bg-gray-900">
                      Add Columns
                    </button>
                  </div>
                </div>
                
                <button className="w-full flex items-center justify-center space-x-2 px-3 py-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50">
                  <Sparkles className="w-4 h-4" />
                  <span>Adding Columns</span>
                </button>
              </div>
            </div>
          )}
        </div>
        
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
        {/* Action Menu */}
        <DropdownMenu
          trigger={
            <button className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200">
              <span>Action</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          }
          items={actionMenuItems}
          isOpen={activeDropdown === 'action'}
          onToggle={(isOpen) => handleDropdownToggle(isOpen ? 'action' : null)}
        />
        
        <button 
          onClick={() => {
            // Simulate unsaved changes when Enrichment is clicked
            const event = new CustomEvent('triggerUnsavedChanges');
            document.dispatchEvent(event);
          }}
          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800"
        >
          <Star className="w-4 h-4" />
          <span>Add Enrichment</span>
        </button>
      </div>
    </div>
  );
};

export default Toolbar; 