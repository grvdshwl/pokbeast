import React,{Component} from "react";
import "./Card.css"



class Card extends Component{
	constructor(){
		super()
		this.state ={
			pokemon : "",
			types :"",
			move1 :"",
			move2:"",
			height:"",
			weight:"",
			xp: ""
		}
	}

	componentDidMount=()=>{
		fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.id}`).then((response)=> response.json()).
		then((user)=> this.setState({pokemon: user.name,
			types: user.types[0].type.name,
			move1: user.moves[0].move.name,
			move2 : user.moves[1].move.name,
			height:user.height,
			weight:user.weight,
			xp : user.base_experience
			}));
	

	}

	
	
	render(){
		
		
		return(

		
			
			<div id = {this.state.types} className = " maincontainer  dib br4 pa3 ma2  ba bw1 shadow-5 " >
				
					<div className = "cardfront">
					
						<img className = "poke-img" src ={`https://pokeres.bastionbot.org/images/pokemon/${this.props.id}.png`} alt=""/>
							<h3 className="name"> {this.state.pokemon}</h3>
							<h3 className="name">  {this.state.types}</h3>
					</div>
					<div className =" name cardback poke-text">
						<h3 className="name"> name : {this.state.pokemon}</h3>
						<h3 className="name"> type : {this.state.types}</h3>
						<h3> XP : {this.state.xp}</h3>
						<h3> weight: {this.state.weight} </h3>
						<h3>height: {this.state.height} </h3>
						<h3> Attack 1: {this.state.move1}</h3>
							
						<h3> Attack 2: {this.state.move2}</h3>
					</div>
						
				

			</div>

	)

}


}


export default Card;