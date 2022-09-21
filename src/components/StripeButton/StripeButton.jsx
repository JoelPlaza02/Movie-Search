import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51LcLtjEYVFiLUHmJbUcUuzXHPNYmmusKXprb8d9y0Q6Apy2zNbw6PNamHzTa1CVDXTrsOgUsS51XLUTnRKW714Pr00YjYnhPFw';

  const onToken = (token) => {
      console.log(token);
      alert("Payment Successful");
  };

  return (
    <StripeCheckout
        label="Pay Now"
        name="Movie Search"
        billingAddress
        shippingAddress
        image='https://images.emojiterra.com/google/noto-emoji/v2.034/share/1f37f.jpg'
        description={`Your monthly total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
