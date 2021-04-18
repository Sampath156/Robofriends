import React from 'react';

const Card = ({name,email,id}) => {
    return(
    
        <div className = 'bg-light-green grow br3 pa3 ma2 dib bw2 shadow-5'>
            <img alt ='robots' src ={'https://robohash.org/' + {id} + '?200x200'} />
            <div>
                <h2> {name} </h2>
                <h2>{email}</h2>
            </div>
        </div>
    );
}

export default Card;