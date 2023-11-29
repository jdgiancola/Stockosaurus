import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from 'react-stripe-elements';
import '../Styles/Donate.css';

const DonateForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');

  const handleDonate = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
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
      // Handle the token (send to server, update UI, etc.)
      console.log(token);
    }
  };

  return (
    <form onSubmit={handleDonate}>
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
        <CardElement />
      </label>
      <button type="submit" disabled={!stripe}>
        Donate!
      </button>
    </form>
  );
};

export default DonateForm;


