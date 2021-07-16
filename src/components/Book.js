import React, { useState } from "react";
import ContactsList from "./ContactsList";
import Info from "./Info";
import Edit from "./Edit";
import AddContact from "./AddContact";
const Book = () => {
  const [search, setSearch] = useState(""); //state for search
  const [selectedContact, setSelectedContact] = useState(null); //state for contact info
  const [selectedToEdit, setSelectedToEdit] = useState(null); // state for editing contact
  const [selectedToDelete, setSelectedToDelete] = useState([]); // state to delete contact
  const [addContact, setAddContact] = useState(false); // state to add contact
  // object for the first render of the contact list
  const [contacts, setContacts] = useState({
    1: {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkiIFjCOZ-mMeqxd2ryrneiHedE8G9S0AboA&usqp=CAU",
      name: "fozi",
      phone: "0524868956",
      email: "fozi@gmail.com",
    },
    2: {
      image:
        "data:image/png;base64,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",
      name: "susu",
      phone: "0526495499",
      email: "susu@gmail.com",
    },
    3: {
      image:
        "data:image/jpeg;base64,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",
      name: "simsim",
      phone: "0824629894",
      email: "simsim@hotmail.com",
    },
  });
  return (
    <div className="book-div">
      {selectedContact ? (
        <Info
          onClose={() => {
            setSelectedContact(null);
          }}
          contact={contacts[selectedContact]}
        />
      ) : selectedToEdit ? (
        <div>
          <Edit
            onClose={() => {
              setSelectedToEdit(null);
            }}
            contact={contacts[selectedToEdit]}
            onChange={(contact) => {
              setContacts({
                ...contacts,
                [selectedToEdit]: contact,
              });
            }}
          />
        </div>
      ) : addContact ? (
        <AddContact
          contact={{}}
          onChange={(contact) => {
            setContacts({
              ...contacts,
              [Object.keys(contacts).length + 1]: contact,
            });
          }}
          onClose={() => {
            setAddContact(false);
          }}
        />
      ) : (
        <div>
          <div className="btn-div">
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
              className="search-bar"
              type="text"
            />
            <button
              className="add-btn"
              onClick={() => {
                let temparr = [];
                for (let i = 0; i < Object.keys(contacts).length; i++) {
                  temparr.push((i + 1).toString());
                }
                setSelectedToDelete(temparr);
              }}
            >
              <i className="fas fa-ban"></i>
            </button>
            <button
              className="add-btn"
              onClick={() => {
                setAddContact(true);
              }}
            >
              <i className="fas fa-plus-circle"></i>
            </button>
          </div>
          <ContactsList
            contacts={contacts}
            search={search}
            selected={selectedToDelete}
            selectContact={(key) => {
              setSelectedContact(key);
            }}
            selectedToEdit={(key) => {
              setSelectedToEdit(key);
            }}
            selectedToDelete={(key) => {
              setSelectedToDelete([...selectedToDelete, key]);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Book;
