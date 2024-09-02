import React, { useState } from 'react';
import './Payment.css';
import { toast } from 'react-toastify';
import { useLocalContext } from '../../context/LocalProvider';

const detectCardType = (number) => {
  const cardTypes = {
    visa: /^4/,
    mastercard: /^5[1-5]/,
    discover: /^6(?:011|5[0-9]{2})/,
    diners: /^3[68]/,
    jcb: /^(?:2131|1800|35)/,
  };

  for (const [type, pattern] of Object.entries(cardTypes)) {
    if (pattern.test(number)) {
      return type;
    }
  }
  return 'unknown';
};

const Payment = () => {
  const [error, setError] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('credit-card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState('');
  const {phone} = useLocalContext();

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
      setError(`There was an issue proceeding with payments. Please Contact Support at ${phone}.`);
      toast.error('There was an issue with payment, Please Contact Support');
  };

  const handleCardNumberChange = (event) => {
    const number = event.target.value;
    setCardNumber(number);
    setCardType(detectCardType(number));
  };

  

  const cardimg ={
    'visa':"https://img.icons8.com/color/50/visa.png",
    'mastercard': "https://img.icons8.com/color/50/mastercard.png",
    'discover':"https://img.icons8.com/color/50/discover.png",
    'jcb':"https://img.icons8.com/fluency/48/jcb.png"
  }

  return (
    <div className="payment-container">
      {error && <a href={`tel:${phone}}`} className="error-message">{error}</a>}

      <div className="payment-content">
        {/* Address Form Section */}
        <div className="address-section">
          <h2>Billing Address</h2>
          <form>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" required />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" required />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input type="text" id="state" name="state" required />
            </div>
            <div className="form-group">
              <label htmlFor="zip">ZIP Code</label>
              <input type="text" id="zip" name="zip" required />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input type="text" id="country" name="country" required defaultValue="United States" />
            </div>
            <button type="submit">Save Address</button>
          </form>
        </div>

        {/* Payment Options Section */}
        <div className="payment-options">
          <h2>Payment Options</h2>
          <form onSubmit={handlePaymentSubmit}>
          <div className="form-group">
              <input
                type="radio"
                id="paypal-option"
                name="payment-method"
                value="paypal"
                checked={selectedPaymentMethod === 'paypal'}
                onChange={() => setSelectedPaymentMethod('paypal')}
              />
              <label htmlFor="paypal-option">PayPal</label>
            </div>

            <div className="form-group">
              <input
                type="radio"
                id="credit-card-option"
                name="payment-method"
                value="credit-card"
                checked={selectedPaymentMethod === 'credit-card'}
                onChange={() => setSelectedPaymentMethod('credit-card')}
              />
              <label htmlFor="credit-card-option">Credit Card</label>
              
              {selectedPaymentMethod === 'credit-card' && (
                <div className="card-details">
                  <div className="form-group card-number-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        required
                      />
                      {cardType !== 'unknown' && (
                        <img
                          src={cardimg[cardType]}
                          alt={cardType}
                          className="card-icon"
                        />
                      )}
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="expirationDate">Expiration Date</label>
                    <input type="text" id="expirationDate" name="expirationDate" placeholder="MM/YY" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" required />
                  </div>
                </div>
              )}
            </div>


            <button type="submit">Proceed to Payment</button>
          </form>
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
};

export default Payment;
