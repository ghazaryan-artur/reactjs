import React from 'react'

const Card = (props) => {
    const {name, age, specialty } = props;

    return (
        <div className="ïtem">
            <img src="http://i.pravatar.cc/300" alt=" " />
            <h2>Name {name}</h2>
            <p>Age: {age}</p>
            <p>Specialty: {specialty}</p>
        </div>
    )


} 

export default Card