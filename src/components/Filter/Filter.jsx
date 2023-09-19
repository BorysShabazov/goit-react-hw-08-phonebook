import { Box, FormLabel, Input } from '@chakra-ui/react';
import { filteringContacts } from 'components/redux/filterSlice';
import { getFilter } from 'components/redux/selectos';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handlFilteringContacts = evt => {
    dispatch(filteringContacts(evt.currentTarget.value));
  };

  return (
    <Box>
      <FormLabel fontSize={'20'} w="500px">
        Find contacts by name:
        <Input
          fontSize={'20'}
          fontWeight={'500'}
          type="text"
          value={filter}
          onChange={handlFilteringContacts}
        />
      </FormLabel>
    </Box>
  );
};
