import React from 'react';
import Header from './Header.jsx';
import Toolbar from './Toolbar.jsx';
import DataTable from './DataTable.jsx';
import BottomBar from './BottomBar.jsx';
import { sampleData } from '../types/data.js';

const Workbook = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      <Toolbar />
      <div className="bg-white overflow-y-auto">
        <DataTable data={sampleData} />
      </div>
      <BottomBar />
    </div>
  );
};

export default Workbook; 