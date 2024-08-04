import { useEffect } from 'react';
import ContactList from '../../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <SearchBox />
      <ContactList />
    </>
  );
}
