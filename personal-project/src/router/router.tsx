import { Route, Routes } from 'react-router-dom';
import MainDOM from '../dom/mainDOM';
import PlaceDetailDOM from '../dom/placeDetailDOM';
import WishlistTab from '../dom/wishlistTab';
import { CultureTab, FestivalTab, LeportsTab, RestaurantTab, ShoppingTab, TourismTab } from '../dom/categoriesTab';

const Routers = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainDOM />}></Route>
      <Route path={'placeDetailTab/:contentid'} element={<PlaceDetailDOM />}></Route>
      <Route path={'wishlistTab'} element={<WishlistTab />}></Route>
      <Route path={'tourismTab'} element={<TourismTab />}></Route>
      <Route path={'cultureTab'} element={<CultureTab />}></Route>
      <Route path={'festivalTab'} element={<FestivalTab />}></Route>
      <Route path={'leportsTab'} element={<LeportsTab />}></Route>
      <Route path={'shopping'} element={<ShoppingTab />}></Route>
      <Route path={'restaurant'} element={<RestaurantTab />}></Route>
    </Routes>
  );
};

export default Routers;
