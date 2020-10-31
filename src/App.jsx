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
  delete=(index)=>{
    // console.log(index)
    this.state.todos.splice(index,1)
    this.setState({todos:this.state.todos})
  }

  render(){
    return(
      <div>
        <input value={this.state.value} onChange={(e)=>{this.setState({value:e.target.value})}} type="text" name="" id="" placeholder="Enter a value"/>
        <button onClick={this.Submit}>Submit</button>      
        <table>
          <caption>Todos List</caption>

          
            {this.state.todos.map((v,i)=>{

              return(
                <tbody key={i}><tr >
                  <td>{i+1}</td>
                  <td >{v}</td>
                  <td><button onClick={this.Update}>update</button></td>
                  <td><button onClick={()=> this.delete(i)}>Delete</button></td>
                  
                </tr>
                </tbody>
            
              )
            } )}
          
        </table>
          
      </div>



    )
  }
}


export default App;

