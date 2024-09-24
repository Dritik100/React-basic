
import './App.css'

function App() {
 
  function handleClick(){
    alert("I am clicked");
  }
  function handleMouseOver(){
    alert("para ke uper mouse lekar aaye ho");
  }

  function handleInputChange(e){
    // console.log("Input me value change hui hai")
    console.log("Value till now :", e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    // i am writing my custom behaviour down

    alert("Form Submit kar du kya");
    

  }

  return (
    <div>

    <button onClick={() => alert("Button click hua hai")}>
      click me
    </button>


      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type='submit'>Submit</button>
      </form> */}





      {/* <p onMouseOver={handleMouseOver} style={{color:"red"}}> I am a para</p>
      <button onClick={handleClick}>
        click me
      </button> */}
    </div>
  )
}

export default App
