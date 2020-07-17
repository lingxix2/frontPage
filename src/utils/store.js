import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import { createSlice } from '@reduxjs/toolkit'


const Counter = ({value, onIncrement, onDecrement}) => (
  <div>
    <span>{value}</span>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

const CounterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state+=1,
    decrement: state => state-=1,
    incrementByAmount: (state, action) => state += action.payload,
  }
})

const newState = CounterSlice.reducer(0, CounterSlice.actions.increment())
console.log(newState)

const reducer = (state = 0, action) => {
  switch (action.type) {
    case ('INCREMENT'): 
      return state+1;
    case ('DECREMENT'): 
      return state-1;
    default: return state;
  }
}

const store = createStore(reducer);

const render = () => {
  // const val = store.getState();
  ReactDOM.render(
    <Counter 
      value={store.getState()}
      onIncrement={() => store.dispatch({type: 'INCREMENT'})}
      onDecrement={() => store.dispatch({type: 'DECREMENT'})}
    />,
    document.getElementById('root')
  );
};

store.subscribe(render)
render()