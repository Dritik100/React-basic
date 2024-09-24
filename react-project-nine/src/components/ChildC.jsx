import React from 'react'

import { useContext } from 'react'
import { ThemeContext, UserContext } from '../App'

const ChildC = () => {
  // step4: consumer ke andar jaake consume karlo
  const user= useContext(UserContext)
  const  {theme, setTheme} = useContext(ThemeContext);
  function toggleTheme (){
    if(theme === 'light'){
      setTheme ('dark')
    }
    else{
      setTheme ('light')
    }
  }
  return (
    <div>
      <button onClick={toggleTheme}>
        change theme
      </button>
      data:{user.name}
    </div>
  )
}

export default ChildC
