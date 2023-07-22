import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { LandingContainer } from './features/dashboard/dashboard';
import SearchAppBar from './utils/navbar';
import { RestaurantMenuContainer } from './features/restaurantMenu/restaurantMenu';
import Orderstatus from './features/OrderStatus';
import CheckOut from "./features/checkout";
import SearchMenu from './features/SearchMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <SearchAppBar />
          <Routes>
            <Route path="/" element={<LandingContainer />} />
            <Route path="menu" element={<RestaurantMenuContainer />} />
              <Route path="checkOut" element={<CheckOut />} />
            <Route path="orderstatus" element={<Orderstatus />} />
            <Route path="searchMenu" element={<SearchMenu />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
