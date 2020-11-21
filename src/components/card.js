import React from 'react';
import './styles.css'
import PokeInfo from './searchStats';
import axios from 'axios';

  export default class Card extends React.Component {
    constructor(){
      super()
      this.state = {
        pokeInfo:[]
      }
    }
  
          
    render(){
    return (
        // <div className="card-container">
        //     <h2>{props.name}</h2>
        //     <img src={props.img} alt={props.name} 
        // </div> 
        <div class="row-card">
            <div class="card brown darken-2 row-card">
              <div class="column1 textStat">
              <div class="card-content white-text">
              <div class="textName">#{this.props.index+1}</div>
              <div class="textName">{this.props.name}</div>
              </div> 
              </div>
              <div class="column2">
              <img className="imgPoke" src={this.props.img} alt={this.props.name}/>
              </div>
              <div class="column3 black-text textStat">
              <PokeInfo pokeInfo={this.props.pokeInfo} pokemones={this.props.pokemones} pokeType={this.props.pokeType}/>
              </div>
          </div>
          
        </div>
      
      
    )
    }
}
