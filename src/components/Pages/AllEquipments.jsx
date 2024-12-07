import { Link, useLoaderData } from "react-router-dom";

const AllEquipments = () => {
    const allEquipments = useLoaderData();
    return (
        <div>
            <h3>All Equipments</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Ser.</th>
                            <th>Name</th>
                            <th>Added by</th>
                            <th>Rating/Category</th>
                            <th>Price</th>
                            <th>stockStatus</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            allEquipments.map((equipment, ind) => <tr key={equipment._id}>
                                <th>
                                    {ind+1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={equipment.imageUrl}
                                                    alt={equipment.itemName} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{equipment.itemName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td> {equipment.userName?equipment.userName:equipment.email}</td>
                                <td>
                                    {equipment.rating}*
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{equipment.categoryName}</span>
                                </td>
                                <td> ${equipment.price}</td>
                                <td>
                                    {equipment.stockStatus}
                                </td>
                                <th>
                                    <Link to={`/allEquipments/${equipment._id}`} className="btn btn-ghost btn-xs">details</Link>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEquipments;