import PropTypes from "prop-types";
import { useState } from "react";
import { nanoid } from "nanoid";

import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import { addContact } from "../redux/contacts/contacts-action";

import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

const Form = styled.form({
  border: "2px solid black",
  width: 400,
  padding: 15,
});
const Button = styled.button({
  border: "1px solid black",
  borderRadius: 5,
  cursor: "pointer",
});

const ContactForm = ({ addContact, contacts }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const reset = (e) => {
    setName("");
    setNumber("");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const isEqualName = contacts.some((contact) => contact.name.includes(name));

    if (isEqualName) {
      toast.error("User with this name already exist!!");
      return;
    }

    addContact(newContact);
    reset();
  };

  return (
    <>
      <ToastContainer autoClose={2000} theme="dark" />
      <Form action="" onSubmit={onSubmit}>
        <p>Name</p>
        <input
          onChange={onInputChange}
          type="text"
          name="name"
          value={name}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <p>Number</p>
        <input
          onChange={onInputChange}
          type="tel"
          name="number"
          value={number}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <br />
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
};
const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = (dispatch) => ({
  addContact: (contacts) => dispatch(addContact(contacts)),
});

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,

  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
