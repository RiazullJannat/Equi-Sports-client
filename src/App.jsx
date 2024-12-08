import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import './index.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container mx-auto overflow-hidden relative">
      <Navbar />
      <ToastContainer />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
