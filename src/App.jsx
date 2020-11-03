import React,{Component} from "react"; 
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state ={
      todos:[{activity:"Sleep",stat:false},{activity:"Study",stat:false},{activity:"Play",stat:false},{activity:"Repeat",stat:false}],
      value:"",
      value1:""
    }
  }
  Submit = ()=>{
    this.setState({todos:[...this.state.todos,{activity:this.state.value,state:false}]})
    console.log(this.state.value) 
    this.state.value=""   
    console.log(this.state.todos)
  }
  delete=(index)=>{
    // console.log(index)
    this.state.todos.splice(index,1)
    this.setState({todos:this.state.todos})
  }
  Edit=(index)=>{
    
    this.state.todos[index].stat=true;
    this.setState({todos:this.state.todos})    
  }
Update=(index)=>{
  this.state.todos[index].activity=this.state.value1;
  this.state.todos[index].stat=false
  this.setState({todos:this.state.todos})


}
DeleteAll = ()=>{
  this.state.todos=[]
  this.setState({todos:this.state.todos})
}


  render(){
    return(
      <div>
        
        <input value={this.state.value} onChange={(e)=>{this.setState({value:e.target.value})}} type="text" name="" id="" placeholder="Enter a value"/>
        <button onClick={this.Submit}>Submit</button>      
        <table>
            {this.state.todos.map((v,i)=>{

              return(
                <tbody><tr key={i} >
                  <td>{i+1}</td>
                  <td >{v.stat ? <td><input value={this.state.value1} onChange={(e)=>{this.setState({value1:e.target.value})}} type="text" name="" id="" placeholder="Enter a value"/></td> : v.activity} </td>
                  { v.stat? <td><button onClick={()=>this.Update(i)}>Update</button></td> :
                  <td><button onClick={()=> {this.Edit(i)}}>edit</button></td>}
                  <td><button onClick={()=> this.delete(i)}>Delete</button></td>
                  <td><button onClick={()=>this.DeleteAll()}>delete all</button></td>
                  aa
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
