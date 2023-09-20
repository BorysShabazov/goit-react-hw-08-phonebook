import { useDispatch, useSelector } from 'react-redux';
import { createContact, fetchContacts } from 'components/redux/operations';
import { getContacts } from 'components/redux/selectos';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

export const PhoneBook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = async event => {
    event.preventDefault();

    const inputName = event.currentTarget.name.value.trim();
    const inputNumber = event.currentTarget.number.value.trim();

    if (
      contacts.find(el => el.name.toLowerCase() === inputName.toLowerCase())
    ) {
      alert(`${inputName} is already in contacts.`);
      return;
    }

    await dispatch(createContact({ name: inputName, number: inputNumber }));
    dispatch(fetchContacts());

    event.target.number.value = '';
    event.target.name.value = '';
  };

  return (
    <Box w="400px">
      <form action="submit" onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel fontSize={'20'}>
            Name:
            <Input
              fontSize={'20'}
              fontWeight={'500'}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FormLabel>

          <FormLabel fontSize={'20'}>
            Number:
            <Input
              fontSize={'20'}
              fontWeight={'500'}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormLabel>

          <Button
            type="submit"
            bgColor="transparent"
            border="1px"
            borderColor="#000000"
            fontWeight="700"
            color="#1498fd"
            fontSize={'20'}
            _hover={{ bgColor: '#d6d5d4' }}
          >
            Add contact
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};
