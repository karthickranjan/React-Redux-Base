import React, { Component } from "react";

export default class Home extends Component {

    increment=()=>{
        console.log("dasdsds",this.props.count);
        this.props.increment(this.props.count);
    }

    decrement=()=>{
        this.props.decrement(this.props.count);
    }

    render() {
        console.log("this.props====>",this.props);
        return (
            <div>
               Welcome {this.props.userName} !!!<br/><br/>
               <button onClick={this.increment}>Increment</button><br/><br/> {this.props.count}<br/><br/>
               <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}