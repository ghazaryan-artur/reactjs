import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
    state = {
        modalVisible: false
    }
    constructor(props) {
        super(props);
        // this.togleModalHandler = this.togleModalHandler.bind(this);
    }
    
    togleModalHandler ( arg1, arg2, e)  {
        console.log(arg1);
        console.log(arg2);
        console.log(e.target);

        this.setState( prevState => ({modalVisible: !prevState.modalVisible} ))
  
    }

    render () {
        return (
            <div>
                { this.state.modalVisible 
                ? (
                    <div className="modal">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta nobis nemo unde quo, quam veritatis ad ratione ut ab, velit nesciunt sapiente quos excepturi. Voluptas libero iure dolorem rerum aliquam!
                    </div>
                )
                : null }

                <button onClick={this.togleModalHandler = this.togleModalHandler.bind ( this, "arg-1", "arg-2")}>Show/Hide</button>
            </div>
        )
    }
}

export default Modal 