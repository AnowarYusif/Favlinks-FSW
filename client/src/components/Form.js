import React, { useState } from 'react';

const Form = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    URL: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(formData);
    setFormData({ name: '', URL: '' });
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '12px 20px', // Added padding
    cursor: 'pointer',
    borderRadius: '4px',
    marginTop: '10px', // Added margin
  };

  const inputStyle = {
    width: '100%', // Increased width
    padding: '10px', // Added padding
    marginBottom: '10px', // Added margin
    boxSizing: 'border-box', // Box sizing includes padding and border in the element's total width and height
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
      </div>
      <div>
        <label>
          URL:
          <input
            type="text"
            name="URL"
            value={formData.URL}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
      </div>
      <div>
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
