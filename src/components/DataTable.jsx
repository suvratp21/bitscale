import React, { useState } from 'react';
import { User, Calendar, ChevronDown, ExternalLink, Star, X, Edit, Copy, Settings, Plus, Trash2, Braces, Cloud, Upload, CheckCircle, Globe, Phone, AlertCircle } from 'lucide-react';
import DropdownMenu from './DropdownMenu.jsx';

const DataTable = ({ data }) => {
  const [contextMenu, setContextMenu] = useState({ show: false, x: 0, y: 0 });
  const [savingStatus, setSavingStatus] = useState('Changes saved');
  const [activeDropdown, setActiveDropdown] = useState(null);

  const getStatusColor = (text) => {
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
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-yellow-50">
            <th className="sticky left-0 z-10 px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border border-gray-200">
              #
            </th>
            <th
              className="px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border border-gray-200 cursor-pointer hover:bg-yellow-100"
              onContextMenu={(e) => handleColumnRightClick(e, 'SOURCE COLUMN')}
            >
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Source Column</span>
              </div>
            </th>
            <th
              className="px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border border-gray-200 cursor-pointer hover:bg-yellow-100"
              onContextMenu={(e) => handleColumnRightClick(e, 'LAST UPDATED AT')}
            >
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Last Updated At</span>
              </div>
            </th>
            <th
              className="px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border border-gray-200 cursor-pointer hover:bg-yellow-100"
              onContextMenu={(e) => handleColumnRightClick(e, 'COMPANY NAME')}
            >
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 text-center text-sm font-bold">f</span>
                <span>Company Name</span>
              </div>
            </th>
            <th
              className="px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border border-gray-200 cursor-pointer hover:bg-yellow-100"
              onContextMenu={(e) => handleColumnRightClick(e, 'FOUNDER YEAR')}
            >
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 text-center text-sm font-bold">f</span>
                <span>Founder Year</span>
              </div>
            </th>
            <th
              className="px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border border-gray-200 cursor-pointer hover:bg-yellow-100"
              onContextMenu={(e) => handleColumnRightClick(e, 'FIND ICP')}
            >
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>Find ICP</span>
              </div>
            </th>
            <th
              className="px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border border-gray-200 cursor-pointer hover:bg-yellow-100"
              onContextMenu={(e) => handleColumnRightClick(e, 'LINKEDIN JOB URL')}
            >
              <div className="flex items-center space-x-2">
                <ExternalLink className="w-4 h-4" />
                <span>LinkedIn Job URL</span>
              </div>
            </th>
            <th
              className="px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border border-gray-200 cursor-pointer hover:bg-yellow-100"
              onContextMenu={(e) => handleColumnRightClick(e, 'WATERFALL - PEOPLE')}
            >
              <span>Waterfall - People</span>
            </th>
            <th
              className="px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border border-gray-200 cursor-pointer hover:bg-yellow-100"
              onContextMenu={(e) => handleColumnRightClick(e, 'PHONE NUMBER')}
            >
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-4 h-4" />
                <span>Phone Number</span>
              </div>
            </th>
            <th
              className="px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border border-gray-200 cursor-pointer hover:bg-yellow-100"
              onContextMenu={(e) => handleColumnRightClick(e, 'FETCH PHONE NUMBER')}
            >
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-4 h-4" />
                <span>Fetch Phone Number</span>
              </div>
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border border-gray-200">
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
              <td className="px-4 py-3 text-sm text-gray-900 border border-gray-200 bg-yellow-50">
                {row.id}
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 border border-gray-200 bg-yellow-50">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-gray-400" />
                  <span title={row.source}>{truncateText(row.source)}</span>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 border border-gray-200 text-center">
                <span title={row.lastUpdatedAt}>{truncateText(row.lastUpdatedAt)}</span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 border border-gray-200">
                <span title={row.companyName}>{truncateText(row.companyName)}</span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 border border-gray-200 text-center">
                <span title={row.founderYear}>{row.founderYear}</span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 border border-gray-200 text-center">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  row.findIcp === 'ICP' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {row.findIcp}
                </span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 border border-gray-200">
                <div className="flex items-center space-x-2">
                  <ExternalLink className="w-4 h-4 text-blue-600" />
                  <span title={row.linkedinJobUrl}>{truncateText(row.linkedinJobUrl)}</span>
                </div>
              </td>
              <td className={`px-4 py-3 text-sm border border-gray-200 ${getStatusBgColor(row.waterfallPeople)}`}>
                <span className={getStatusColor(row.waterfallPeople)} title={row.waterfallPeople}>
                  {truncateText(row.waterfallPeople)}
                </span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 border border-gray-200">
                <span title={row.phoneNumber}>{row.phoneNumber}</span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 border border-gray-200">
                <div className="flex items-center space-x-2">
                  {getFetchPhoneNumberIcon(row.fetchPhoneNumber)}
                  <span>{row.fetchPhoneNumber}</span>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 border border-gray-200">
                {/* Empty cell for ADD COLUMN */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Right-click Context Menu */}
      {contextMenu.show && (
        <div
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

      {/* Status Indicator */}
      <div className="fixed bottom-20 right-6 z-40">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-2">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Button</span>
          </div>
          <div className="mt-1 border border-purple-300 border-dashed rounded p-2 bg-purple-50">
            <DropdownMenu
              trigger={
                <div className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                  <Cloud className="w-4 h-4" />
                  <span>{savingStatus}</span>
                </div>
              }
              items={statusMenuItems}
              isOpen={activeDropdown === 'status'}
              onToggle={(isOpen) => setActiveDropdown(isOpen ? 'status' : null)}
              position="top-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable; 