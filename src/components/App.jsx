
import './App.css'
import "modern-normalize";
import ContactForm from "./ContactForm/ContactForm"
import ContactList from "./ContactList/ContactList"
import SearchBar from './SearchBar/SearchBar';
import { useDispatch } from 'react-redux';
import { apiGetContacts } from '../redux/contactsOps';
import { useEffect } from 'react';





const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetContacts())
  }, [dispatch]);

  return (
    <div className='mainContainer'>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBar />
      <ContactList />

    </div>)



};

export default App


