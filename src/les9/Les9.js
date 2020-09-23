import React from 'react';
// import Card from './Card';
import './les9.css';

class Les9 extends React.Component {
  state = { value: '' }
  someFunc() {
      console.log(this.state);
  }
  handleChange = ({ target: { value }  }) => {
    this.setState({ value });

  }

  handleSubmit = () => alert('A name was submitted: ' + this.state.value)

  render = () => (
   
    <form>
      <input type="button" onClick={ this.someFunc.bind(this) } value="asdasd" />
      <select value={this.state.value} onChange={this.handleChange}>
        <option value='php'>PHP</option>
        <option value='nodejs'>NodeJS</option>
        <option value='ruby'>Ruby</option>
        <option value='python'>Python</option>
      </select>

      <button type='button'>Select backend language</button>
    </form>
  )
}
    


export default Les9