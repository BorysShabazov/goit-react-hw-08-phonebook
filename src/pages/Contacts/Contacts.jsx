import axios from 'axios';
import {
  deleteContact,
  fetchContacts,
  logoutUser,
} from 'components/redux/operations';
import { getContacts, getFilter, getUser } from 'components/redux/selectos';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Contacts.module.css';
import { useEffect } from 'react';

const Contacts = ({ children }) => {
  const { user } = useSelector(getUser);
  const dispatch = useDispatch();
  axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const normalizeFilter = filter.toLocaleLowerCase();
  const visibleContacts = getVisibleContacts(contacts);

  useEffect(() => {
    dispatch(fetchContacts(user.token));
  }, [dispatch, user.token]);

  function getVisibleContacts(contacts) {
    return contacts?.length > 0
      ? contacts.filter(contact => {
          return contact.name.toLocaleLowerCase().includes(normalizeFilter);
        })
      : [];
  }

  const handlDeleteContact = evt => {
    dispatch(deleteContact(evt.currentTarget.id));
  };

  const logout = () => {
    dispatch(logoutUser(user.token));
  };

  return (
    <>
      <h1>{user.user.name}</h1>
      <p>{user.user.email}</p>
      <button onClick={logout}>Loguot</button>
      {children}
      <ul className={styles.list}>
        {visibleContacts.map(({ name, number, id }) => {
          return (
            <li
              className={styles.item}
              key={id}
              id={id}
              onClick={handlDeleteContact}
            >
              {name}: {number}
              <button type="button">Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Contacts;
