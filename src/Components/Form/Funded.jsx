import React from 'react';
import  { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { postFunds } from '../../redux/reducers/projectsReducer';
import loadingGif from '../../imgs/loading.gif';
toast.configure();

function FundedForm(props) {
  const stripe = useStripe();
  const element = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (Number(props.amount.split('.', 1)[0]) * 100 === 0) return;
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

  const disableSubmit = (Number(props.amount.split('.', 1)[0]) * 100) === 0 || props.status;

  return (
    <form className="stripe-form" onSubmit={handleSubmit}>
      <CardElement />
      <input disabled={props.status} onChange={props.changeAmount} value={props.amount === null ? 0 : props.amount} required min="0" step="5.00" type="number" name="amount"/>
      { 
        props.loading ?
        <span className="loading-img-container"><img src={loadingGif} alt="Loading Gif" /></span> :
        <button className="stripe-form--submit" type="submit" disabled={disableSubmit}>Fund Hackathon</button>
      }
    </form>
  )
}

function Funded(props) {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC);

  return (
    <Elements stripe={stripePromise}>
      <FundedForm changeAmount={props.changeAmount} status={props.status} loading={props.loading} postFunds={props.postFunds} amount={props.amount} />
    </Elements>
  )
}

const mapStateToProps = (reduxState) => ({ loading: reduxState.projects.loading })

export default connect(mapStateToProps, { postFunds })(Funded);