import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

import css from './ContactList.module.css';

export default function ContactList() {
  const foundContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {foundContacts.length > 0 ? (
        foundContacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <Contact contact={contact} />
          </li>
        ))
      ) : (
        <p>No contact was found</p>
      )}
    </ul>
  );
}
