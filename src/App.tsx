import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { LandingContainer } from './features/dashboard/dashboard';
import SearchAppBar from './utils/navbar';
import { RestaurantMenuContainer } from "./features/restaurantMenu/restaurantMenu";
import Orderstatus from "./features/OrderStatus";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchAppBar />
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<LandingContainer />} />
              <Route path="menu" element={<RestaurantMenuContainer />} />
              <Route path="orderstatus" element={<Orderstatus />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
