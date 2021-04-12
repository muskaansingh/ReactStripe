import React, {useState} from 'react';
import './App.css';
import StripeCheckout from 'react-stripe-checkout';


function App() {

  const [product, setProduct] = useState({
    name:" Getting Started with React.js",
    price: 100,
    product_by: "Facebook"
  });

  const makePayment = (token) => {
    const body = {
      token,
      product
    };
    const headers = {
      "Content-Type": "application/json"
    };
    
    return fetch(`http://localhost:3040/payment`, {
      method: "POST",
      headers,
      body:JSON.stringify(body)
    })
    .then (response => {
      console.log("RESPONSE", response);
      const {status} = response;
      console.log("Status: ",status);
    })
    .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <h3>Getting Started with React.js</h3>
      <StripeCheckout 
          stripeKey={process.env.REACT_APP_KEY}
          token={makePayment}
          name="Buy Course"
          amount={product.price * 100}
      >
        <button className="btn-large red">Buy React in just $ {product.price}</button>
      </StripeCheckout>
    </div>
  );
}

export default App;
