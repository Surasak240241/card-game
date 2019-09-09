import React, { Component } from 'react';
import './App.css';
import Content from './Content';
import './Content.css';


let x = 72
class App extends Component {
 render() {
 return (
 <div className="App">
    SURASAK {x} 
    <Content />
 </div>
 );
 }
}

export default App;
