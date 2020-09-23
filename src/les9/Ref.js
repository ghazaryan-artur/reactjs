import React from 'react'

class Ref extends React.Component {
   constructor(props){
       super(props);
       this.input = React.createRef();
   }
  
    handleSubmit = (e) => {
        alert(this.input.current.value);
        e.preventDefault();
    
    }

    render = () => (
        <form onSubmit={this.handleSubmit}>
        <label>
            Name:
            <input type='text' defaultValue="aaa" ref={this.input} />
        </label>

        <input type='submit' value='Submit' />
        </form>
    )
  }
  
  export default Ref