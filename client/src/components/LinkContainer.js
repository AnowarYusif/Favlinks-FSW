// LinkContainer.js
import React, { useState, useEffect } from 'react';
import Table from './Table';
import Form from './Form';

const LinkContainer = () => {
  const [favLinks, setFavLinks] = useState([]);

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const response = await fetch('/api/links');
      if (response.ok) {
        const data = await response.json();
        setFavLinks(data);
      } else {
        console.error('Error fetching links:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching links:', error);
    }
  };

  const handleRemove = async (id) => {
    try {
      const response = await fetch(`/api/links/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setFavLinks((prevLinks) => prevLinks.filter((link) => link.id !== id));
        console.log('Link deleted successfully.');
      } else {
        console.error('Error deleting link:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting link:', error);
    }
  };

  const handleSubmit = async (favLink) => {
    try {
      const response = await fetch('/api/links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(favLink),
      });

      if (response.ok) {
        const data = await response.json();
        setFavLinks((prevLinks) => [...prevLinks, data]);
        console.log('Link created successfully:', data);
      } else {
        console.error('Error creating link:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating link:', error);
    }
  };

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new URL with a name and link to the table.</p>
      <Table linkData={favLinks} removeLink={handleRemove} />
      <br />
      <h3>Add New</h3>
      <Form setLinkData={setFavLinks} onSubmit={handleSubmit} />
    </div>
  );
};

export default LinkContainer;
