import React, { Component } from "react";
import SearchField from "react-search-field";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default class Home extends Component {

    increment=()=>{        
        this.props.increment(this.props.count);  
    }

    decrement=()=>{
        this.props.decrement(this.props.count);
    }
    reset=()=>{
        this.props.reset(this.props.count);
    }

    fetchData=()=>{
        const request ={
            entity:this.props.selectedEntity,
            text:this.props.searchText
        }
        this.props.fetchGithubData(request);
    }

    updateSearchText =(value)=>{
        this.props.updateSearchText(value)
    }

    _onSelect = (value) =>{        
        this.props.updateEntity(value.value);
    }

    render() {    
        console.log('props--->',this.props);   
        return (
            <div style={{'width':'100%'}}>               
               <div class="row align-items-start">
                    <div class="col" >
                            <Dropdown style={{width:'25%'}} options={this.props.entity} id='entity_selector' onChange={this._onSelect} 
                            value={this.props.entity[0]} placeholder="Select an option" />                    
                    </div>
                    <div class="col">
                            <SearchField
                            placeholder="Search..."                                               
                            classNames="test-class"
                            onChange={this.updateSearchText}
                            searchText={this.props.searchText}
                            onSearchClick={this.fetchData}
                            />
                    </div>
                    <div class="col"/>                   
                    <div class="col"/>
                    <div class="col"/>                   
                   <div class="col"/>                   
                   <div class="col"/>
                </div>
                <br/>
                
                <div class="row align-items-start">
                    {
                    this.props.searchResults.length > 0 ?                    
                    this.props.searchResults.map((product, index) => (                        
                    <Product key={index} product={product}>           
                        <img src={product.artworkUrl100} />
                    </Product>
                    )) :  'No Results Found!!!' 
                }              
                </div>               
            </div>
        );
    }
}

const Product = ({ product, children }) => (
    <div className="col">
        {children}&nbsp;
      {product.trackName} ${product.trackPrice}      
    </div>
  );