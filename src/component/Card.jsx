import React from 'react'
function Card (props) {
    return (
        <React.Fragment>
            <h2>{props.name}</h2>
            <p>{props.universe}</p>
            <p>{props.alterego}</p>
            <p>{props.occupation}</p>
            <p>{props.friends}</p>
            <p>{props.superpowers}</p>
            <img src={props.imgLink} alt={props.title}/>
        </React.Fragment>
    );
}
export default Card;