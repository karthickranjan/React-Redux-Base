import React, { Component } from "react";

export default class Home extends Component {

    render() {
        console.log("this.props====>",this.props);
        return (
            <div>
               Welcome {this.props.location.state.userName} !!!
            </div>
        );
    }
}