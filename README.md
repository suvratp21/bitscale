# Bitscale Data Table Application

A React-based data table application that fetches and displays data from the Bitscale backend API.

## Features

- **Real-time Data**: Fetches data directly from [Bitscale Backend API](https://bitscale_backend.suvratp21.workers.dev/)
- **Responsive Design**: Modern UI built with React and Tailwind CSS
- **Advanced Filtering**: Search across multiple fields
- **Sorting**: Sort by any column
- **Pagination**: Navigate through large datasets
- **Error Handling**: Robust error handling with retry functionality
- **Loading States**: Smooth loading experiences

## API Integration

The application is configured to use the production API directly:
- **API Endpoint**: `https://bitscale_backend.suvratp21.workers.dev/`
- **No Development Proxy**: Direct API calls for both development and production
- **CORS Enabled**: Configured for cross-origin requests

## Data Structure

The application displays the following fields from the API:
- **ID**: Row identifier
- **Source**: Data source (e.g., Bill Gates, Elon Musk)
- **Last Updated**: Timestamp of last update
- **Waterfall People 1**: First waterfall people field
- **Enrich Company 2**: Company enrichment data
- **Find ICP**: ICP classification (ICP/NON-ICP)
- **LinkedIn Job URL**: LinkedIn job posting URLs
- **Domain from Email**: Extracted domain information
- **Waterfall People 2**: Second waterfall people field

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Production Deployment

The application is production-ready and can be deployed to any static hosting service:

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service (Netlify, Vercel, AWS S3, etc.)

3. **No additional configuration needed** - the app will automatically connect to the production API

## Environment

- **Node.js**: 18+ recommended
- **React**: 18.2.0
- **Vite**: 5.0.8
- **Tailwind CSS**: 4.0.0

## API Response Format

The backend API returns data in the following format:
```json
{
  "table_data": [
    {
      "row": 1,
      "source": "Bill Gates",
      "last_updated_at": "Oct 12, 2024 at 14:08 PM",
      "find_icp": "ICP",
      "linkedin_job_url": "https://www.linkedIn.co...",
      "waterfall_people_1": "Run condition not met",
      "enrich_company_2": "Bitscale Evaluation - Account...",
      "domain_from_email": "An error occurred. Try again",
      "waterfall_people_2": "Run condition not met"
    }
  ],
  "metadata": {
    "total_rows": 40,
    "columns": ["source", "last_updated_at", "find_icp", "linkedin_job_url", "waterfall_people_1", "enrich_company_2", "domain_from_email", "waterfall_people_2"],
    "summary": {
      "icp_count": 28,
      "non_icp_count": 12,
      "successful_domains": ["TCS.com", "Bitscale.ai", "acowale.ai", "tesla.com", "spacex.com", "microsoft.com", "google.com", "alphabet.com", "apple.com", "meta.com", "facebook.com", "nvidia.com", "amd.com", "amazon.com", "aws.amazon.com", "adobe.com", "intel.com", "ibm.com", "watson.ibm.com", "qualcomm.com"],
      "data_sources": ["Bill Gates", "Elon Musk", "Satya Nadella", "Sundar Pichai", "Tim Cook", "Mark Zuckerberg", "Jensen Huang", "Lisa Su", "Andy Jassy", "Shantanu Narayen", "Pat Gelsinger", "Arvind Krishna", "Cristiano Amon"]
    }
  }
}
```

## License

This project is part of the Bitscale data management system.
