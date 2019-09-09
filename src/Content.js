import React, {Component} from 'react';
import './Content.css';

export default class Content extends Component{
    constructor(){
        super()
        this.state={
            count:0,
            name: ''
        }
    }

    addNum=()=>{
        this.setState({
            count:this.state.count+1,
            name:'test'
        })
    }
    render(){
        return(
            <div className="bbt">
                name: {this.state.name}
               <button className="bt" onClick={this.addNum}>count: {this.state.count}</button>
            </div>
        );
    }
}

