import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
//import Error from './ErrorMessage';

class Checkout extends Component {
  render() {
    return (
      <div className="stipe"><StripeCheckout>{this.props.children}</StripeCheckout></div>
    )
  }
}

export default Checkout;
