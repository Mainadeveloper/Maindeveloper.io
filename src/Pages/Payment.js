import React, { useState } from 'react';

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [mpesaNumber, setMpesaNumber] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleMpesaNumberChange = (event) => {
    setMpesaNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (paymentMethod === 'card') {
      // Handle card payment submission logic here
      console.log('Card payment submitted:', cardNumber, expiryDate, cvv);
    } else if (paymentMethod === 'mpesa') {
      // Handle M-Pesa payment submission logic here
      console.log('M-Pesa payment submitted:', mpesaNumber);
    }
  };

  return (
    <div className="payment">
      <h2> Complete Payment </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="paymentMethod"></label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
          >
            <option value="card">Card</option>
            <option value="mpesa">M-Pesa</option>
          </select>
        </div>

        {paymentMethod === 'card' && (
          <div>
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
            <br/>
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={handleExpiryDateChange}
            />
            <br/>
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={handleCvvChange}
            />
          </div>
        )}

        {paymentMethod === 'mpesa' && (
          <div>
            <label htmlFor="mpesaNumber">M-Pesa Number:</label>
            <input
              type="text"
              id="mpesaNumber"
              value={mpesaNumber}
              onChange={handleMpesaNumberChange}
            />
          </div>
        )}

        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default PaymentMethod;
