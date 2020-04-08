import React from 'react';
import  { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function FundedForm() {
  const stripe = useStripe();
  const element = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: element.getElement(CardElement)
    })

    if(!error) console.log(paymentMethod);
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button disabled={!stripe}>Fund Hackathon</button>
    </form>
  )
}

function Funded() {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC);
  
  return (
    <Elements stripe={stripePromise}>
      <FundedForm />
  </Elements>
  )
}

export default Funded;