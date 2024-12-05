import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="container mx-auto overflow-hidden">
      <Navbar></Navbar>
      <ToastContainer></ToastContainer>
      <Outlet></Outlet>
    </div>
  )
}

export default App
