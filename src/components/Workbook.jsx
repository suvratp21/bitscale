import React from 'react';
import Header from './Header.jsx';
import Toolbar from './Toolbar.jsx';
import DataTable from './DataTable.jsx';
import BottomBar from './BottomBar.jsx';
import LoadingSpinner from './LoadingSpinner.jsx';
import { useTableData } from '../hooks/useTableData.js';
import { STATUS_MESSAGES } from '../constants/index.js';

const Workbook = () => {
  const {
    data,
    loading,
    error,
    searchTerm,
    sortField,
    sortOrder,
    currentPage,
    itemsPerPage,
    totalPages,
    totalItems,
    startItem,
    endItem,
    handleSearch,
    handleSort,
    handlePageChange,
    handleItemsPerPageChange,
    refreshData,
  } = useTableData();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={refreshData} 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            {STATUS_MESSAGES.RETRY}
          </button>
        </div>
      </div>
    );
  }

  // Debug: Log the number of records being displayed
  console.log('Records being displayed:', data.length, 'out of', totalItems);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      <Toolbar 
        searchTerm={searchTerm}
        onSearch={handleSearch}
        onRefresh={refreshData}
      />
      <div className="bg-white overflow-y-auto">
        <DataTable 
          data={data}
          sortField={sortField}
          sortOrder={sortOrder}
          onSort={handleSort}
        />
      </div>
      <BottomBar 
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        startItem={startItem}
        endItem={endItem}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  );
};

export default Workbook; 