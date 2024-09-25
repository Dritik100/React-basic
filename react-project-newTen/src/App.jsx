import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ParamComp from "./components/ParamComp";
import Courses from "./components/Courses";
import Test from "./components/Test";
import Reports from "./components/Reports";
import NotFound from "./components/NotFound";

// My name is Aman Kumar Dubey
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar/>
      <Home/>
    </div>  
  },
  {
    path: "/about",
    element: <div>
      <Navbar/>
      <About />
      </div>
  },
  {
    path: "/dashboard",
    element: <div>
      <Navbar/>
      <Dashboard />
    </div>,
    children:[
      {
        path:"courses",
        element: <Courses/>
      },
      {
        path:"test",
        element:<Test/>
      },
      {
        path:"reports",
        element:<Reports/>
      }
    ]
  },
  {
    path:"/student/:id",
    element:<div>
      <Navbar/>
      <ParamComp />
  </div>
  },

  {
    path:'*',
    element:<NotFound/>
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
    
  )
 
}

export default App;
