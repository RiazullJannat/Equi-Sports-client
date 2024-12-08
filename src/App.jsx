import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";


function App() {
  return (
    <div >
      <div className="container mx-auto overflow-hidden">
        <Navbar></Navbar>
        <ToastContainer></ToastContainer>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
