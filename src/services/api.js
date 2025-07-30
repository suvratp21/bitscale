import { API_CONFIG } from '../constants/index.js';

// Enhanced fetch with timeout and retry logic
const fetchWithTimeout = async (url, options = {}, timeout = API_CONFIG.TIMEOUT) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
};

// Retry wrapper for API calls
const retryFetch = async (fetchFn, retries = API_CONFIG.RETRY_ATTEMPTS) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fetchFn();
    } catch (error) {
      if (i === retries - 1) throw error;
      // Exponential backoff
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
    }
  }
};

export const fetchTableData = async () => {
  const fetchData = async () => {
    const response = await fetchWithTimeout(API_CONFIG.BASE_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      console.error('Non-JSON response received:', text.substring(0, 200));
      throw new Error('Server returned non-JSON response. Please check the API endpoint.');
    }
    
    const data = await response.json();
    return data;
  };

  try {
    return await retryFetch(fetchData);
  } catch (error) {
    console.error('Error fetching table data:', error);
    throw new Error('Failed to fetch data from server. Please check your connection and try again.');
  }
};

// Transform API data to match our component structure
export const transformApiData = (apiData) => {
  if (!apiData || !apiData.table_data) {
    return [];
  }

  console.log('API returned', apiData.table_data.length, 'records');

  return apiData.table_data.map((item, index) => ({
    id: item.row || index + 1,
    source: item.source || '',
    lastUpdatedAt: item.last_updated_at || '',
    // Match the field names expected by DataTable component
    waterfallPeople1: item.waterfall_people_1 || '',
    enrichCompany2: item.enrich_company_2 || '',
    findIcp: item.find_icp || '',
    linkedinJobUrl: item.linkedin_job_url || '',
    domainFromEmail: item.domain_from_email || '',
    waterfallPeople2: item.waterfall_people_2 || '',
  }));
};

// Export data (for future use)
export const exportData = async (data, format = 'csv') => {
  try {
    if (format === 'csv') {
      const headers = Object.keys(data[0] || {}).join(',');
      const rows = data.map(row => Object.values(row).join(','));
      const csv = [headers, ...rows].join('\n');
      
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `table-data-${new Date().toISOString().split('T')[0]}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    }
  } catch (error) {
    console.error('Error exporting data:', error);
    throw new Error('Failed to export data');
  }
}; 