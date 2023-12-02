import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import InnerDonateForm from './InnerDonate';

const stripePromise = loadStripe('pk_test_51OHcJjKI0t3hZzYa0QC73mElXGTwnl0TStX9IO8SttcEAilhPiA6B3ePYUcuKvNgPaBV7GjzIMmQg8jNstXPtY8100upMWmutQ'); // Replace with your actual Stripe public key

const DonateForm = () => {
  return (
    <Elements stripe={stripePromise}>
      <InnerDonateForm />
    </Elements>
  );
};

export default DonateForm;
