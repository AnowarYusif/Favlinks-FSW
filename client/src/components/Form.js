// Form.js
import React, { useState } from 'react';

const Form = ({ setLinkData, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    url: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Use the setLinkData prop to update the state
      await onSubmit(formData);
      // Clear the form data after successful submission
      setFormData({ name: '', url: '' });
    } catch (error) {
      console.error('Error handling form submission:', error);
    }
  };

  return (
    <form className="link-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        URL:
        <input
          type="text"
          name="url"
          value={formData.url}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
