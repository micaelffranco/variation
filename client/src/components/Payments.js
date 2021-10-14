import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  render () {
    //amount 500 cents is 5 dollars
    //classname btn for
    return (
      <StripeCheckout
        name="Variation"
        description="$5 for 5 email credits"
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">
          ADD CREDITS
        </button>
      </StripeCheckout>
    );
  }
}

export default Payments;

//fake credit card 4242 4242 4242 4242
