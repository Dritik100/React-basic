import UserCard from "./components/UserCard"
import vk from "./assets/vk.jpeg"
import sachin from "./assets/sachin.jpeg"
import rohit from "./assets/rohit.jpeg"
import "./App.css"


function App() {
  

  return (
    <div className="container">
      <UserCard name="Mangal Panday" desc="Virat kohli also known as the name of King Kohli." image={vk} style={{"border-radius":"10px"}}/>
      <UserCard name="Rohit Sharma" desc="Rohit sharma also know as another name Hit-Man." image={rohit} style={{"border-radius":"10px"}}/>
      <UserCard name="Sachin Tendulkar" desc="sachin tendulkar known as the name of master balaster." image={sachin} style={{"border-radius":"10px"}}/>
      
      
      
      <div>
        
      </div>
    </div>
  )
}

export default App
