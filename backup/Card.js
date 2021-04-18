import React from 'react';

const Card = (props) => {
    return(
    
        <div className = 'bg-light-green grow br3 pa3 ma2 dib bw2 shadow-5'>
            <img alt ='robots' src ={'https://robohash.org/$props.id?200x200'} />
            <div>
                <h2> {props.name} </h2>
                <h2>{props.email}</h2>
            </div>
        </div>
    )
}

export default Card;