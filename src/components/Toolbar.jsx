import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Filter, ArrowUpDown, Star, MoreHorizontal, Grid, SortAsc, SortDesc, Plus, Trash2, Edit, Copy, Settings, Share, Download, FileText, Users, Sparkles, Type, Link, Braces, Cloud, Upload, Database, Building, Globe, Calendar, X } from 'lucide-react';
import DropdownMenu from './DropdownMenu.jsx';

const Toolbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [rowsPopover, setRowsPopover] = useState(false);
  const [columnsPopover, setColumnsPopover] = useState(false);
  const [dataSourcePopover, setDataSourcePopover] = useState(false);
  const [filterPopover, setFilterPopover] = useState(false);
  const [rowsCount, setRowsCount] = useState(5);
  const [columnsCount, setColumnsCount] = useState(5);
  const [selectedDataSource, setSelectedDataSource] = useState('Data Source');
  
  const rowsRef = useRef(null);
  const columnsRef = useRef(null);
  const dataSourceRef = useRef(null);
  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (rowsRef.current && !rowsRef.current.contains(event.target)) {
        setRowsPopover(false);
      }
      if (columnsRef.current && !columnsRef.current.contains(event.target)) {
        setColumnsPopover(false);
      }
      if (dataSourceRef.current && !dataSourceRef.current.contains(event.target)) {
        setDataSourcePopover(false);
      }
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setFilterPopover(false);
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
    { label: 'Ascending', icon: <div className="flex items-center space-x-1"><span className="text-xs">A</span><ArrowUpDown className="w-3 h-3" /><span className="text-xs">Z</span></div>, onClick: () => console.log('Sort Ascending') },
    { label: 'Descending', icon: <div className="flex items-center space-x-1"><span className="text-xs">Z</span><ArrowUpDown className="w-3 h-3" /><span className="text-xs">A</span></div>, onClick: () => console.log('Sort Descending') },
  ];

  const actionMenuItems = [
    { label: 'Add New Column', icon: <div className="flex items-center space-x-1"><span className="text-xs">☰</span><Plus className="w-3 h-3" /></div>, onClick: () => console.log('Add New Column') },
    { label: 'Add New Row', icon: <div className="flex items-center space-x-1"><span className="text-xs">☰</span><Plus className="w-3 h-3" /></div>, onClick: () => console.log('Add New Row') },
    { label: 'Dedupe Column', icon: <Braces className="w-4 h-4" />, onClick: () => console.log('Dedupe Column') },
    { label: 'Find People for Company', icon: <div className="flex items-center space-x-1"><Users className="w-3 h-3" /><Plus className="w-3 h-3" /></div>, onClick: () => console.log('Find People for Company') },
    { separator: true },
    { label: 'Share as Link', icon: <div className="flex items-center space-x-1"><Share className="w-3 h-3" /><span className="text-xs">••</span></div>, onClick: () => console.log('Share as Link') },
    { label: 'Download as Excel', icon: <div className="flex items-center space-x-1"><FileText className="w-3 h-3" /><span className="text-xs">↓</span></div>, onClick: () => console.log('Download as Excel') },
    { label: 'Download as CSV', icon: <div className="flex items-center space-x-1"><Download className="w-3 h-3" /></div>, onClick: () => console.log('Download as CSV') },
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

  const dataSourceMenuItems = [
    { label: 'Data Source', icon: <Cloud className="w-4 h-4" />, onClick: () => setSelectedDataSource('API Data') },
    { label: 'CSV Upload', icon: <Upload className="w-4 h-4" />, onClick: () => setSelectedDataSource('CSV Upload') },
    { label: 'Excel File', icon: <FileText className="w-4 h-4" />, onClick: () => setSelectedDataSource('Excel File') },
    { label: 'Database', icon: <Database className="w-4 h-4" />, onClick: () => setSelectedDataSource('Database') },
    { separator: true },
    { label: 'Connect New Source', icon: <Plus className="w-4 h-4" />, onClick: () => console.log('Connect New Source') },
  ];

  const filterMenuItems = [
    { label: 'Filter by ICP Status', icon: <Filter className="w-4 h-4" />, onClick: () => console.log('Filter by ICP Status') },
    { label: 'Filter by Company', icon: <Building className="w-4 h-4" />, onClick: () => console.log('Filter by Company') },
    { label: 'Filter by Domain', icon: <Globe className="w-4 h-4" />, onClick: () => console.log('Filter by Domain') },
    { label: 'Filter by Date Range', icon: <Calendar className="w-4 h-4" />, onClick: () => console.log('Filter by Date Range') },
    { separator: true },
    { label: 'Clear All Filters', icon: <X className="w-4 h-4" />, onClick: () => console.log('Clear All Filters') },
  ];

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between px-4 sm:px-6 py-3 bg-gray-50 border-b border-gray-200 space-y-3 lg:space-y-0">
      <div className="flex flex-wrap items-center gap-2 lg:gap-4 w-full lg:w-auto">
        {/* Data Source */}
        <div className="relative" ref={dataSourceRef}>
          <button 
            className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
            onClick={() => setDataSourcePopover(!dataSourcePopover)}
          >
            <span>{selectedDataSource}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {dataSourcePopover && (
            <div 
              className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 min-w-48"
              onMouseLeave={() => setDataSourcePopover(false)}
            >
              {dataSourceMenuItems.map((item, index) => (
                <div key={index}>
                  {item.separator ? (
                    <div className="border-t border-gray-200 my-1"></div>
                  ) : (
                    <button
                      onClick={() => {
                        item.onClick();
                        setDataSourcePopover(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center space-x-2 ${
                        item.label === selectedDataSource ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Rows Popover */}
        <div className="relative" ref={rowsRef}>
          <button 
            className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
            onClick={() => setRowsPopover(!rowsPopover)}
          >
            3 Rows
          </button>
          
          {rowsPopover && (
            <div 
              className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50 min-w-64"
              onMouseLeave={() => setRowsPopover(false)}
            >
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-900">Rows</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <label className="text-sm text-gray-600 w-8">From</label>
                    <input
                      type="number"
                      value="100000"
                      className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
                      placeholder="100000"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <label className="text-sm text-gray-600 w-8">To*</label>
                    <input
                      type="number"
                      value="100000"
                      className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
                      placeholder="100000"
                    />
                  </div>
                  
                  <p className="text-xs text-gray-500">*Leave blank to remove limit</p>
                  
                  <button className="w-full flex items-center justify-center space-x-2 px-3 py-2 bg-gray-600 text-white rounded text-sm hover:bg-gray-700">
                    <FileText className="w-4 h-4" />
                    <span>Apply</span>
                  </button>
                  
                  <button className="w-full flex items-center justify-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 text-sm">
                    <span className="w-4 h-4">👁</span>
                    <span>Show All Rows</span>
                  </button>
                </div>
                
                <div className="border-t border-gray-200 pt-3">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <button className="flex items-center space-x-1 px-3 py-1.5 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300">
                        <Plus className="w-4 h-4" />
                        <span>Add</span>
                      </button>
                      <input
                        type="number"
                        value="5"
                        className="w-16 px-2 py-1 border border-gray-300 rounded text-sm"
                        min="1"
                      />
                      <span className="text-sm text-gray-700">Rows</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full flex items-center justify-center space-x-2 px-3 py-2 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300">
                  <span>Add Rows</span>
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
            <div 
              className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50 min-w-64"
              onMouseLeave={() => setColumnsPopover(false)}
            >
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-900">column</h3>
                
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {/* Column list with toggles */}
                  {[
                    'Rename Grid',
                    'For a very long column name th...',
                    'Rename Grid',
                    'Rename Grid',
                    'Rename Grid',
                    'Rename Grid',
                    'Rename Grid',
                    'Rename Grid'
                  ].map((columnName, index) => (
                    <div key={index} className="flex items-center justify-between py-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400 text-xs">⋮⋮</span>
                        <span className="text-sm text-gray-700 truncate">{columnName}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-4 bg-blue-500 rounded-full relative cursor-pointer">
                          <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="w-full flex items-center justify-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 text-sm">
                  <span className="w-4 h-4">👁</span>
                  <span>Show All Column</span>
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Filter */}
        <div className="relative" ref={filterRef}>
          <button 
            className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
            onClick={() => setFilterPopover(!filterPopover)}
          >
            <Filter className="w-4 h-4" />
            <span>Filter</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {filterPopover && (
            <div 
              className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 min-w-48"
              onMouseLeave={() => setFilterPopover(false)}
            >
              {filterMenuItems.map((item, index) => (
                <div key={index}>
                  {item.separator ? (
                    <div className="border-t border-gray-200 my-1"></div>
                  ) : (
                    <button
                      onClick={() => {
                        item.onClick();
                        setFilterPopover(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center space-x-2 text-gray-700"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        

        
        <DropdownMenu
          trigger={
            <button className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
              <ArrowUpDown className="w-4 h-4" />
              <span>Sort</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          }
          items={sortMenuItems}
          isOpen={activeDropdown === 'sort'}
          onToggle={(isOpen) => handleDropdownToggle(isOpen ? 'sort' : null)}
        />
      </div>
      
      <div className="flex flex-wrap items-center gap-2 lg:gap-4 w-full lg:w-auto justify-start lg:justify-end">
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
        
        <DropdownMenu
          trigger={
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
              <ChevronDown className="w-4 h-4" />
            </button>
          }
          items={[
            { label: 'Input Column', icon: <Type className="w-4 h-4" />, onClick: () => console.log('Input Column') },
            { label: 'Merge Column', icon: <Link className="w-4 h-4" />, onClick: () => console.log('Merge Column') },
            { label: 'Formula Column', icon: <Braces className="w-4 h-4" />, onClick: () => console.log('Formula Column') },
          ]}
          isOpen={activeDropdown === 'enrichment'}
          onToggle={(isOpen) => handleDropdownToggle(isOpen ? 'enrichment' : null)}
        />
      </div>
    </div>
  );
};

export default Toolbar; 