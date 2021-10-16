import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item - {props.item} </h2>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  )

}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake ? state.cake.numberOfCake : state.iceCream.numberOfIceCreams;

  return {
    item: itemState,
  }

}

const mapDispatchToProps = (state, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())
  return {
    buyItem: dispatchFunction,
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);