import React from "react";   

class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>Product Component</h1>
        
        <h4>Title : {this.props.name}</h4>
        <img src ={this.props.image} width="200" height="200"></img>
        <p>Description : {this.props.description}</p>
        <p>Price :${this.props.price.toFixed(2)}</p>
        <p>Rating :4.5/5</p>
         <button>Add to Cart</button>
      </div>
    );
  }
}

export default Product;