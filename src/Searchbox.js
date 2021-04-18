import react from 'react';

const Searchbox = ({isearchChange}) => {
    return(
        <div >
            <input type ='search'
            placeholder = 'Search Robots'
            className = 'pa3 ba b--green bg-lightest-blue' 
            onChange = {isearchChange} />
        </div>

    );
}

export default Searchbox;