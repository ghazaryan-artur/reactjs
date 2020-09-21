import React, {Component} from 'react';
import ReactDOM from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile';


class App extends Component {
  state = {
    age: 25
  }
   
  newRandomAge = () => {
    this.setState({
      age: Math.ceil(Math.random() * 100)
    })
      
  }

  
  render() {
    return (
      <div>
        <button onClick={this.newRandomAge}>Refender</button>

        <Profile 
          age={this.state.age}
          gender='Мужской'
          about='Немного о себе'
        />
      </div>
    )
  }
    
    
  
}

export default App;
