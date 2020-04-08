import React from 'react';
import  { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { connect } from 'react-redux';

import { postFunds } from '../../redux/reducers/projectsReducer'

function FundedForm(props) {
  const stripe = useStripe();
  const element = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!props.amount || props.amount == 0) return;
    const submitAmount = Number(props.amount.split('.', 1)[0]) * 100;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: element.getElement(CardElement)
    })

    if(!error) {
      const { id } = paymentMethod;
      props.postFunds(id, submitAmount);
    }
  }

  const disableSubmit = !props.amount || props.amount == 0;

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <input onChange={props.changeAmount} value={props.amount === null ? 0 : props.amount} required min="0" step="5.00" type="number" name="amount"/>
      <button type="submit" disabled={disableSubmit}>Fund Hackathon</button>
    </form>
  )
}

function Funded(props) {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC);

  return (
    <Elements stripe={stripePromise}>
      <FundedForm changeAmount={props.changeAmount} amount={props.amount} />
  </Elements>
  )
}

export default connect(null, { postFunds })(Funded);