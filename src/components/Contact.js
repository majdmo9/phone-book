import React from "react";
import "./Contact.css";
// Component for every contact in the list
const Contact = (props) => {
  return (
    <div className="contact-div">
      <li className="contact">
        <div className="contact-image">
          <img className="image" src={props.image} alt="Contact" />
        </div>

        <div className="contact-name">
          <h4>{props.name} </h4>
        </div>

        <div className="buttons">
          <button
            onClick={() => {
              props.selectContact();
            }}
          >
            <i className="fas fa-info-circle"></i>
          </button>
          <button
            onClick={() => {
              props.selectedToEdit();
            }}
          >
            <i className="fas fa-edit"></i>
          </button>
          <button
            onClick={() => {
              props.selectedToDelete();
            }}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </li>
    </div>
  );
};

export default Contact;
