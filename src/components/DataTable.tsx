import React from 'react';
import type { TableRow } from '../types/data';
import { User, Calendar, ChevronDown, ExternalLink, Star, X } from 'lucide-react';

interface DataTableProps {
  data: TableRow[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const getStatusColor = (text: string) => {
    if (text.includes('Run condition not met')) return 'text-orange-500';
    if (text.includes('An error occurred')) return 'text-red-500';
    return 'text-gray-900';
  };

  const getStatusBgColor = (text: string) => {
    // if (text.includes('Run condition not met')) return 'bg-orange-50';
    // if (text.includes('An error occurred')) return 'bg-red-50';
    return 'bg-white';
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-yellow-50">
            <th className="sticky left-0 z-10 px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border-b border-gray-200">
              #
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>SOURCE COLUMN</span>
              </div>
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>LAST UPDATED AT</span>
              </div>
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-500 text-white text-xs flex items-center justify-center rounded font-bold">
                  ICP
                </div>
                <span>FIND ICP</span>
              </div>
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <ExternalLink className="w-4 h-4 text-blue-600" />
                <span>LINKEDIN JOB URL</span>
              </div>
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <ChevronDown className="w-4 h-4" />
                <span>WATERFALL - PEOPLE</span>
              </div>
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>ENRICH COMPANY -2</span>
              </div>
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <X className="w-4 h-4 text-gray-600" />
                <span>DOMAIN FROM EMAIL</span>
              </div>
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 bg-yellow-50 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <ChevronDown className="w-4 h-4" />
                <span>WATERFALL - PEOPLE</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              <td className="sticky left-0 z-10 px-4 py-3 text-sm text-gray-500 border-b border-gray-200">
                {row.id}
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 border-b border-gray-200 bg-yellow-50">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-gray-400" />
                  <span>{row.source}</span>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 border-b border-gray-200 text-center">
                {row.lastUpdatedAt}
              </td>
              <td className="px-4 py-3 text-sm border-b border-gray-200">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  row.findIcp === 'ICP' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {row.findIcp}
                </span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <ExternalLink className="w-4 h-4 text-blue-600" />
                  <span>{row.linkedinJobUrl}</span>
                </div>
              </td>
              <td className={`px-4 py-3 text-sm border-b border-gray-200 ${getStatusBgColor(row.waterfallPeople1)}`}>
                <span className={getStatusColor(row.waterfallPeople1)}>
                  {row.waterfallPeople1}
                </span>
              </td>
              <td className={`px-4 py-3 text-sm border-b border-gray-200 ${getStatusBgColor(row.enrichCompany2)}`}>
                <span className={getStatusColor(row.enrichCompany2)}>
                  {row.enrichCompany2}
                </span>
              </td>
              <td className={`px-4 py-3 text-sm border-b border-gray-200 ${getStatusBgColor(row.domainFromEmail)}`}>
                <span className={getStatusColor(row.domainFromEmail)}>
                  {row.domainFromEmail}
                </span>
              </td>
              <td className={`px-4 py-3 text-sm border-b border-gray-200 ${getStatusBgColor(row.waterfallPeople2)}`}>
                <span className={getStatusColor(row.waterfallPeople2)}>
                  {row.waterfallPeople2}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable; 