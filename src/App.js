import {Component} from 'react'


import logo from './logo.svg';
import './App.css';

class App extends Component {
  

  constructor(){
      super();

      this.state = {
        monsters:[],
        searchField:'',
        
      };
      // console.log('constructor')
    }

    componentDidMount(){
      // console.log('componetDidMount')
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=> response.json() )
      .then((users)=> this.setState(

        () =>{
        return{monsters:users}
      },

      ()=>{
        console.log(this.setState)
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
      // console.log('render')
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
        {filteredMonsters.map((monster)=>{
          return (
            <div key = {monster.id}>
            <h1>{monster.name}</h1>  
            </div>
          )
        })}  
      </div>
    )
  };


}

export default App;
