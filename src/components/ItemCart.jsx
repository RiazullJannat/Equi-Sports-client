import { useEffect, useState } from "react";

const ItemCart = () => {
    const [equipments, setEquipments] = useState([]);
    useEffect(() => {
        fetch('https://sports-equipments-server.vercel.app/someEquipments')
            .then(res => res.json())
            .then(data => {
                setEquipments(data)
            })
    },[])
    // imageUrl, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus 
    return (
        equipments.map(item => <div className="card lg:card-side bg-base-100 shadow-xl border my-5" key={item._id}>
            <figure className="md:w-1/2">
                <img
                    src={item.imageUrl}
                    alt={item.itemName} />
            </figure>
            <div className="card-body flex justify-center items-center">
                <div className="">
                    <div className="my-5">
                        <h2 className="card-title">{item.itemName}</h2>
                        <p>{item.description}</p>
                    </div>
                    <div className="">
                        <h3>Price: {item.price}</h3>
                        <p>Category: {item.category}</p>
                        <p>Stock: {item.stockStatus}</p>
                        <p>Processing Time: {item.processingTime}</p>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>)
    );
};

export default ItemCart;