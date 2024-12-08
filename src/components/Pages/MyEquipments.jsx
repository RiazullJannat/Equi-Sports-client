import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../Loading";

const MyEquipments = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState();
    useEffect(() => {
        setLoading(true)
        fetch('https://sports-equipments-server.vercel.app/MyEquipments', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `${user.email}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setData(data)
            })
    }, [setLoading, user.email])
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(result => {
            if (result.isConfirmed) {
                fetch('https://sports-equipments-server.vercel.app/MyEquipments/delete', {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json',
                        'id': id
                    }
                })
                    .then(res => res.json())
                    .then(response => {
                        if (response.deletedCount) {
                            const remaining = data.filter(item => item._id !== id);
                            setData(remaining)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        })
    }
    if(loading){
        return <Loading></Loading>
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