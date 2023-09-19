import {
  deleteContact,
  fetchContacts,
  logoutUser,
  setToken,
} from 'components/redux/operations';
import { getContacts, getFilter, getUser } from 'components/redux/selectos';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Box, Button, List, ListItem, Text } from '@chakra-ui/react';
import { Filter } from 'components/Filter/Filter';
import { PhoneBook } from 'components/PhoneBook/PhoneBook';

const Contacts = ({ children }) => {
  const { user } = useSelector(getUser);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const normalizeFilter = filter.toLocaleLowerCase();
  const visibleContacts = getVisibleContacts(contacts);
  setToken(user.token);

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
    if (evt.target.tagName === 'BUTTON') {
      dispatch(deleteContact(evt.currentTarget.id));
    }
  };

  const logout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <Box
        p="2"
        bgColor="#d6d5d4"
        border="1px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="28" fontWeight="700" color="#1498fd">
          {user.user.name}
        </Text>

        <Button
          onClick={logout}
          bgColor="transparent"
          border="1px"
          borderColor="#000000"
          fontWeight="700"
          color="#1498fd"
          _hover={{ bgColor: '#ffffff' }}
          fontSize={'20'}
        >
          Loguot
        </Button>
      </Box>

      <Box display="flex" p="16px">
        <PhoneBook />

        <Box display="flex" flexDirection="column" alignItems="center" w="100%">
          <Filter />
          <List display="flex" flexDirection={'column'} w={'500px'} gap={'4'}>
            {visibleContacts.map(({ name, number, id }) => {
              return (
                <ListItem
                  key={id}
                  id={id}
                  onClick={handlDeleteContact}
                  fontSize={'24'}
                  fontWeight={'600'}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                >
                  {name}: {number}
                  <Button
                    bgColor="transparent"
                    border="1px"
                    borderColor="#000000"
                    fontWeight="700"
                    color="#1498fd"
                    _hover={{ bgColor: '#d6d5d4', color: 'red' }}
                    fontSize={'20'}
                    type="button"
                  >
                    Delete
                  </Button>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
    </>
  );
};

export default Contacts;
