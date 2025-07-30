// API Configuration
export const API_CONFIG = {
  BASE_URL: 'https://bitscale_backend.suvratp21.workers.dev/',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
};

// Table Configuration
export const TABLE_CONFIG = {
  ITEMS_PER_PAGE: 0, // 0 means no pagination - show all data
  DEFAULT_SORT_FIELD: 'id',
  DEFAULT_SORT_ORDER: 'asc',
};

// UI Configuration
export const UI_CONFIG = {
  LOADING_DELAY: 300,
  DEBOUNCE_DELAY: 300,
  ANIMATION_DURATION: 200,
};

// Status Messages
export const STATUS_MESSAGES = {
  LOADING: 'Loading data...',
  ERROR: 'An error occurred. Try again',
  NO_DATA: 'No data available',
  RETRY: 'Retry',
  SAVE_SUCCESS: 'Data saved successfully',
  SAVE_ERROR: 'Failed to save data',
};

// Table Column Definitions - Updated to match DataTable component field names
export const TABLE_COLUMNS = [
  { key: 'id', label: 'ID', sortable: true, width: '80px' },
  { key: 'source', label: 'Source', sortable: true, width: '120px' },
  { key: 'lastUpdatedAt', label: 'Last Updated', sortable: true, width: '150px' },
  { key: 'waterfallPeople1', label: 'Waterfall People 1', sortable: false, width: '150px' },
  { key: 'enrichCompany2', label: 'Enrich Company 2', sortable: true, width: '200px' },
  { key: 'findIcp', label: 'Find ICP', sortable: true, width: '100px' },
  { key: 'linkedinJobUrl', label: 'LinkedIn Job URL', sortable: false, width: '150px' },
  { key: 'domainFromEmail', label: 'Domain from Email', sortable: false, width: '150px' },
  { key: 'waterfallPeople2', label: 'Waterfall People 2', sortable: false, width: '150px' },
]; 