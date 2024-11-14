import React from 'react';
import "./checkout.css";
const Checkout = ({ orderDetails }) => {
  const { cartItems, totalPrice, username } = orderDetails;

  if (!cartItems || cartItems.length === 0) {
    return <p>Your cart is empty!</p>;
  }

  // Function to handle payment gateway redirection
  const handlePayment = () => {
    window.location.href = "https://www.phonepe.com"; // Redirecting to PhonePe or payment gateway
  };

  return (
    <div>
      <h2>Review Your Order</h2>
      <p>Username: {username}</p> {/* Display username */}
      <div className="checkout-details">
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.Name} width="100" />
              {item.Name} - {item.qty} x ${item.price} = ${item.qty * item.price}
            </li>
          ))}
        </ul>
        <p>Total Price: ${totalPrice}</p>
      </div>

      <div className="payment-section">
        <h3>Proceed to Payment</h3>
        <button onClick={handlePayment}>Pay with PhonePe</button>
      </div>
    </div>
  );
};

export default Checkout;
