import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { HiMiniUser, HiPhone } from 'react-icons/hi2';

import { changeContact, deleteContact } from '../../redux/contacts/operations';

import css from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  const handleChange = () => {
    if (isEditing) {
      dispatch(changeContact({ id: contact.id, name, number }));
    }
    setIsEditing(!isEditing);
  };

  const handleNameChange = e => setName(e.target.value);
  const handleNumberChange = e => setNumber(e.target.value);

  return (
    <>
      <div className={css.contactInfo}>
        <p className="text">
          <HiMiniUser className={css.userIcon} />
          {isEditing ? (
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className={css.input}
            />
          ) : (
            name
          )}
        </p>
        <p className="text">
          <HiPhone className={css.userIcon} />
          {isEditing ? (
            <input
              type="text"
              value={number}
              onChange={handleNumberChange}
              className={css.input}
            />
          ) : (
            number
          )}
        </p>
      </div>
      <div className={css.btns}>
        <button type="button" onClick={handleChange} className={css.changeBtn}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button type="button" onClick={handleDelete} className={css.delBtn}>
          Delete
        </button>
      </div>
    </>
  );
}
