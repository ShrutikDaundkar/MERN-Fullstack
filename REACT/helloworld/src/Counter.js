import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={count:props.count};
    }
    render(){
        return(
            <div>
                <button onClick={()=>{
                    // this.props.count= this.props.count+1;
                    console.log("Liked");
                    this.setState({count:this.state.count+1});
                    this.props.handler(this.state.count+1);

                }}>+</button>


                <input value={this.state.count} type="text"/>


                <button onClick={()=>{
                    // this.props.count= this.props.count-1;
                    console.log("Disliked");
                    this.setState({count:this.state.count-1});
                    this.props.handler(this.state.count-1);
                }}>-</button>
            </div>
        );
    }
    
}

export default Counter;