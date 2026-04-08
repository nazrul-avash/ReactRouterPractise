
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Frame from './Frame'
import NavBar from './NavBar'
import SideBar from './SideBar'
import RootLayOut from './RootLayOut';
import Home from './Home';
import Window from './Window';
import About from './About';
import Contact from './Contact';


function App() {
  const router = createBrowserRouter([
    {
      index: true,
      path: "/",
      element: <RootLayOut></RootLayOut>
      
    },
   
    {
      path: "/frame",
      element: <RootLayOut></RootLayOut>,
      children:[
       {
        path:"window",
        element:null,
        children:[
        {
          index:true,
          element:<Home></Home>
        },
        {
          path:"about",
          element:<About></About>
        },
         {
          path:"contact",
          element:<Contact></Contact>
        },
         {
          path:"info",
          element:<Info></Info>
        },
         {
          path:"address",
          element:<Address></Address>
        }
      ]
       }
      ]
     
    }
   
    
  ]);

  return (
    <>
      <RouterProvider router={router} />
   </>
  )
}

export default App
