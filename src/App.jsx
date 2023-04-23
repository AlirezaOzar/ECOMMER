import './App.css'
import { useEffect } from 'react';
import {useLocation, BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage';
import CartMenu from './global/CartMenu';
import Footer from "./components/Footer";
import NavBar from './components/NavBar';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Signup from "./components/Signup";

const ScrolToTop = () => {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);
  
  return null;
}


function App() {
  return (
   <div className="app">
    <BrowserRouter>
      <NavBar/>
      <ScrolToTop/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <CartMenu/>
      <Footer/>
    </BrowserRouter>
   </div>
  )
}

export default App
