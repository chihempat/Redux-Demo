import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { buyCake } from '../redux/index'

const HooksCakeContainer = () => {
  const numberOfCake = useSelector(state => state?.cake.numberOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes -{numberOfCake} </h2>
      <button onClick={()=>{dispatch(buyCake())}}>Click IceCream</button>
    </div>
  )
}

export default HooksCakeContainer;