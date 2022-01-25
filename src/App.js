import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { Route, Routes } from 'react-router-dom'
import withRouter from "./utils/withRouter";




function App() {
  return <div>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
      </Routes>
  </div>;
}

export default App;
