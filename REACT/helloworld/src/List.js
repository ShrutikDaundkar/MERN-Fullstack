import React from "react";
import Product from "./Product";
import data from './data/product.json';
class List extends React.Component{

    render(){
        const products = data;
        return(
            <div>{
                products.map((item) => (
                    <Product key={item.id} name={item.name} image={item.image} description={item.description} price={item.price} />
                ))
            }
            </div>
        );
    }
}

export default List;