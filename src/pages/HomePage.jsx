import HomeConditionTagsContainer from '../containers/HomeConditionTagsContainer';
import HomeRegionTagsContainer from '../containers/HomeRegionTagsContainer';
import HomeCategoryTagsContainer from '../containers/HomeCategoryTagsContainer';

import styled from '@emotion/styled';

import {
  Link,
} from 'react-router-dom';

const HomePageLayout = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

const TagsLayout = styled.div({
  textAlign: 'left',
  marginBottom: '48px',
  "& h4": {
    marginBottom: '24px',
  },
});

const PostLayout = styled.h1({
  width: '100%',
});

export default function HomePage({ restaurants }) {
  return (
    <HomePageLayout>
      <TagsLayout>
        <h2>어디 갈지 모르겠다구요? 👀</h2>
        <h4>순서대로 원하시는 태그를 선택해주세요!</h4>
        <HomeConditionTagsContainer
          restaurantsData={restaurants}
        />
        <HomeRegionTagsContainer
          restaurantsData={restaurants}
        />
        <HomeCategoryTagsContainer
          restaurantsData={restaurants}
        />
      </TagsLayout>
      <PostLayout>
        <Link to="/post">맛집 추천하기</Link>
      </PostLayout>
    </HomePageLayout>
  )
}
