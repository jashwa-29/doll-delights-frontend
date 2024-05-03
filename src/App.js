
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import '.index.css';
// import Navbar from './Components/Navigation/Navbar';
import Home from './Components/Navigation/Home';
import Collection from './Components/Navigation/Collection';
import Account from './Components/Navigation/Account';
import Contact from './Components/Navigation/Contact';
import Cart from './Components/Navigation/Cart';
import Signup from './Components/Signup';
import Login from './Components/Login';
import 'tailwindcss/tailwind.css';
import MainHome from './Components/MainHome';
import { useState } from 'react';
import Navbar from './Components/Navigation/Navbar';
import Succes from './Components/Succes';
import Failure from './Components/Failure';


function App() {
  const[cart , setCart]= useState([])
  return (
    <div>
        <BrowserRouter>
        {/* <Navbar></Navbar> */}
        {/* <Navbar cartCount={cart.length}></Navbar> */}
        <Routes>
          {/* <Route> */}
            <Route index element={<MainHome></MainHome>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/Collection' element={<Collection cart={cart} setCart={setCart}></Collection>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/cart' element={<Cart  cart={cart} setCart={setCart}></Cart>}></Route>
            <Route path='/account' element={<Account  cart={cart} setCart={setCart}></Account>}></Route>
          {/* </Route> */}
          <Route path='/signin' element={<Signup></Signup>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/sucess' element={<Succes></Succes>}></Route>
          <Route path='/cancel' element={<Failure></Failure>}></Route>
          {/* <Route path='/nav' element={<Navbar cartCount={cart.length}></Navbar>}></Route> */}
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
