import React from "react";
import PropTypes from "prop-types";
import { filterContact } from "../redux/contacts/contacts-action";
import { connect } from "react-redux";

const Filter = ({ filter, onInputChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        name="filter"
        value={filter}
        onChange={onInputChange}
        type="text"
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (e) => dispatch(filterContact(e.target.value)),
});

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
