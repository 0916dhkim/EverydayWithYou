import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import {
  MemoryRouter,
} from 'react-router-dom';

import SituationSelectPage from './SituationSelectPage';

jest.mock('react-redux');

describe('SituationSelectPage', () => {
  const restaurants = [
    {
      "id": "10",
      "name": "더다이닝랩",
      "situation": "소개팅",
      "age": "20대",
      "place": "마포구/홍대/합정",
      "category": "양식",
      "priceRange": "3만원 이하",
      "mood": null,
      "2nd-course": null,
    },
    {
      "id": "36",
      "name": "보이어",
      "situation": "데이트",
      "age": "20대",
      "place": "성수",
      "category": "양식",
      "priceRange": "3만원 이하",
      "mood": "고급스러운",
      "2nd-course": null,
    },
  ]

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        {
          "id": "10",
          "name": "더다이닝랩",
          "situation": "소개팅",
          "age": "20대",
          "place": "마포구/홍대/합정",
          "category": "양식",
          "priceRange": "3만원 이하",
          "mood": null,
          "2nd-course": null,
        },
        {
          "id": "36",
          "name": "보이어",
          "situation": "데이트",
          "age": "20대",
          "place": "성수",
          "category": "양식",
          "priceRange": "3만원 이하",
          "mood": "고급스러운",
          "2nd-course": null,
        },
      ],
    }))
  });

  const renderSituationSelectPage = () => render((
    <MemoryRouter>
      <SituationSelectPage
        restaurants={restaurants} />
    </MemoryRouter>
  ));

  describe('rendering situation select page', () => {
    it('calls dispatch with action : setRestaurants', () => {
      const { container } = renderSituationSelectPage();

      expect(container).toHaveTextContent('코스를 알려드리는 여정이 시작됩니다 !');

      expect(dispatch).toBeCalledWith({
        type: 'setRestaurants',
        payload: { restaurants },
      })
    });
  });
});
