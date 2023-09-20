import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeName,
  changeNumber,
  closeModal,
} from 'components/redux/filterSlice';
import { getChangedUser } from 'components/redux/selectos';
import {
  changeContact,
  deleteContact,
  fetchContacts,
} from 'components/redux/operations';

const portal = document.getElementById('portal');

export const ChangeModal = () => {
  const dispatch = useDispatch();
  const user = useSelector(getChangedUser);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const changeUserName = evt => {
    dispatch(changeName(evt.target.value));
  };

  const changeUserNumber = evt => {
    dispatch(changeNumber(evt.target.value));
  };

  const changeUserContact = async evt => {
    if (!user.name && !user.number) {
      dispatch(deleteContact(user.id));
      dispatch(closeModal());
      return;
    }

    evt.preventDefault();
    await dispatch(changeContact(user));
    setTimeout(() => {
      dispatch(fetchContacts());
    }, 200);

    dispatch(closeModal());
  };

  return createPortal(
    <Box
      w={'100vw'}
      h={'100vh'}
      bgColor={'rgba(0, 0, 0, 0.4)'}
      overflow={'hidden'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-around'}
      position={'absolute'}
      top={'0'}
      left={'0'}
    >
      <Box
        w={'300px'}
        opacity={'1'}
        h={'300px'}
        bgColor="#ffffff"
        position={'relative'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-around'}
      >
        <Button
          onClick={handleCloseModal}
          type="button"
          position={'absolute'}
          right={'16px'}
          top={'16px'}
        >
          close
        </Button>

        <form action="submit" onSubmit={changeUserContact}>
          <FormControl
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            gap={'16px'}
          >
            <FormLabel margin={'0'}>
              <Input value={user.name} onChange={changeUserName} />
            </FormLabel>
            <FormLabel margin={'0'}>
              <Input value={user.number} onChange={changeUserNumber} />
            </FormLabel>
            <Button type="submit">Change contact</Button>
          </FormControl>
        </form>
      </Box>
    </Box>,
    portal
  );
};
