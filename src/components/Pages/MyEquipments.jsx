import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const MyEquipments = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState();
    useEffect(() => {
        fetch('http://localhost:4000/MyEquipments', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `${user.email}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [user.email])
    const handleDelete = (id) => {
        fetch('http://localhost:4000/MyEquipments/delete',{
            method:'DELETE',
            headers: {
                'content-type': 'application/json',
                'id': id
            }
        })
            .then(res => res.json())
            .then(response => {
                if(response.deletedCount){
                    const remaining = data.filter(item => item._id !==id);
                    setData(remaining)
                    alert('deleted success.')
                    
                }
            })
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                data?.map(item =>
                    <div className="card bg-base-100 shadow-xl" key={item._id}>
                        <figure>
                            <img
                                src={item.imageUrl}
                                alt={item.itemName} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {item.itemName}
                                <div className="badge badge-secondary">{item.rating}</div>
                            </h2>
                            <p>{item.description}</p>
                            <div className="flex justify-between">
                                <div className="card-actions justify-start">
                                    <div className="badge badge-outline">price: {item.price}$</div>
                                    <div className="badge badge-outline">{item.processingTime}</div>
                                </div>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline btn-ghost text-red-500 text-3xl" onClick={() => handleDelete(item._id)}><MdDelete /></div>
                                    <Link className="badge badge-outline btn-ghost text-3xl" state={item} to={`/myEquipments/update/${item._id}`}><MdEdit /></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default MyEquipments;