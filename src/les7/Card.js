import React from 'react'
import Profile from 'Profile'


class Card extends React.Component{
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

export default Card

