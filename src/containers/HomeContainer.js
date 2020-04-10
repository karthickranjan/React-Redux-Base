import React, { Component } from "react";
import Home from '../components/Home';
import { connect } from 'react-redux';
import {increment,decrement} from '../actions/actions'

class HomeContainer extends Component {

    render() {
        const name = this.props.location && this.props.location.state ? this.props.location.state.userName : ''
        console.log("this.props.---->",this.props);
        return (
            <div>
                <Home userName={name} {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
  console.log("state---->",state);
    return {
      count: state.data.count
    };
  };
  
  const mapDispatchToProps =(dispatch)=>{
    return {
      increment:(data)=>{
        dispatch(increment(data))
      },
      decrement:(data)=>{
        dispatch(decrement(data))
      }
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);