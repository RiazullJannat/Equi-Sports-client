import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyEquipments = () => {
    const {user} = useContext(AuthContext);
    useEffect(()=>{
        fetch('http://localhost:4000/MyEquipments', {
            method:'GET',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(user.email)
        })
            .then(res=>res.json())
            .then(data=>console.log(data))
    },[user.email])
    return (
        <div>
            hello from my
        </div>
    );
};

export default MyEquipments;