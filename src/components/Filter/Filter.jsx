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
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={handlFilteringContacts} />
    </label>
  );
};
