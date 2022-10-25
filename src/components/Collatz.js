import React, { Component } from 'react'

export default class Collatz extends Component {
  state = {
    numeros:[]
  }
mostraraCollatz = () =>{
  var num = parseInt(this.props.numero);
  var aux=[];
  while(num !=1){
    if(num % 2 == 0){
      num = num / 2;
    }else{
      num = num * 3 + 1;
    }
    aux.push(num);
  }
  this.setState({
    numeros:aux
  });

}
componentDidMount = () =>{
  this.mostraraCollatz();
}
componentDidUpdate = (oldProps) =>{
console.log("Actual " + this.props.numero);


console.log("Anterior " + oldProps.numero);


if (oldProps.numero != this.props.numero){
  this.mostraraCollatz();
}
}
  render() {
    return (
      <div>
        <h1>{this.props.numero}</h1>
      <ul className='list-group'>
        {
          this.state.numeros.map((numero,index)=>{
            return(<li className='list-group-item list-group-item-info' key={index}>{numero}</li>)
          })
        }
        </ul>
      </div>
    )
  }
}
