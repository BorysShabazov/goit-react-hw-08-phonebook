import styles from './phoneBook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from 'components/redux/operations';
import { nanoid } from '@reduxjs/toolkit';
import { getContacts } from 'components/redux/selectos';

export const PhoneBook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const inputName = event.currentTarget.name.value.trim();
    const inputNumber = event.currentTarget.number.value.trim();

    if (
      contacts.find(el => el.name.toLowerCase() === inputName.toLowerCase())
    ) {
      alert(`${inputName} is already in contacts.`);
      return;
    }

    dispatch(
      createContact({ name: inputName, number: inputNumber, id: nanoid() })
    );

    event.currentTarget.number.value = '';
    event.currentTarget.name.value = '';
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};
