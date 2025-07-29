import React from 'react';
import Header from './Header';
import Toolbar from './Toolbar';
import DataTable from './DataTable';
import { sampleData } from '../types/data';

const Workbook: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Toolbar />
      <div className="bg-white overflow-y-auto">
        <DataTable data={sampleData} />
      </div>
    </div>
  );
};

export default Workbook; 