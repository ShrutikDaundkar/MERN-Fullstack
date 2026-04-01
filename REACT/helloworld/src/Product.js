import React from "react";   
import Counter from "./Counter";
class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>Product Component</h1>
        
        <h4>Title : {this.props.name}</h4>
        <img src ={this.props.image} width="200" height="200"></img>
        <p>Description : {this.props.description}</p>
        <p>Price :${this.props.price.toFixed(2)}</p>
        <p>Likes :{this.props.likes}</p>
        <Counter count={this.props.likes}></Counter>
         <button>Add to Cart</button>
      </div>
    );
  }
}

export default Product;