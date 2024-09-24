import React, { useEffect, useState } from 'react'

function ResizeComponents  () {
  const [windowWidth, setWindowWidth]=useState(window.innerWidth);

  useEffect (()=>{
    const handleResize = ()=> setWindowWidth(window.innerWidth);
    console.log("Event Listener Added");
    window.addEventListener('resize', handleResize);


    return ()=> {
      console.log("Event Listener Removed");
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // it will run on 1st render


  
  return (
    <div>
      <h1>Window Width: {windowWidth}px</h1>
    </div>
  );
}

export default ResizeComponents
