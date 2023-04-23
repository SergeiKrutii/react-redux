import TYPES from "./contacts-type";

const addContact = (contact) => ({
  type: TYPES.ADD,
  payload: contact,
});

const deleteContact = (id) => ({
  type: TYPES.DELETE,
  payload: id,
});

const filterContact = (value) => ({
  type: TYPES.FILTER,
  payload: value,
});

export { addContact, deleteContact, filterContact };
