import {Component} from 'react'

import CardList from './Components/card-list/card-list-component'


import './App.css';

class App extends Component {
  

  constructor(){
      super();

      this.state = {
        monsters:[],
        searchField:'',
        
      };
      
    }

    componentDidMount(){
      
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=> response.json() )
      .then((users)=> this.setState(

        () =>{
        return{monsters:users}
      }
      
      ))
    }
    // this only gets called and initialize once when out class components  initialises

    onSearchChange =(event)=>{
          console.log(event.target.value)
          const searchField =event.target.value.toLocaleLowerCase();
          this.setState(()=>{
            return {searchField};
          })
        }
    render(){
    

      // distructuring them into variables so we don't use this.state every thime we need them
      const {monsters,searchField} =this.state
      const {onSearchChange} = this

      const filteredMonsters =monsters.filter((monster)=>{
            return monster.name.toLocaleLowerCase().includes(searchField);
          });


      return (
      <div className="App">
        <input className='search-box' 
        type='search' 
        placeholder='Search monsters' 
        onChange={onSearchChange}

        />
        < CardList monsters={filteredMonsters}/>
      </div>
    )
  };


}

export default App;
