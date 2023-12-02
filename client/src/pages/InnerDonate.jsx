import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import '../Styles/Donate.css';

const InnerDonateForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');

  const handleDonate = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      
      return;
    }

    // Create a token or handle card details using elements
    const { token, error } = await stripe.createToken(elements.getElement(CardElement), {
      name: name,
      email: email,
    });

    if (error) {
      console.error(error);
    } else {
    
      console.log(token);
    }
  };

  return (
    <form onSubmit={handleDonate}>
        <image src="
        client/src/assets/images/stockosaurusLogo.png"></image>
      <label>
        Name
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Amount
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <label>
        Card Details
        <CardElement id="creditcard" />
      </label>
      <button type="submit" disabled={!stripe}>
        Donate!
      </button>
    </form>
  );
};

export default InnerDonateForm;

