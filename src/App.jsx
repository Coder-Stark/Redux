import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();

  function handleIncrement(){
    dispatch(increment());
  }
  function handleDecrement(){
    dispatch(decrement());
  }
  function handleReset(){
    dispatch(reset());
  }
  function handleIncrByAmt(){
    dispatch(incrementByAmount(amount));
  }
  return (
    <div className='container'>
      <button onClick={handleIncrement}>+</button>
      <p>Count : {count} </p>
      <button onClick={handleDecrement}>-</button>
      <br/><br/>
      <button onClick={handleReset}>Reset</button>
      <br/><br/>
      <input 
        type='number'
        value={amount}
        placeholder='Enter Amount'
        onChange={(e)=> setAmount(e.target.value)}
      />
      <button onClick={handleIncrByAmt}>Increment By Amount</button>

    </div>
  )
}

export default App