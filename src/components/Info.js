import React from "react";
import "./Info.css";
// Contact info component
const Info = ({ contact, onClose }) => {
  return (
    <div className="info">
      <div className="info-inner">
        <div className="closebtn-div">
          <button className="close-btn" onClick={onClose}>
            <i className="fas fa-times-circle"></i>
          </button>
        </div>
        <ul className="info-list">
          <li>{contact.name}</li>
          <li>{contact.phone}</li>
          <li>{contact.email}</li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
