import React,{Component} from "react"; 
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state ={
      todos:["Sleep","Study","Play","Repeat"],
      value:""
    }
  }
  Submit = ()=>{
    this.setState({todos:[...this.state.todos,this.state.value]})
    console.log(this.state.value) 
    this.state.value=""   
  }

  render(){
    return(
      <div>
        <input value={this.state.value} onChange={(e)=>{this.setState({value:e.target.value})}} type="text" name="" id="" placeholder="Enter a value"/>
        <button onClick={this.Submit}>Submit</button>      
        <ul>
          {this.state.todos.map((v,i)=>{
            return(
            <li key={i}>{v}</li>
            )
          } )}
        </ul>
          

      </div>



    )
  }
}


export default App;
