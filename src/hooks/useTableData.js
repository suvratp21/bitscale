import { useState, useEffect, useCallback } from 'react';
import { fetchTableData, transformApiData } from '../services/api.js';
import { sortData, filterData, paginateData } from '../utils/index.js';
import { TABLE_CONFIG, STATUS_MESSAGES } from '../constants/index.js';

export const useTableData = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState(TABLE_CONFIG.DEFAULT_SORT_FIELD);
  const [sortOrder, setSortOrder] = useState(TABLE_CONFIG.DEFAULT_SORT_ORDER);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(TABLE_CONFIG.ITEMS_PER_PAGE);

  // Load data from API
  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const apiData = await fetchTableData();
      const transformedData = transformApiData(apiData);
      setData(transformedData);
    } catch (err) {
      setError(err.message || STATUS_MESSAGES.ERROR);
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial data load
  useEffect(() => {
    loadData();
  }, [loadData]);

  // Filter and sort data when search term, sort field, or sort order changes
  useEffect(() => {
    let processedData = [...data];

    // Apply search filter
    if (searchTerm.trim()) {
      const searchFields = ['source', 'enrichCompany2', 'findIcp', 'domainFromEmail'];
      processedData = filterData(processedData, searchTerm, searchFields);
    }

    // Apply sorting
    if (sortField) {
      processedData = sortData(processedData, sortField, sortOrder);
    }

    setFilteredData(processedData);
    setCurrentPage(1); // Reset to first page when filtering
  }, [data, searchTerm, sortField, sortOrder]);

  // Get paginated data - if itemsPerPage is 0, show all data
  const paginatedData = itemsPerPage === 0 ? filteredData : paginateData(filteredData, currentPage, itemsPerPage);

  // Calculate pagination info - if itemsPerPage is 0, no pagination
  const totalPages = itemsPerPage === 0 ? 1 : Math.ceil(filteredData.length / itemsPerPage);
  const totalItems = filteredData.length;
  const startItem = itemsPerPage === 0 ? 1 : (currentPage - 1) * itemsPerPage + 1;
  const endItem = itemsPerPage === 0 ? totalItems : Math.min(currentPage * itemsPerPage, totalItems);

  // Handle search
  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  // Handle sorting
  const handleSort = useCallback((field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  }, [sortField, sortOrder]);

  // Handle page change
  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  // Handle items per page change
  const handleItemsPerPageChange = useCallback((newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  }, []);

  // Refresh data
  const refreshData = useCallback(() => {
    loadData();
  }, [loadData]);

  return {
    // Data
    data: paginatedData,
    filteredData,
    originalData: data,
    
    // Loading and error states
    loading,
    error,
    
    // Search and sort
    searchTerm,
    sortField,
    sortOrder,
    
    // Pagination
    currentPage,
    itemsPerPage,
    totalPages,
    totalItems,
    startItem,
    endItem,
    
    // Actions
    handleSearch,
    handleSort,
    handlePageChange,
    handleItemsPerPageChange,
    refreshData,
  };
}; 