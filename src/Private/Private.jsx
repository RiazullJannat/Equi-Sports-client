import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import PropTypes from 'prop-types';
import Loading from "../components/Loading";
import { Navigate, useLocation } from "react-router-dom";


const Private = ({children}) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext)
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    return(
        <div>
            apatoto error khau 
        </div>
    )
};
Private.propTypes = {
    children:PropTypes.node.isRequired
  };
export default Private;