import React from 'react'

class ControlledInput extends React.Component {
    state = {
      studying: true,
      grade: 2
    }
  
    handleChange = ({ target: { name, type, checked, value } }) => {
      this.setState({
        [name]: type === 'checkbox' ? checked : value
      })
    }
  
    render = () => (
      <form>
        <label>
          Is studying:
  
          <input
            name='studying'
            type='checkbox'
            checked={this.state.studying}
            onChange={this.handleChange}
          />
        </label>
  
        <br />
  
        <label>
          Your grade:
  
          <input
            name='grade'
            type='number'
            value={this.state.grade}
            onChange={this.handleChange}
          />
        </label>
      </form>
    )
  }
  
  export default ControlledInput