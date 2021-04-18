import react, {useState, useEffect} from 'react';
import CardList from './CardList';
import {robot} from './robots';
import Scroll from './Scroll';
//import ErrorBoundry from './ErrorBoundry'
import Searchbox from './Searchbox';
import './App.css';

function App()
{
    const [robots,setRobots] = useState(robot);
    const [searchtext, setSearchtext] = useState('');
    //setRobots(robot);

    const onSearchChange = (event) =>
    {
        setSearchtext( event.target.value)        
    }

    const filteredList = robots.filter(robots =>
        {
            return robots.name.toLowerCase().includes(searchtext.toLowerCase());
        })
   
    return(
    <div className = 'tc'>
    <h1 className= 'f1'>Robo Friends</h1>
        <Searchbox isearchChange = {onSearchChange}/>
        <Scroll>
            
                <CardList robots ={filteredList} />
            
        </Scroll>
    </div>
        );
}


export default App;