import React from 'react';
import './cart.css';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const Cart = ({ cart, setCart, username }) => {
  const navigate = useNavigate();

  const incqty = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    setCart(
      cart.map((curElm) =>
        curElm.id === product.id ? { ...exist, qty: exist.qty + 1 } : curElm
      )
    );
  };

  const decqty = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    setCart(
      cart.map((curElm) =>
        curElm.id === product.id ? { ...exist, qty: exist.qty - 1 } : curElm
      )
    );
  };

  const removeproduct = (product) => {
    setCart(cart.filter((curElm) => curElm.id !== product.id));
  };

  const total = cart.reduce((price, item) => price + item.qty * item.price, 0);

  const handleCheckout = () => {
    const orderDetails = {
      username: username, // Store the username
      cartItems: cart,
      totalPrice: total,
    };
    
    // Save orderDetails to localStorage or database
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

    // Redirect to checkout page with cart data
    navigate('/checkout', {
      state: { orderDetails }, // Passing order details as state
    });
  };

  return (
    <div className="cart">
      <h3>#cart</h3>
      {cart.length === 0 && (
        <div className="empty_cart">
          <h2>Your Shopping cart is empty</h2>
          <Link to="/shop">
            <button>Shop Now</button>
          </Link>
        </div>
      )}
      <div className="container">
        {cart.map((curElm) => (
          <div className="box" key={curElm.id}>
            <div className="img_box">
              <img src={curElm.image} alt="" />
            </div>
            <div className="detail">
              <div className="info">
                <h4>{curElm.cat}</h4>
                <h3>{curElm.Name}</h3>
                <p>Price: ${curElm.price}</p>
                <p>Total: ${curElm.price * curElm.qty}</p>
              </div>
              <div className="quantity">
                <button onClick={() => incqty(curElm)}>+</button>
                <input type="number" value={curElm.qty} readOnly />
                <button onClick={() => decqty(curElm)}>-</button>
              </div>
              <div className="icon">
                <li onClick={() => removeproduct(curElm)}>
                  <AiOutlineClose />
                </li>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bottom">
        {cart.length > 0 && (
          <>
            <div className="Total">
              <h4>Sub Total: ${total}</h4>
            </div>
            <button onClick={handleCheckout}>Checkout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
