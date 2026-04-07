
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Frame from './Frame'
import NavBar from './NavBar'
import SideBar from './SideBar'
import RootLayOut from './RootLayOut';
import Home from './Home';
import Window from './Window';
import About from './About';


function App() {
  const router = createBrowserRouter([
    {
      index: true,
      path: "/",
      element: <RootLayOut></RootLayOut>
      
    },
    {
      path: "/sidebar",
      element: <SideBar></SideBar>
    },
    {
      path: "/frame",
      element: <Frame></Frame>,
     
    }
    ,{
      path:"/frame/window",
      element:<Window></Window>,
      children:[
        {
          index:true,
          element:<Home></Home>
        },
        {
          path:"about",
          element:<About></About>
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
