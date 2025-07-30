import React, { useState, useEffect, useRef } from 'react';
import { User, Calendar, ChevronDown, ExternalLink, Star, X, Edit, Copy, Settings, Plus, Trash2, Braces, Cloud, Upload, CheckCircle, Globe, Phone, AlertCircle, Play } from 'lucide-react';
import DropdownMenu from './DropdownMenu.jsx';

const DataTable = ({ data }) => {
  const [contextMenu, setContextMenu] = useState({ show: false, x: 0, y: 0 });
  const [savingStatus, setSavingStatus] = useState('Changes saved');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showAddRow, setShowAddRow] = useState(false);
  const [rowsToAdd, setRowsToAdd] = useState(1);
  const contextMenuRef = useRef(null);

  const getStatusColor = (text) => {
    if (typeof text !== 'string') {
      return 'text-gray-900';
    }
    if (text.includes('Run condition not met')) return 'text-orange-500';
    if (text.includes('An error occurred')) return 'text-red-500';
    return 'text-gray-900';
  };

  const getStatusBgColor = (text) => {
    return 'bg-white';
  };

  const truncateText = (text, maxLength = 25) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  const handleColumnRightClick = (e, columnName) => {
    e.preventDefault();
    setContextMenu({
      show: true,
      x: e.clientX,
      y: e.clientY,
      columnName
    });
  };

  // Handle click outside context menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contextMenuRef.current && !contextMenuRef.current.contains(event.target)) {
        setContextMenu({ show: false, x: 0, y: 0 });
      }
    };

    if (contextMenu.show) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [contextMenu.show]);



  const columnContextMenuItems = [
    { label: 'Rename Column', icon: <Edit className="w-4 h-4" />, onClick: () => console.log('Rename Column') },
    { label: 'Duplicate Column', icon: <Copy className="w-4 h-4" />, onClick: () => console.log('Duplicate Column') },
    { label: 'Dedupe Column', icon: <Braces className="w-4 h-4" />, onClick: () => console.log('Dedupe Column') },
    { label: 'Edit Column Settings', icon: <Settings className="w-4 h-4" />, onClick: () => console.log('Edit Column Settings') },
    { separator: true },
    { label: 'Insert 1 Column Left', icon: <Plus className="w-4 h-4" />, onClick: () => console.log('Insert Column Left') },
    { label: 'Insert 1 Column Right', icon: <Plus className="w-4 h-4" />, onClick: () => console.log('Insert Column Right') },
    { label: 'Delete Column', icon: <Trash2 className="w-4 h-4" />, onClick: () => console.log('Delete Column'), destructive: true },
  ];

  const statusMenuItems = [
    { label: 'Saving changes', icon: <Upload className="w-4 h-4" />, onClick: () => setSavingStatus('Saving changes') },
    { label: 'Changes saved', icon: <Cloud className="w-4 h-4" />, onClick: () => setSavingStatus('Changes saved') },
  ];

  const getFetchPhoneNumberIcon = (status) => {
    if (status === 'Response') {
      return <CheckCircle className="w-4 h-4 text-green-500" />;
    } else if (status === 'No contact found') {
      return <X className="w-4 h-4 text-red-500" />;
    }
    return null;
  };

  return (
    <div className="overflow-x-auto relative">
      <table className="w-full border-collapse border border-gray-200 min-w-max">
        <thead>
          <tr className="bg-yellow-50">
            <th 
              className="sticky left-0 z-10 px-3 sm:px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border border-gray-200 cursor-pointer hover:bg-yellow-100 min-w-[60px]"
            >
              <div className="flex items-center justify-center">
                <Play className="w-4 h-4 text-gray-700" />
              </div>
            </th>
            <th
              className="px-3 sm:px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border border-gray-200 cursor-pointer hover:bg-yellow-100 min-w-[120px]"
              onContextMenu={(e) => handleColumnRightClick(e, 'SOURCE COLUMN')}
            >
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Source Column</span>
              </div>
            </th>
            <th
              className="px-3 sm:px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border border-gray-200 cursor-pointer hover:bg-yellow-100 min-w-[140px]"
              onContextMenu={(e) => handleColumnRightClick(e, 'LAST UPDATED AT')}
            >
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Last Updated At</span>
              </div>
            </th>
            <th
              className="px-3 sm:px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border border-gray-200 cursor-pointer hover:bg-yellow-100 min-w-[150px]"
              onContextMenu={(e) => handleColumnRightClick(e, 'WATERFALL PEOPLE 1')}
            >
              <span>Waterfall - People 1</span>
            </th>
            <th
              className="px-3 sm:px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border border-gray-200 cursor-pointer hover:bg-yellow-100 min-w-[180px]"
              onContextMenu={(e) => handleColumnRightClick(e, 'ENRICH COMPANY 2')}
            >
              <span>Enrich Company 2</span>
            </th>
            <th
              className="px-3 sm:px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border border-gray-200 cursor-pointer hover:bg-yellow-100 min-w-[100px]"
              onContextMenu={(e) => handleColumnRightClick(e, 'FIND ICP')}
            >
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>Find ICP</span>
              </div>
            </th>
            <th
              className="px-3 sm:px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border border-gray-200 cursor-pointer hover:bg-yellow-100 min-w-[150px]"
              onContextMenu={(e) => handleColumnRightClick(e, 'LINKEDIN JOB URL')}
            >
              <div className="flex items-center space-x-2">
                <ExternalLink className="w-4 h-4" />
                <span>LinkedIn Job URL</span>
              </div>
            </th>
            <th
              className="px-3 sm:px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border border-gray-200 cursor-pointer hover:bg-yellow-100 min-w-[140px]"
              onContextMenu={(e) => handleColumnRightClick(e, 'DOMAIN FROM EMAIL')}
            >
              <span>Domain from Email</span>
            </th>
            <th
              className="px-3 sm:px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border border-gray-200 cursor-pointer hover:bg-yellow-100 min-w-[150px]"
              onContextMenu={(e) => handleColumnRightClick(e, 'WATERFALL PEOPLE 2')}
            >
              <span>Waterfall - People 2</span>
            </th>
            <th 
              className="px-3 sm:px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border border-gray-200 cursor-pointer hover:bg-yellow-100 min-w-[120px]"
            >
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                <Plus className="w-4 h-4" />
                <span>ADD COLUMN</span>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              <td className="px-3 sm:px-4 py-3 text-sm text-gray-900 border border-gray-200 bg-yellow-50">
                {row.id}
              </td>
              <td className="px-3 sm:px-4 py-3 text-sm text-gray-900 border border-gray-200 bg-yellow-50">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-gray-400" />
                  <span title={row.source}>{truncateText(row.source)}</span>
                </div>
              </td>
              <td className="px-3 sm:px-4 py-3 text-sm text-gray-900 border border-gray-200 text-center">
                <span title={row.lastUpdatedAt}>{truncateText(row.lastUpdatedAt)}</span>
              </td>
              <td className={`px-3 sm:px-4 py-3 text-sm border border-gray-200 ${getStatusBgColor(row.waterfallPeople1)}`}>
                <span className={getStatusColor(row.waterfallPeople1)} title={row.waterfallPeople1}>
                  {truncateText(row.waterfallPeople1)}
                </span>
              </td>
              <td className={`px-3 sm:px-4 py-3 text-sm border border-gray-200 ${getStatusBgColor(row.enrichCompany2)}`}>
                <span className={getStatusColor(row.enrichCompany2)} title={row.enrichCompany2}>
                  {truncateText(row.enrichCompany2)}
                </span>
              </td>
              <td className="px-3 sm:px-4 py-3 text-sm text-gray-900 border border-gray-200 text-center">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  row.findIcp === 'ICP' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {row.findIcp}
                </span>
              </td>
              <td className={`px-3 sm:px-4 py-3 text-sm border border-gray-200 ${getStatusBgColor(row.linkedinJobUrl)}`}>
                <div className="flex items-center space-x-2">
                  <ExternalLink className="w-4 h-4 text-blue-600" />
                  <span className={getStatusColor(row.linkedinJobUrl)} title={row.linkedinJobUrl}>
                    {truncateText(row.linkedinJobUrl)}
                  </span>
                </div>
              </td>
              <td className={`px-3 sm:px-4 py-3 text-sm border border-gray-200 ${getStatusBgColor(row.domainFromEmail)}`}>
                <span className={getStatusColor(row.domainFromEmail)} title={row.domainFromEmail}>
                  {truncateText(row.domainFromEmail)}
                </span>
              </td>
              <td className={`px-3 sm:px-4 py-3 text-sm border border-gray-200 ${getStatusBgColor(row.waterfallPeople2)}`}>
                <span className={getStatusColor(row.waterfallPeople2)} title={row.waterfallPeople2}>
                  {truncateText(row.waterfallPeople2)}
                </span>
              </td>
              <td className="px-3 sm:px-4 py-3 text-sm text-gray-900 border border-gray-200">
                {/* Empty cell for ADD COLUMN */}
              </td>
            </tr>
          ))}
          
          {/* Add Row Row */}
          <tr className="border-t-2 border-gray-300">
            <td className="px-3 sm:px-4 py-3 text-sm text-gray-500 border border-gray-200 bg-gray-50 text-center">
              {data.length + 1}
            </td>
            <td className="px-3 sm:px-4 py-3 text-sm text-gray-900 border border-gray-200 bg-gray-50">
              <div className="flex items-center justify-center space-x-2">
                {!showAddRow ? (
                  <button
                    onClick={() => setShowAddRow(true)}
                    className="flex items-center space-x-1 px-2 py-1 text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add Row</span>
                  </button>
                ) : (
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={rowsToAdd}
                      onChange={(e) => setRowsToAdd(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-12 px-1 py-1 text-xs border border-gray-300 rounded text-center"
                      placeholder="1"
                    />
                    <button
                      onClick={() => {
                        console.log(`Adding ${rowsToAdd} rows`);
                        setShowAddRow(false);
                        setRowsToAdd(1);
                      }}
                      className="px-2 py-1 text-xs text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors"
                    >
                      Add
                    </button>
                    <button
                      onClick={() => {
                        setShowAddRow(false);
                        setRowsToAdd(1);
                      }}
                      className="px-2 py-1 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </td>
            <td className="px-3 sm:px-4 py-3 text-sm text-gray-500 border border-gray-200 bg-gray-50 text-center">
              <span className="text-gray-400">-</span>
            </td>
            <td className="px-3 sm:px-4 py-3 text-sm text-gray-500 border border-gray-200 bg-gray-50 text-center">
              <span className="text-gray-400">-</span>
            </td>
            <td className="px-3 sm:px-4 py-3 text-sm text-gray-500 border border-gray-200 bg-gray-50 text-center">
              <span className="text-gray-400">-</span>
            </td>
            <td className="px-3 sm:px-4 py-3 text-sm text-gray-500 border border-gray-200 bg-gray-50 text-center">
              <span className="text-gray-400">-</span>
            </td>
            <td className="px-3 sm:px-4 py-3 text-sm text-gray-500 border border-gray-200 bg-gray-50 text-center">
              <span className="text-gray-400">-</span>
            </td>
            <td className="px-3 sm:px-4 py-3 text-sm text-gray-500 border border-gray-200 bg-gray-50 text-center">
              <span className="text-gray-400">-</span>
            </td>
            <td className="px-3 sm:px-4 py-3 text-sm text-gray-500 border border-gray-200 bg-gray-50 text-center">
              <span className="text-gray-400">-</span>
            </td>
            <td className="px-3 sm:px-4 py-3 text-sm text-gray-500 border border-gray-200 bg-gray-50 text-center">
              <span className="text-gray-400">-</span>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Right-click Context Menu */}
      {contextMenu.show && (
        <div
          ref={contextMenuRef}
          className="fixed z-50 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-48"
          style={{ left: contextMenu.x, top: contextMenu.y }}
          onMouseLeave={() => setContextMenu({ show: false, x: 0, y: 0 })}
        >
          {columnContextMenuItems.map((item, index) => (
            <div key={index}>
              {item.separator ? (
                <div className="border-t border-gray-200 my-1"></div>
              ) : (
                <button
                  onClick={() => {
                    item.onClick();
                    setContextMenu({ show: false, x: 0, y: 0 });
                  }}
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center space-x-2 ${
                    item.destructive ? 'text-red-600 hover:bg-red-50' : 'text-gray-700'
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
  );
};

export default DataTable; 