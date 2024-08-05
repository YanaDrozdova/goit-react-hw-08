import { useDispatch, useSelector } from 'react-redux';

import { changeFilter } from '../../redux/filters/slice';
import { selectQueryFilter } from '../../redux/filters/selectors';

import css from './SearchBox.module.css';

export default function SearchBox() {
  const filter = useSelector(selectQueryFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <p className={css.label}>Find contacts by name or phone number</p>
      <input
        className={css.searchBox}
        type="text"
        value={filter}
        onChange={handleFilter}
      ></input>
    </div>
  );
}
