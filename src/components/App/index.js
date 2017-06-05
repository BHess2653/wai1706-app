import React, { Component } from 'react';
import './App.css';

import ItemsList from '../ItemsList';
import MainForm from '../MainForm';

import { randomColor } from '../../util/help';
let mainColor = randomColor()

class App extends Component {
  constructor(props){
    super(props)

    this.addItem = this.addItem.bind(this)
    this.updateItem = this.updateItem.bind(this)
    this.removeItem = this.removeItem.bind(this)

    this.state = {
      items: {
        item1: {
          name: 'Mission 1',
          status: 'Complete'
        },
        item2: {
          name: 'Mission 2',
          status: 'Complete'
        },
        item3: {
          name: 'Mission 3',
          status: 'Incomplete'
        }
      }
    }
  }

  addItem(item){
    // update our state with a copy of state
    const items = {...this.state.items}

    //add new item
    const timestamp = Date.now()
    items[`item-${timestamp}`] = item

    //set state
    this.setState({items})
  }

  updateItem = (key, updatedItem) => {
    const items = {...this.state.items}
    items[key] = updatedItem
    this.setState({items})
  }

  removeItem = (key) => {
    const items = {...this.state.items}
    delete items[key]
    this.setState({items})
  }

  render() {
    console.log("Color: ", mainColor)
    console.log("Current state: ", this.state)
    return (
      <div className="App">
        <MainForm
          randomColor={mainColor}
          addItem={this.addItem}
        />
        <ItemsList
          items={this.state.items}
          removeItem={this.removeItem}
          updateItem={this.updateItem}
        />
      </div>
    );
  }
}

export default App;
