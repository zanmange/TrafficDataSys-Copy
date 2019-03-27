import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'

class Toggle extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: uuidv4()
    }
  }

  render() {
    return (
      <div className="mb-4 mt-4 flex items-center justify-between">
        <label for={this.state.id} className="mr-3">
          <h4 className="mb-2">{this.props.label}</h4>
          <p className="text-xs">{this.props.description}</p>
        </label>
        <div className="form-switch inline-block align-middle">
          <input 
            type="checkbox"
            name={this.state.id}
            id={this.state.id}
            defaultChecked={this.props.enabled} 
            className="form-switch-checkbox"
            onChange={(e) => this.props.onChange(e.target.checked)}
           />
          <label className="form-switch-label" for={this.state.id}></label>
        </div>
      </div>
    )
  }
}

export default Toggle
