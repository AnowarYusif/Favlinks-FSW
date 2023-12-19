// Table.js

import React from 'react';

const tableStyle = {
  width: '100%', // Increased table width to 100%
  marginTop: '20px',
  borderCollapse: 'collapse',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const thTdStyle = {
  border: '1px solid #e0e0e0',
  padding: '15px',
  textAlign: 'left',
};


const deleteButtonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  padding: '10px 15px',
  cursor: 'pointer',
  borderRadius: '4px',
};

const linkColumnStyle = {
  width: '30%',
};

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th style={{ ...thTdStyle}}>Name</th>
        <th style={{ ...thTdStyle, ...linkColumnStyle }}>URL</th>
        <th style={thTdStyle}>Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.linkData.map((row, index) => {
    return (
      <tr key={index}>
        <td style={{ ...thTdStyle}}>{row.name}</td> {/* Set style for Name header */}
        <td style={{ ...thTdStyle, ...linkColumnStyle }}>
          <a href={row.URL}>{row.URL}</a>
        </td>
        <td style={thTdStyle}>
          <button style={deleteButtonStyle} onClick={() => props.removeLink(index)}>
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  return (
    <table style={tableStyle}>
      <TableHeader />
      <TableBody linkData={props.linkData} removeLink={props.removeLink} />
    </table>
  );
};

export default Table;
