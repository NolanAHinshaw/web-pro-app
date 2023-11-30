import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import FilteredList from './components/FilteredList'; 

const produce = [
  {name: "Apple", type: "Fruit"},
  {name: "Pineapple", type: "Fruit"} ,
  {name: "Banana", type: "Fruit"},
  {name: "Pear", type: "Fruit"},
  {name: "Strawberry", type: "Fruit"},
  {name: "Orange", type: "Fruit"},
  {name: "Lettuce", type: "Vegetable"},
  {name: "Cucumber", type: "Vegetable"},
  {name: "Eggplant", type: "Vegetable"},
  {name: "Squash", type: "Vegetable"},
  {name: "Bell pepper", type: "Vegetable"},
  {name: "Onion", type: "Vegetable"},
]; 

class App extends Component { render() {
  return (
    <div className="App">
      <HelloWorld name={'nolan'}/>
      <Counter/>
      <FilteredList items={produce}/>
    </div>
  );
  }
}

export default App;
