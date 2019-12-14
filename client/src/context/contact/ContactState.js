import React, { useReducer } from "react";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Sharon Agina",
        email: "sharon@gmail.com",
        phone: "111-111-1111",
        type: "personal"
      },
      {
        id: 2,
        name: "Juliet Khaemba",
        email: "julie@gmail.com",
        phone: "222-222-2222",
        type: "professional"
      },
      {
        id: 3,
        name: "Keziah Mumbi",
        email: "kez@gmail.com",
        phone: "333-333-3333",
        type: "personal"
      }
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //ADD CONTACT
  const addContact = contact => {
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //DELETE CONTACT
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //SET CURRENT
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  //CLEAR CURRENT
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //UPDATE CONTACT
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  //FILTER CONTACTS
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  //CLEAR FILTER
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
