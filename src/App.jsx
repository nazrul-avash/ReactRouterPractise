
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Frame from './Frame'
import NavBar from './NavBar'
import SideBar from './SideBar'
import RootLayOut from './RootLayOut';


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
      element: <Frame></Frame>
    }
    
  ]);

  return (
    <>
      <RouterProvider router={router} />
   </>
  )
}

export default App
