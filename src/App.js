import React ,{Component} from 'react';
import CardList from './CardList'; 
import Search from './Search';
import Scroll from './Scroll';


class App extends Component {
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''
        }


    }


   onSearchChange=(event)=>{
   this.setState({searchfield: event.target.value});
}

componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=>this.setState({robots:users}))

}
   

   


render()
{
    const filteredrobots=this.state.robots.filter(robots=>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    if(this.state.robots.length===0){
       return <h1>Loading</h1>
    }
    else{
         
    return(
        <div className="tc">
            <h1 className=" f1">ROBOFRIENDS</h1>
            <div className=" ma3">
                <Search onSearchChange={this.onSearchChange} />
            </div>
            <Scroll>
            <CardList robots={filteredrobots} /> 
            </Scroll>
        </div>
    );
    }
   

   
}


}


export default App;