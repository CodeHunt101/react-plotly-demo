'use client'

import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import ReactMarkdown from 'react-markdown';

function MarkDown() {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    // Fetch the CSV file from the public folder
    fetch('/providers.csv')
      .then(response => response.text())
      .then(csvText => {
        // Parse the CSV text
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: function(results: any) {
            setProviders(results.data);
          },
        });
      })
      .catch(error => {
        console.error('Error fetching the CSV file:', error);
      });
  }, []);

  return (
    <div>
      <h1>Some Company Provider Dashboard</h1>
      <div>
        {providers.map((provider: any, index) => (
          <div key={index}>
            <h2>{provider.name}</h2>
            <ReactMarkdown>{provider.bio}</ReactMarkdown>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarkDown;
