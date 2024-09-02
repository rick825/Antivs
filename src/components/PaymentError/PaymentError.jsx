import React from 'react';
import './PaymentError.css'; 

const PaymentError = ({ message }) => {
  return (
    <div className="payment-error">
      {message || "An error occurred. Please try again."}
    </div>
  );
};

export default PaymentError;
