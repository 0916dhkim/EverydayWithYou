// 관심사: 컴포넌트 라우터와 제이슨에서 기존 레스토랑 정보가져와서 컴포넌트에 뿌려주기
import {
  Routes,
  Route,
} from 'react-router-dom';

import SituationSelectPage from './pages/SituationSelectPage';
import HomePage from './pages/HomePage';
import CustomPage from './pages/CustomPage';
import RestaurantsPage from './pages/RestaurantsPage';
import SearchPage from './pages/SearchPage';

import restaurants from '../assets/json/restaurants.json';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={
          <HomePage
            restaurants={restaurants}
          />}
        />
        <Route path="/" element={
          <SituationSelectPage
            restaurants={restaurants}
          />}
        />
        <Route path="/custom" element={
          <CustomPage
            restaurants={restaurants}
          />}
        />
        <Route path="/restaurants/:name" element={
          <RestaurantsPage
            restaurants={restaurants}
          />}
        />
        <Route path="/search" element={
          <SearchPage
            restaurants={restaurants}
          />}
        />
      </Routes>
    </>
  )
}
