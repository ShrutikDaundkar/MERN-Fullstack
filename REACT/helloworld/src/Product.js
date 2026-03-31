import React from "react";   

class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>Product Component</h1>
        
        <h4>Title : Ford Mustang </h4>
        <img src ="/images/mustang.jpg" width="200" height="200"></img>
        <p>Description :This is a beautiful Ford Mustang.</p>
        <p>Price :$30,000</p>
        <p>Rating :4.5/5</p>
         <button>Add to Cart</button>
      </div>
    );
  }
}

export default Product;