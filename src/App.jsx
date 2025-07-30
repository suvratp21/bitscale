import React from 'react';
import Workbook from './components/Workbook.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Workbook />
      </div>
    </ErrorBoundary>
  );
}

export default App; 