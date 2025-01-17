import { useDispatch, useSelector } from 'react-redux';

import SearchForm from '../../components/search/SearchForm';

import {
  changeSearchField,
  findRestaurants,
} from '../../slice';

export default function SearchContainer({ restaurantsData }) {
  const dispatch = useDispatch();

  function handleClickSearch() {
    dispatch(findRestaurants({ restaurantsData }))
  }

  function handleChangeKeyword({ name, value }) {
    dispatch(changeSearchField({ name, value }))
  }

  const searchField = useSelector((state) => (
    state.searchField
  ));

  return (
    <>
      <SearchForm
        searchField={searchField}
        onClickSearch={handleClickSearch}
        onChangeKeyword={handleChangeKeyword}
      />
    </>
  )
}
