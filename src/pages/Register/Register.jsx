import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { createUser } from 'components/redux/operations';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();

  const handleRegister = event => {
    event.preventDefault();

    const userName = event.currentTarget.name.value.trim();
    const userEmail = event.currentTarget.email.value.trim();
    const userPass = event.currentTarget.password.value.trim();

    dispatch(
      createUser({
        name: userName,
        email: userEmail,
        password: userPass,
      })
    );

    event.currentTarget.name.value = '';
    event.currentTarget.email.value = '';
    event.currentTarget.password.value = '';
  };

  return (
    <>
      <Box p="2" border="1px" bgColor={'#d6d5d4'}>
        <Text fontSize="28" fontWeight="700" color="#1498fd">
          PhoneBook
        </Text>
      </Box>

      <Box p={'16px'}>
        <form action="submit" onSubmit={handleRegister}>
          <FormControl w={'400px'}>
            <FormLabel fontSize={'20'} fontWeight={'500'}>
              Name:
              <Input
                id="1"
                fontSize={'20'}
                fontWeight={'500'}
                name="name"
                type="text"
              />
            </FormLabel>
            <FormLabel fontSize={'20'} fontWeight={'500'}>
              Email:{' '}
              <Input
                id="2"
                fontSize={'20'}
                fontWeight={'500'}
                name="email"
                type="email"
              />
            </FormLabel>
            <FormLabel fontSize={'20'} fontWeight={'500'}>
              Password:
              <Input
                id="3"
                fontSize={'20'}
                fontWeight={'500'}
                name="password"
                type="password"
              />
            </FormLabel>
            <Box display={'flex'} gap={'4'}>
              <Button
                bgColor="transparent"
                border="1px"
                borderColor="#000000"
                fontWeight="700"
                color="#1498fd"
                fontSize={'20'}
                _hover={{ bgColor: '#d6d5d4' }}
              >
                <NavLink to="/login">Sign in</NavLink>
              </Button>
              <Button
                type="submit"
                bgColor="transparent"
                border="1px"
                borderColor="#000000"
                fontWeight="700"
                color="#1498fd"
                fontSize={'20'}
                _hover={{ bgColor: '#d6d5d4' }}
                textDecoration={'underline'}
              >
                Sign up
              </Button>
            </Box>
          </FormControl>
        </form>
      </Box>
    </>
  );
};

export default Register;
