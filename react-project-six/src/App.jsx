import { useState } from 'react'
import './App.css'
import LoggedoutBtn from './components/LoggedoutBtn';
import LoggedinBtn from './components/LoggedinBtn';




function App() {
  const [isLoggedIn,setLoggedIn]=useState(true);

  if(!isLoggedIn){
    return (
      <LoggedinBtn />
    )
  }



  return (
    <div>
      <h1>
        Welcome to you Web Dev Course
      </h1>
      <div>
        {isLoggedIn && <LoggedoutBtn/>}
      </div>
    </div>
  )

  // return (
  //   <div>
  //     {isLoggedIn ? <LoggedoutBtn /> : <LoggedinBtn />}
  //   </div>
  // )


  // if(isLoggedIn){
  //   return (
  //     <LoggedoutBtn/>

  //   )
  // }
  // else{
  //   return (
  //     <LoggedinBtn />
  //   )
  // }
 

}

export default App
