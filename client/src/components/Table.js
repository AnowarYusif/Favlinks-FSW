import React from 'react';

const Table = ({ linkData, removeLink }) => {
  return (
    <table className="link-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>URL</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {linkData.map((link) => (
          <tr key={link.id}>
            <td>{link.name}</td>
            <td>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.url}
              </a>
            </td>
            <td>
              <button onClick={() => removeLink(link.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;