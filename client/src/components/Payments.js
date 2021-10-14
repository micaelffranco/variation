import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';
class Payments extends Component {
  render () {
    //amount 500 cents is 5 dollars
    //classname btn for
    return (
      <StripeCheckout
        name="$5 for 5 email credits"
        description="Use Card: 4242 4242 4242 4242 to test"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">
          ADD CREDITS
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);

//fake credit card 4242 4242 4242 4242
