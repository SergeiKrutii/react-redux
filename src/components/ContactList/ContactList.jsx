import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { deleteContact } from "../redux/contacts/contacts-action";
import { connect } from "react-redux";

const Button = styled.button({
  border: "1px solid black",
  marginLeft: 33,
  borderRadius: 5,
  cursor: "pointer",
});
const Li = styled.li({
  marginTop: 5,
  marginBottom: 5,
  padding: 6,
  border: "1px solid black",
  width: 300,
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
});
const Ul = styled.ul({
  listStyle: "square",
  width: 300,
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
});

const ContactList = ({ filteredContacts, onDelete }) => {
  return (
    <Ul>
      {filteredContacts.map((contact) => (
        <Li key={contact.id}>
          {contact.name}: {contact.number}
          <Button onClick={() => onDelete(contact.id)}>Delete</Button>
        </Li>
      ))}
    </Ul>
  );
};

const getFilteredContacts = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = (state) => {
  const { filter, items } = state.contacts;

  return {
    contacts: items,
    filteredContacts: getFilteredContacts(items, filter),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(deleteContact(id)),
});

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
