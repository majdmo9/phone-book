import React from "react";
import Contact from "./Contact";
// Component of the contacts list it renders contact component in each row
const ContactsList = ({
  contacts,
  search,
  selected,
  selectContact,
  selectedToEdit,
  selectedToDelete,
}) => {
  return (
    <div className="contcatList-div">
      <ul>
        {Object.entries(contacts).map(
          ([key, contact]) =>
            key !== selected.find((el) => el === key) &&
            contact.name.includes(search) && (
              <Contact
                key={key}
                selectContact={() => {
                  selectContact(key);
                }}
                selectedToEdit={() => {
                  selectedToEdit(key);
                }}
                selectedToDelete={() => {
                  selectedToDelete(key);
                }}
                image={contact.image}
                name={contact.name}
                phone={contact.phone}
                email={contact.email}
              />
            )
        )}
      </ul>
    </div>
  );
};

export default ContactsList;
