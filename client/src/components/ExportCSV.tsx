import React, { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';
import axios from 'axios';

type Data = {
  [key: string]: string |number; 
};

function exportToCSV(data: Data[], filename: string) {
  
  const csvRows = data.map(row => {
   
    return Object.values(row).map(value => `"${value}"`).join(',');
  });

  
  const headers = Object.keys(data[0]).join(',');
  csvRows.unshift(headers);
  const csvString = csvRows.join('\n');
  const blob = new Blob([csvString], { type: 'text/csv' });
  saveAs(blob, filename);
}

const ExportCSV: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/clients')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleExport = () => {
    exportToCSV(data, 'data.csv');
  };

  return (
    <div>
      <button onClick={handleExport}>Export</button>
    </div>
  );
};

export default ExportCSV;
