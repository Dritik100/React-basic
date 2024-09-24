import React, { useEffect, useState } from 'react'

function MultiEffectComponents  ()  {
  const [count, setCount]= useState(0);
  const [seconds , setSeconds]= useState(0);

  useEffect(()=>{
    console.log('count changed:', count);
  }, [count]);
  // side-effect logic ewwill run only when count is changed

  useEffect(()=>{
    const intervalId= setInterval(()=>{
      console.log("SetInterval Started")
      setSeconds(prevSeconds=> prevSeconds +1);
    }, 1000);
    return ()=> {
      console.log("Time stop")
      clearInterval(intervalId);
    }
  }, []);
  // it will run only on first render
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=> setCount(count +1)}>Increment Count</button>
      <h2>Seconds: {seconds}</h2>
    </div>
  )
}

export default MultiEffectComponents
