import React, { useState } from "react";
import "./Edit.css";
// Component to edit the contact info
const Edit = ({ contact, onChange, onClose }) => {
  // object holds the contact info to edit
  const [Contact, setContact] = useState({
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
    image: contact.image,
  });
  // destruction object
  const { name, phone, email, image } = Contact;
  // handles every change in the form
  const handleChange = (e) => {
    setContact({ ...Contact, [e.target.name]: e.target.value });
  };
  return (
    <div className="edit-container">
      <div className="edit-div">
        <div>
          <label htmlFor="name">Name: </label>
          <input
            autoComplete="off"
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone: </label>
          <input
            autoComplete="off"
            type="text"
            name="phone"
            onChange={handleChange}
            value={phone}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            autoComplete="off"
            type="text"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="image">Image: </label>
          <input
            autoComplete="off"
            type="text"
            name="image"
            onChange={handleChange}
            value={image}
          />
        </div>
        <div className="btn-save">
          <button
            className="savebtn"
            onClick={() => {
              onChange(Contact);
              onClose();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
