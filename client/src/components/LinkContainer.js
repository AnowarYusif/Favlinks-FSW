import React, { useState } from 'react';
import Table from './Table';
import Form from './Form';

const LinkContainer = () => {
  const [favLinks, setFavLinks] = useState([]);

  const handleRemove = (index) => {
    setFavLinks((prevLinks) => prevLinks.filter((_, i) => i !== index));
  };

  const handleSubmit = (favLink) => {
    setFavLinks((prevLinks) => [...prevLinks, favLink]);
  };

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new URL with a name and link to the table.</p>
      <Table linkData={favLinks} removeLink={handleRemove} />
      <br />
      <h3>Add New</h3>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default LinkContainer;
