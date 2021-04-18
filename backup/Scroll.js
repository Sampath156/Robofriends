import react from 'react';

const Scroll = (props) =>
{
    return(
        <div style={{overflowY:'scroll',height:'800px',border:'1px solid white'}}>
            {props.children}
        </div>
    )
}

export default Scroll