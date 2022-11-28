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


function App() {
  return (
    <div className="Ap">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/details/:category' element={<ProductDetail/> } />
          <Route path='/singlepage/:id' element={<SinglePage/>} />
          <Route path='/cart/:id' element={<Cart />} />
          <Route path='/register' element={<Register/> } />
          <Route path='/login' element={<Login />} />
           {/* <Route path='/single/:id' element={<Specific/> } /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
