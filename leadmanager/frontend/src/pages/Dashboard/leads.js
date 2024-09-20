import React, { useState } from 'react';
import Sidebar2 from '../../components/Dashboard/Sidebar2';
import Form from '../../components/Leads/Form';
import Leads from '../../components/Leads/Leads';
import { connect } from 'react-redux';
import { addLead } from '../../actions/leads';
import Papa from 'papaparse'; // Import CSV parser

const LeadsPage = ({ addLead }) => {
  const [showForm, setShowForm] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    // Parse CSV file using PapaParse
    Papa.parse(file, {
      header: true, // Assumes the first row is a header
      complete: function (results) {
        const rows = results.data;

        // Check if the required columns are present
        const requiredFields = ['name', 'email', 'message'];
        const csvFields = Object.keys(rows[0] || {});

        const missingFields = requiredFields.filter(field => !csvFields.includes(field));

        if (missingFields.length > 0) {
          alert(
            `Invalid CSV format! The following required fields are missing: ${missingFields.join(", ")}.\n\n` +
            `Required format:\n\nname,email,message`
          );
          return;
        }

        rows.forEach(row => {
          // Ensure the CSV has valid fields
          if (row.name && row.email && row.message) {
            const lead = {
              name: row.name,
              email: row.email,
              message: row.message,
            };
            addLead(lead); // Use existing Redux action to add each lead
          }
        });
      },
      skipEmptyLines: true,
      error: function (err) {
        alert("An error occurred while parsing the CSV file. Please check the file format.");
      }
    });
  };


  return (
    <div className='main-content'>
      <Sidebar2 />
      <div className='container mt-5'>
        {/* Add Lead Button */}
        <button
          type="submit"
          className="btn"
          onClick={() => setShowForm(!showForm)}
          style={{
            backgroundColor: '#6a1b9a', // Purple background
            color: 'white', // White text
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          {showForm ? 'Hide Form' : 'Add Lead'}
        </button>

        {/* Import CSV Button */}
        <label
          htmlFor="upload-leads"
          className="btn ms-3"
          style={{
            backgroundColor: '#6a1b9a', // Purple background
            color: 'white', // White text
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Import Leads
        </label>
        <input
          id="upload-leads"
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          style={{ display: 'none' }} // Hide file input, trigger by label click
        />
      </div>

      {showForm ? <Form /> : ''}
      <Leads />
    </div>
  );
};

export default connect(null, { addLead })(LeadsPage);
