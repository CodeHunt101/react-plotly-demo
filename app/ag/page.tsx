'use client'

import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css'; // Core Grid CSS
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Theme CSS

// Define the type for your row data
type RowData = {
  company: string;
  reportLink: string;
  reportYear: number;
  meanHourlyGap: number;
  medianHourlyGap: number;
};

const generateMockData = (): RowData[] => {
  const companies = [
    'Ryanair',
    '3M',
    'A&L Goodbody',
    'AA',
    'Abbott Ireland',
    'AbbVie Sligo',
    'AbbVie Westport',
    'ABM Support',
    'ABP Food Group',
    'Adtran',
    'Aer Lingus',
    'Amazon Ireland',
    'Apple',
    'Bank of Ireland',
    'Google Ireland',
    'Intel Ireland',
    'Meta',
    'Microsoft Ireland',
    'Pfizer',
    'Stripe',
  ];
  
  return companies.map((company, index) => ({
    company,
    reportLink: 'Report',
    reportYear: 2023,
    meanHourlyGap: parseFloat((Math.random() * 50).toFixed(1)),
    medianHourlyGap: parseFloat((Math.random() * 50).toFixed(1)),
  }));
};

const TableExample = () => {
  // Generate at least 20 rows of data
  const [rowData] = useState<RowData[]>(generateMockData());

  // Column definitions
  const [columnDefs] = useState<ColDef<RowData>[]>([
    { field: 'company', headerName: 'Company', sortable: true, filter: true, resizable: true },
    { field: 'reportLink', headerName: 'Report Link', sortable: true, filter: true, resizable: true },
    { field: 'reportYear', headerName: 'Report Year', sortable: true, filter: true, resizable: true },
    { field: 'meanHourlyGap', headerName: 'Mean Hourly Gap', sortable: true, filter: true, resizable: true },
    { field: 'medianHourlyGap', headerName: 'Median Hourly Gap', sortable: true, filter: true, resizable: true },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact<RowData>
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{ sortable: true, filter: true, resizable: true }}
      />
    </div>
  );
};

export default TableExample;
