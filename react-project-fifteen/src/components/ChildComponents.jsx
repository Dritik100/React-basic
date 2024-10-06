import React from 'react'

const ChildComponents = React.memo(
  (props) => {

    console.log("Child Components go re-render again");
    
    return (
      <div>
        <button onClick={props.handleClick}>
          {props.buttonName}
  
        </button>
      </div>
    )
  }
)

export default ChildComponents

//React.memo --> wrap kardenge components ko re-render tabhi hoga jab props change nahi re-rendr nhi hoga.


// if u r sending a function, then react.memo want to be able to save you from re-rendering