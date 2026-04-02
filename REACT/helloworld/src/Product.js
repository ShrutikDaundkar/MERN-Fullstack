import React from "react";   
import Counter from "./Counter";
import { data } from "react-router-dom";
class Product extends React.Component {
  constructor(props){
    super(props);
    this.state={likes:props.likes}
    this.handler=this.handler.bind(this);

  }

  handler(data){
    this.setState({likes:data})
  }
  render() {
    return (
      <div>
        <h1>Product Component</h1>
        
        <h4>Title : {this.props.name}</h4>
        <img src ={this.props.image} width="200" height="200"></img>
        <p>Description : {this.props.description}</p>
        <p>Price :${this.props.price.toFixed(2)}</p>
        <p>Likes :{this.state.likes}</p>
        <Counter count={this.state.likes} handler={this.handler}></Counter>
         <button>Add to Cart</button>
      </div>
    );
  }
}

export default Product;