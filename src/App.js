import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import './App.css';

// Initial rows of data
const initialRows = [
  { id: 1, customer: 'Branson Weimann', last_seen: '08/08/2020', orders: 2, total_spent: '$295.31', latest_purchase: '27/11/2019 @ 13:12:25', news: true, segments: 'Regular' },
  { id: 2, customer: 'Anna Bruen', last_seen: '08/08/2020', orders: 3, total_spent: '$647.91', latest_purchase: '07/06/2020 @ 07:48:18', news: false, segments: '' },
  { id: 3, customer: 'Gudrun Tromp', last_seen: '08/08/2020', orders: 3, total_spent: '$0.00', latest_purchase: '', news: true, segments: '' },
  { id: 4, customer: 'Florencio Roob', last_seen: '08/08/2020', orders: 0, total_spent: '$0.00', latest_purchase: '', news: false, segments: '' },
  { id: 5, customer: 'Maddison Torp', last_seen: '08/08/2020', orders: 0, total_spent: '$0.00', latest_purchase: '', news: true, segments: '' },
  { id: 6, customer: 'Rashawn Beer', last_seen: '08/08/2020', orders: 3, total_spent: '$693.50', latest_purchase: '19/05/2020 @ 10:03:18', news: true, segments: '' },
  { id: 7, customer: 'Beth Hill', last_seen: '08/08/2020', orders: 0, total_spent: '$0.00', latest_purchase: '', news: true, segments: '' },
  { id: 8, customer: 'Brandyn Hoeger', last_seen: '08/08/2020', orders: 0, total_spent: '$0.00', latest_purchase: '', news: true, segments: '' },
  { id: 9, customer: 'Rey Schuster', last_seen: '08/08/2020', orders: 0, total_spent: '$0.00', latest_purchase: '', news: true, segments: '' },
  { id: 10, customer: 'Jakob Armstrong', last_seen: '08/08/2020', orders: 0, total_spent: '$0.00', latest_purchase: '', news: true, segments: '' },
  { id: 11, customer: 'Janae Glover', last_seen: '08/08/2020', orders: 0, total_spent: '$0.00', latest_purchase: '', news: true, segments: '' },
  { id: 12, customer: 'Dina Tillman', last_seen: '08/08/2020', orders: 0, total_spent: '$0.00', latest_purchase: '', news: true, segments: '' },
];

const columns = [
  { field: 'customer', headerName: 'Customer', width: 200, editable: true },
  { field: 'last_seen', headerName: 'Last Seen', width: 150 },
  { field: 'orders', headerName: 'Orders', width: 100, type: 'number', editable: true },
  { field: 'total_spent', headerName: 'Total Spent', width: 150, editable: true },
  { field: 'latest_purchase', headerName: 'Latest Purchase', width: 250 },
  { field: 'news', headerName: 'News', width: 100, type: 'boolean', editable: true },
  { field: 'segments', headerName: 'Segments', width: 150, editable: true },
];

function App() {
  const [rows, setRows] = useState(initialRows);
  const [selectedRows, setSelectedRows] = useState([]);

  // Handle row selection
  const handleRowSelection = (ids) => {
    setSelectedRows(ids);
  };

  // Handle row editing commit
  const handleEditRowModelChange = (params) => {
    const updatedRows = rows.map((row) =>
      row.id === params.id ? { ...row, ...params } : row
    );
    setRows(updatedRows);
  };

  // Delete selected rows
  const deleteSelectedRows = () => {
    const remainingRows = rows.filter((row) => !selectedRows.includes(row.id));
    setRows(remainingRows);
  };

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 15]}
        checkboxSelection
        onSelectionModelChange={handleRowSelection}
        editMode="cell"
        onEditRowsModelChange={handleEditRowModelChange}
        components={{ Toolbar: GridToolbar }}
        disableSelectionOnClick
        sortingOrder={['asc', 'desc']}
        filterModel={{
          items: [
            { columnField: 'customer', operatorValue: 'contains', value: '' },
          ],
        }}
      />
      <button onClick={deleteSelectedRows} disabled={selectedRows.length === 0}>
        Delete Selected Rows
      </button>
    </div>
  );
}

export default App;
