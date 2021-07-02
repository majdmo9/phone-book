import React, { useState } from "react";

const AddContact = ({onChange, onClose }) => {
  // using use state to save the contact data in
  const [Contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    image: "",
  });
  // destructing the object
  const { name, phone, email, image } = Contact;
  // handles every change in add contact form
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
              // if user adds all these data then contact can be added
              if (name && email && phone && image) {
                onChange(Contact);
              }
              onClose();
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
