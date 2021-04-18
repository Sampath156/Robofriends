import react from 'react';
import CardList from './CardList';
import {robots} from './robots';
import Scroll from './Scroll';
//import ErrorBoundry from './ErrorBoundry'
import Searchbox from './Searchbox';
import './App.css';

class App extends react.Component
{
    constructor(){
        super();
        this.state = {
            robots : robots,
            searchtext : ''
        }
    }

    onSearchChange = (event) =>
    {
        this.setState({searchtext : event.target.value})        
            
    }

    render()
    {
            console.log('in render');
            const filteredList = this.state.robots.filter(robots =>
            {
                return robots.name.toLowerCase().includes(this.state.searchtext.toLowerCase());
            })
        return(
        <div className = 'tc'>
        <h1 className= 'f1'>Robo Friends</h1>
        <Searchbox isearchChange = {this.onSearchChange}/>
        <Scroll>
            
                <CardList robots ={filteredList} />
            
        </Scroll>
        </div>
        );
    }
}


export default App;