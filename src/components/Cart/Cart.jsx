import React from 'react';
import { useProduct } from '../../context/ProductContext';
import './Cart.css';
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cart, setCart } = useProduct();
  const navigate = useNavigate();


  const handleRemove = (itemId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
  };


  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

 
  const handleProceedToPay = () => {
     if(cart.length > 0){
      navigate('/payment');
     }
  };

  return (
    <div className='cart'>
      <h1>Your Cart</h1>
      <div className='cart-content'>
        <ul className='cart-items'>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map(item => (
              <li key={item.id} className='cart-item'>
                <img src={item.img} alt={item.name} className='cart-item-img' />
                <div className='cart-item-details'>
                  <h2>{item.name}</h2>
                  <p>${item.price}</p>
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              </li>
            ))
          )}
        </ul>
        <div className='cart-total'>
          <h2>Cart Total :</h2>
          <p>${calculateTotal()}</p>
          <button className='proceed-button' onClick={handleProceedToPay}>Proceed to Pay</button>
          <div className="footmidpartners">
            <h2>Our Payment Partners →</h2>
            <div className="footpartnerslist">
            <img  src="https://img.icons8.com/color/50/visa.png" alt="visa"/>
            <img  src="https://img.icons8.com/color/50/mastercard.png" alt="mastercard"/>
            <img  src="https://img.icons8.com/color/50/discover.png" alt="discover"/>
            <img src="https://img.icons8.com/fluency/48/jcb.png" alt="jcb" />
            <img  src="https://img.icons8.com/color/50/paypal.png" alt="paypal"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
