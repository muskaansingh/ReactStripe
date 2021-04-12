import React, {useState} from 'react';
import './App.css';
import StripeCheckout from 'react-stripe-checkout';


function App() {

  const [product, setProduct] = useState({
    name:" Getting Started with React.js",
    price: 100,
    product_by: "Facebook"
  });

  return (
    <div className="App">
      <h3>Getting Started with React.js</h3>
      <StripeCheckout stripeKey="" token="" name="Buy Course">
        <button className="btn-large red">Buy React in just $ {product.price}</button>
      </StripeCheckout>
    </div>
  );
}

export default App;
