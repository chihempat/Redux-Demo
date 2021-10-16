import React,{useState} from 'react';
import {buyCake} from '../redux'
import {connect} from 'react-redux';

let NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of Cakes - {props.numberOfCake}</h2>
      <input type="number" value={number} onChange={e=>setNumber(e.target.value)}></input>
      <button onClick={() => { props.buyCake(number)}}>Buy Cake</button>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    numberOfCake: state.cake.numberOfCake,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer);