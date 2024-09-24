

import { createContext } from "react"
import ChildA from "./components/ChildA"
import { useState } from "react";
import './App.css'


// step1:create context
const UserContext=  createContext ();


const ThemeContext= createContext();
function App() {
  // step3; pass Value
  const [user,setUser]=useState({name:"Ritik"});

  const [theme, setTheme]= useState('light')
  
  
  return (
    <>
   <UserContext.Provider value={user}>
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div id='container' style={{backgroundColor:theme==='light' ? "beige":"black"}}>
        <ChildA/>
      </div>
    </ThemeContext.Provider>
   </UserContext.Provider>

    {/* // step2: wrap all the child inside a provider */}

{/* 
    <UserContext.Provider value={user}>
      <ChildA />
    </UserContext.Provider> */}
    </>
  )
}

export default App
export {UserContext}
export {ThemeContext}
