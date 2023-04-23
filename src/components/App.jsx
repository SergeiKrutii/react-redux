import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

const App = (props) => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default App;

// class App extends Component {
//   state = {
//     contacts: [
//       // РАСКОМЕНТИ ЧТО Б УДОБНЕЕ БЫЛО ПРОВЕРЯТЬ ФУНКЦИОНАЛ
//       // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//   };

//   componentDidUpdate = (prevState, prevProps) => {
//     const { contacts } = this.state;
//     if (contacts !== prevState.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(contacts));
//     }
//   };

//   componentDidMount = () => {
// const localContacts = localStorage.getItem("contacts");
// const persedLoacalContacts = JSON.parse(localContacts);

// this.setState({ localContacts: persedLoacalContacts });
//   };

//   addContact = (newContact) => {
//     this.setState((prevState) => ({
//       contacts: [...prevState.contacts, newContact],
//     }));
//   };

// onInputChange = (e) => {
//   const { name, value } = e.target;

//   this.setState({
//     [name]: value,
//   });
// };

// deleteContact = (contactId) => {
//   this.setState((prevState) => ({
//     contacts: prevState.contacts.filter(
//       (contact) => contact.id !== contactId
//     ),
//   }));
// };

//   render() {
//     const { contacts, filter } = this.state;
//     return (
// <>
//   <h1>Phonebook</h1>
//   <ContactForm
//     addContact={this.addContact}
//     contacts={contacts}
//     filter={filter}
//   />
//   <h2>Contacts</h2>
//   <Filter filter={filter} onInputChange={this.onInputChange} />
//   <ContactList
//     contacts={contacts}
//     filter={filter}
//     deleteContact={this.deleteContact}
//   />
// </>
//     );
//   }
// }

// export default App;
