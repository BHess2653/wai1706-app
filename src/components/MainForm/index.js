import React, {Component} from 'react'
import './MainForm.css';
export default class MainForm extends Component {
  createItem(e){
    e.preventDefault()

    const item = {
      name: this.name.value,
      status: 'to-do'
    }

    this.props.addItem(item)
    this.mainForm.reset()
  }
  render(){
    return(
      <div className="row">
      <h1>To-do List</h1>
        <h4>Add Items to list</h4>
        <div className="col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3">
          <section className="Main-Form">
            <form className="item-add" ref={(input) => this.mainForm = input } onSubmit={(e) => this.createItem(e)}>
              <input type="text" placeholder="Add Item" required ref={(input) => this.name = input}/>
              <button className="btn btn-primary" type="submit">Add Item</button>
            </form>
          </section>
          </div>
      </div>
    )
  }
}
