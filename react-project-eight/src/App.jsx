
import { useEffect, useState } from 'react'
import './App.css'
import LoggerComponents from './components/LoggerComponents'
import TimerComponents from './components/TimerComponents'
import DataFetcher from './components/DataFetcher'
import ResizeComponents from './components/ResizeComponents'
import MultiEffectComponents from './components/MultiEffectComponents'

function App() {
  // const [count,setCount]=useState(0);
  // const [total, setTotal]=useState(1);

  //first--> side Effect function
  //seconf--> clean-up function kahte hai
  //third--> comma sepreated dependecy list hoti hai

 //varitation 1: runs on every  render
//  useEffect(() => {
//   alert("I Will run on each render")
//  })


//variation 2: that runs on only first render

// useEffect(() => {
//   alert("I Will run on only first render")
// }, [])

//variation 3: count upadate hone ke bad chalta hai par  render hone se pahle  chalta hai..


// useEffect(() => {
//   alert("I will run on every time when count is updated ")
  
// }, [count])


//variation 4: Multiple dependencies

// useEffect(() => {
//   alert("I will run every time when count total is upadate");
  
// }, [count, total])


//variation 5: iss bar let's add a cleaner function

// useEffect(() => {
//   alert("Count is updates");

//   return () => {
//     alert("Count is unmounted from UI");
//   }
// }, [count])



 
  
//  function handleClick(){
//   setCount(count+1);
//   setTotal(total+1);
//  }

//  function handleClickTotal(){
//   setTotal(total+1);
//  }

 
  return (
    <div>

      {/* <LoggerComponents /> */}
      {/* <TimerComponents/> */}
      {/* <DataFetcher/> */}
      {/* <ResizeComponents/> */}
      {/* <MultiEffectComponents/> */}


    {/* <button onClick={handleClick}>
      update count
    </button>
    <br />
    count is:{count}

    <br />

    <button onClick={handleClickTotal}>
      update total
    </button>
    <br />
    total is:{total} */}
    </div>
  )
}

export default App
