const API_BASE_URL = '/api/data';

export const fetchTableData = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching table data:', error);
    throw error;
  }
};

// Transform API data to match our component structure
export const transformApiData = (apiData) => {
  if (!apiData.table_data) {
    return [];
  }

  return apiData.table_data.map((item, index) => ({
    id: item.row || index + 1,
    source: item.source || '',
    lastUpdatedAt: item.last_updated_at || '',
    findIcp: item.find_icp || '',
    linkedinJobUrl: item.linkedin_job_url || '',
    waterfallPeople1: item.waterfall_people_1 || '',
    enrichCompany2: item.enrich_company_2 || '',
    domainFromEmail: item.domain_from_email || '',
    waterfallPeople2: item.waterfall_people_2 || '',
  }));
}; 