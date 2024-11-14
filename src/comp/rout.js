import React from 'react'
import { Routes, Route} from 'react-router';
import Home from './home';
import Shop from './shop';
import Cart from './cart';
import Contact from './contact';
import About from './about';
import Checkout from './checkout';

const Rout = ({ shop, Filter, allcatefilter, addtocart, cart, setCart, username }) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home addtocart={addtocart}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />
        <Route path='shop' element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/checkout' element={<Checkout orderDetails={{ username, cartItems: cart, totalPrice: cart.reduce((total, item) => total + item.qty * item.price, 0) }} />} />
    </Routes>
    </>
  )
}

export default Rout;
