import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './App.css'; // Custom CSS

const columns = [
  { field: 'customer', headerName: 'Customer', width: 200 },
  { field: 'last_seen', headerName: 'Last seen', width: 150 },
  { field: 'orders', headerName: 'Orders', type: 'number', width: 100 },
  { field: 'total_spent', headerName: 'Total spent', width: 150 },
  { field: 'latest_purchase', headerName: 'Latest purchase', width: 200 },
  { field: 'news', headerName: 'News', type: 'boolean', width: 100 },
  { field: 'segment', headerName: 'Segments', width: 150 },
];

const rows = [
  { id: 1, customer: 'Branson Weimann', last_seen: '08/08/2020', orders: 2, total_spent: '295.31 $US', latest_purchase: '27/11/2019 @ 13:12:25', news: true, segment: 'Regular' },
  { id: 2, customer: 'Anna Bruen', last_seen: '08/08/2020', orders: 3, total_spent: '647.91 $US', latest_purchase: '07/06/2020 @ 07:48:18', news: false, segment: '' },
  // Add more rows here...
];

function DataGridTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}

export default DataGridTable;
