import styled from '@emotion/styled';

import uniqBy from 'lodash.uniqby';

import { useSelector, useDispatch } from 'react-redux';

import {
  setCategoryFilter,
} from '../../actions';

const Container = styled.div({
  height: '50%',
});

const TitleBox = styled.div({
  marginBottom: '1rem',
})

const Alert = styled.div({
  height: '1rem',
  '& span': {
    fontWeight: 'bold',
    background: 'hsl(200 100% 90%)',
  },
});

const SelectButton = styled.button({
  ':hover, :focus': {
    backgroundColor: 'rgba(250, 98, 91, 0.5)',
    color: '#fff',
  },
  padding: '8px 16px',
  margin: '4px',
  borderRadius: '20px',

});

export default function CustomCategoryFilterContainer() {
  const restaurantsData = useSelector((state) =>
    (state.restaurantsData));

  const uniqCategories = uniqBy(restaurantsData, 'category');

  const dispatch = useDispatch();

  function handleClickCategory(categoryValue) {
    dispatch(setCategoryFilter(categoryValue));
  }

  const selectedCategory = useSelector((state) =>
    (state.selectedCategory));
  const categoryColor = useSelector((state) =>
    (state.categoryColor));
  const alert = useSelector((state) =>
    (state.alert));

  return (
    <Container>
      <TitleBox>
        <p>무엇을 드시고 싶으세요?</p>
        <hr />
        <Alert>
          <span>
            {alert === '드시고 싶은 것을 다시 선택해주세요 !' ? alert : ''}
          </span>
        </Alert>
      </TitleBox>
      {uniqCategories.map((category) => (
        <SelectButton
          type='button'
          key={category.id}
          onClick={() => handleClickCategory(category.category)}
          className={
            selectedCategory === category.category ? // 카테고리키워드가 들어왔을때
              categoryColor : ''
          }
        >
          {category.category}
        </SelectButton>
      ))}
    </Container>
  )
}