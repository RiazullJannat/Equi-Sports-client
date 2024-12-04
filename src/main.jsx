import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Pages/Home.jsx';
import AllEquipments from './components/Pages/AllEquipments.jsx';
import Private from './Private/Private.jsx';
import AddEquipments from './components/Pages/AddEquipments.jsx';
import MyEquipments from './components/Pages/MyEquipments.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import SignIn from './components/Pages/SignIn.jsx';
import SignUp from './components/Pages/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allEquipments',
        element: <Private><AllEquipments></AllEquipments></Private>
      },
      {
        path: '/addEquipments',
        element: <Private><AddEquipments></AddEquipments></Private>
      },
      {
        path: '/myEquipments',
        element: <Private><MyEquipments></MyEquipments></Private>
      },
      {
        path:'/signIn',
        element:<SignIn></SignIn>
      },
      {
        path:'signUp',
        element:<SignUp></SignUp>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
