import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { loginUser } from 'components/redux/operations';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();

  const login = event => {
    event.preventDefault();

    const userEmail = event.currentTarget.email.value.trim();
    const userPass = event.currentTarget.password.value.trim();

    const user = {
      email: userEmail,
      password: userPass,
    };

    dispatch(loginUser(user));

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
        <form action="submit" onSubmit={login}>
          <FormControl w={'400px'}>
            <FormLabel fontSize={'20'} fontWeight={'500'}>
              Email:
              <Input
                id="1"
                fontSize={'20'}
                fontWeight={'500'}
                name="email"
                type="email"
              />
            </FormLabel>
            <FormLabel fontSize={'20'} fontWeight={'500'}>
              Password:
              <Input
                id="2"
                fontSize={'20'}
                fontWeight={'500'}
                name="password"
                type="password"
              />
            </FormLabel>
          </FormControl>

          <Box display={'flex'} gap={'4'}>
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
              Sign in
            </Button>
            <Button
              bgColor="transparent"
              border="1px"
              borderColor="#000000"
              fontWeight="700"
              color="#1498fd"
              fontSize={'20'}
              _hover={{ bgColor: '#d6d5d4' }}
            >
              <NavLink to="/register">Sign up</NavLink>
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default Login;
