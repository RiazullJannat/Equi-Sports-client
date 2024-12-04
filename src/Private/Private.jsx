import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import PropTypes from 'prop-types';


const Private = ({children}) => {
    const { currentUser } = useContext(AuthContext)
    if(currentUser){
        return children
    }
    return (
        <div>
           
        </div>
    );
};
Private.propTypes = {
    children:PropTypes.node.isRequired
  };
export default Private;