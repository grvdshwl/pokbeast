import React,{Component} from "react"
import CardList from "./CardList.js"
import "./App.css";
import DisplayName from "./DisplayName.js"

const loginList = [25,1,4,7,10,51,110,111,229,12,76,81,69,19,98];


const alphabets = {
	a:15,b:4,c:3,d:24,e:35,f:26,g:9,h:11,i:12,j:17,k:6,l:8,m:0,n:21,o:18,p:3,q:21,r:5,s:2,t:7,u:6,v:12,w:19,x:25,y:23,z:30
}

class App extends Component {
 constructor(){
 	super()
 	this.state = {
 		Pokemon : "",
 		Name : "",
 		list: loginList,
 		placeholder:"Enter"

 		

 	}
 }	

 onSubmit=(event)=>{
 	const date = this._inputDate.value.split("-");
 	const name = this._inputName.value;
 	const yearNum1 = `${date[0]}`[0]
 	const yearNum2 = `${date[0]}`[1];
 	const yearNum3 = `${date[0]}`[2];
 	const yearNum4 = `${date[0]}`[3];
 	const alpha1 = alphabets[name[0]];
 	let alpha2;
 	let alpha3;
 	let alpha4;

 	alphabets[name[1]] ?  alpha2 = alphabets[name[1]] :  alpha2 = 3;
 	alphabets[name[2]] ?  alpha3 = alphabets[name[2]] :  alpha3 = 2;
 	alphabets[name[3]] ?  alpha4 = alphabets[name[3]] :  alpha4 = 7;

 	const yearNum = Number(yearNum2) - Number(yearNum3) - Number(yearNum1) 
 	- Number(yearNum4) + Number(name.length) + alpha1 + alpha2 + alpha3 + alpha4;

 	this.setState({Name: name});
 	const Num = Number(date[1]) + Number(date[2])  + Number(yearNum)  ;
 	this.setState({list : [Num]});
 	event.preventDefault();
 }

 onButtonClick = ()=>{
 	this.setState({Name:""});
 	this.setState({list:loginList})
 	{let name = document.getElementById("name");
 		name.value ="";
 	let date = document.getElementById("date");
 		date.value ="";
 				

 		}

 }



 render(){
    return (
    <div className="App">

      
      <h1 id ="header" className=" center animate__animated animate__backInUp" >
       PokeBeast  </h1>
      <div className = "center" >

		 	{<form onSubmit={this.onSubmit}>
		 			 		<h4> <span className="dob">NAME </span>:  <input
		 			 		id = "name"  
		 			 		className = "ma2 pa2 ba b--green bg-lightest-blue"
		 			 		ref = {(a)=>this._inputName = a}
		 			 		placeholder={this.state.placeholder} type="text" required/>  
		 			 		<span className ="dob">DOB</span>  :  
		 			 		<input  
		 			 		id = "date"
		 			 		className = " ma2 pa2 ba b--green bg-lightest-blue"
		 			 		ref = {(b)=>this._inputDate = b}
		 			 		 type="date" required/> 


		 			 		<span><button className=" bg-light-red ma pa2 br3"> Submit </button></span>	
		 			 		<button className="bg-light-blue pa2 ma2 br3" onClick = {this.onButtonClick}> Refresh </button>
		 			 		 </h4>

		 			 		
		 			 		
		 			 		
		 			 	</form>}
	</div>
	  {this.state.Name !=="" ? <DisplayName Name={this.state.Name}/> : <div></div>}
      <CardList list = {this.state.list}  />
      
    </div>
  );
  }  
}

export default App;
