import React, { Component } from 'react'
import { randomColor } from '../../util/help'

export default class ItemsList extends Component {
  render(){
    let itemref = this.props
    let items = itemref.items

    function completeItem(key){
      const item = items[key]

      let changeStatus = items[key].status === 'Complete' ? 'Incomplete' : 'Complete'

      const updatedItem = {
        ...item,
        status: changeStatus
      }
      itemref.updateItem(key, updatedItem)
    }

    return(
      <div className="row">
        <div className="col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3">
          <ul className="Items-List list-group">
            {Object.keys(items).map(function(key){
              return(
                <li key={key} className="Item list-group-item clearfix">
                  <strong>{items[key].name} -</strong>
                  <strong> {items[key].status === 'Incomplete' ? 'Incomplete:' : 'Complete:'}</strong>
                  <button className="btn btn-danger pull-right" onClick={() => itemref.removeItem(key)}>Remove</button>
                  <button className="btn btn-success pull-right" onClick={() => completeItem(key)}>{items[key].status === 'Incomplete' ? 'Finish' : 'Repeat'}</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
