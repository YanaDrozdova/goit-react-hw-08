import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { HiMiniUser, HiPhone } from 'react-icons/hi2';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <div className={css.contactInfo}>
        <p className="text">
          <HiMiniUser className={css.userIcon} />
          {contact.name}
        </p>
        <p className="text">
          <HiPhone className={css.userIcon} />
          {contact.number}
        </p>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
