import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import mq from '../../shared/media-query';

const HorizontalRestaurantsListContainer = styled.div(() => mq({
  padding: ['0 7.5%', '0 3rem', '0 3rem'],
  paddingBottom: ['10%', '3rem', '3rem'],
}));

const Title = styled.h4(() => mq({
  fontSize: ['4.5vw', '1.5rem', '1.5rem'],
  fontWeight: '400',
  color: '#4F4F4F',
  marginBottom: ['5%', '1rem', '1rem'],
}));

const HorizontalRestaurantsList = styled.ul({
  display: 'flex',
  overflowY: 'hidden',
});

const HorizontalRestaurantsList_restaurant = styled.li(() => mq({
  backgroundColor: '#fff',
  padding: ['2vw', '1rem', '1rem'],
  marginRight: ['2vw', '1rem', '1rem'],
  marginBottom: ['2vw', '1rem', '1rem'],
  boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.04)',
  '& img': {
    width: ['40vw', '250px', '250px'],
    height: ['25vw', '150px', '150px'],
    objectFit: 'cover',
    marginBottom: ['5%', '1rem', '1rem'],
  },
}));

const HorizontalRestaurantsList_restaurant_contents = styled.div(() => mq({
  display: 'flex',
  flexDirection: 'column',
  color: '#828282',
  fontSize: ['3.5vw', '1rem', '1rem'],
  '& h4': {
    color: '#4F4F4F',
    fontSize: ['4vw', '1.25rem', '1.25rem'],
    fontWeight: '700',
    marginBottom: ['2.5%', '0.5rem', '0.5rem'],
  },
  '& h5': {
    fontSize: ['3.5vw', '1rem', '1rem'],
    fontWeight: '500',
  },
  '& span': {
    fontSize: ['3.5vw', '1rem', '1rem'],
    color: '#fff',
  },
}));

export default function RandomAgeCategoryRestaurants() {
  const randomAgeCategoryRestaurants = useSelector((state) => (
    state.randomAgeCategoryRestaurants
  ));
  const age = useSelector((state) => (
    state.age
  ));
  const category = useSelector((state) => (
    state.category
  ));

  function condition(category) {
    if (
      category == '이탈리안' ||
      category == '스테이크'
    ) {
      return `${age}가 좋아하는 ${category} 음식점`;
    } else if (category == '인도음식') {
      return `${age}가 좋아하는 ${category}점`;
    } else {
      return `${age}가 좋아하는 ${category}`;
    }
  }

  const titleCondition = condition(category);

  return (
    <HorizontalRestaurantsListContainer>
      <Title>
        {titleCondition}
      </Title>
      <HorizontalRestaurantsList>
        {randomAgeCategoryRestaurants.map(restaurant => (
          <Link
            to={`/restaurants/${restaurant.name}`}
            key={restaurant.id}
          >
            <HorizontalRestaurantsList_restaurant
              key={restaurant.id}
            >
              <img src={`${restaurant.img}`} />
              <HorizontalRestaurantsList_restaurant_contents>
                <h4>{restaurant.name}</h4>
                {`${restaurant.category} · ${restaurant.place}`}
                <br />
                {restaurant.mood === null ?
                  <span>결과없음</span> :
                  <h5>{`#${restaurant.mood}`}</h5>
                }
              </HorizontalRestaurantsList_restaurant_contents>
            </HorizontalRestaurantsList_restaurant>
          </Link>
        ))}
      </HorizontalRestaurantsList>
    </HorizontalRestaurantsListContainer>
  );
}
