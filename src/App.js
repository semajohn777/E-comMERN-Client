import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import Register from './pages/Register';
import SinglePage from './pages/SinglePage';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './component/navbar/Navbar';
import Specific from './component/Specific';
import CartContextProvider from './component/context/CartContext';
import SeeMoreCart from './pages/SeeMoreCart';
import SeeMoreSinglePg from './pages/SeeMoreSinglePg';

function App() {
  return (
    <div className="Ap">
      <BrowserRouter>
        <CartContextProvider>
          <Navbar/>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/details' element={<ProductDetail/> } />
            <Route path='/singlepage/:id' element={<SinglePage />} />
            <Route path='/singlepg/:id' element={<SeeMoreSinglePg/>} />
            <Route path='/cart/:id' element={<Cart />} />
            <Route path='/register' element={<Register/> } />
            <Route path='/login' element={<Login />} />
            <Route path='/cartdetails/:id' element={<SeeMoreCart />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
