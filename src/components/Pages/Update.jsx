import { useLocation, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const location = useLocation();
    const { id } = useParams();
    const { userName, email, imageUrl, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus } = location.state;
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const imageUrl = form.get('imageUrl');
        const itemName = form.get('itemName');
        const categoryName = form.get('categoryName')
        const description = form.get('description')
        const price = form.get('price')
        const rating = form.get('rating')
        const customization = form.get('customization')
        const processingTime = form.get('processingTime')
        const stockStatus = form.get('stockStatus')
        const updatedData = { userName, imageUrl, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus }
        Swal.fire({
            title: "Are you sure?",
            text: "You want to update this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`https://sports-equipments-server.vercel.app/MyEquipments/update/${id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedData)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            Swal.fire({
                                title:"Update Successful",
                                text:"Your items updated.",
                                icon:'success'
                            })d
                        }
                    })
            }
        })



    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card w-full max-w-4xl shadow-xl p-6">
                <h2 className=" mb-4 text-5xl font-extrabold">Update item</h2>
                <h4 className="text-4xl">Item was added by: {userName ? userName : ''} ({email})</h4>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Image URL */}
                        <div className="form-control md:col-span-2">
                            <label className="label font-semibold">
                                <span>Update Image URL</span>
                            </label>
                            <input
                                type="url"
                                name="imageUrl"
                                className="input input-bordered w-full"
                                placeholder="Enter image URL"
                                defaultValue={imageUrl}
                            />
                        </div>

                        {/* Item Name */}
                        <div className="form-control">
                            <label className="label font-semibold">
                                <span>Update Item Name</span>
                            </label>
                            <input
                                type="text"
                                name="itemName"
                                className="input input-bordered w-full"
                                placeholder="Enter item name"
                                defaultValue={itemName}
                            />
                        </div>

                        {/* Category Name */}
                        <div className="form-control">
                            <label className="label font-semibold">
                                <span>Update Category Name</span>
                            </label>
                            <input
                                type="text"
                                name="categoryName"
                                className="input input-bordered w-full"
                                placeholder="Enter category name"
                                defaultValue={categoryName}
                            />
                        </div>

                        {/* Description */}
                        <div className="form-control md:col-span-2">
                            <label className="label font-semibold">
                                <span>Update Description</span>
                            </label>
                            <textarea
                                name="description"
                                className="textarea textarea-bordered w-full"
                                placeholder="Enter description"
                                defaultValue={description}
                            />
                        </div>

                        {/* Price */}
                        <div className="form-control">
                            <label className="label font-semibold">
                                <span>Update Price</span>
                            </label>
                            <input
                                type="number"
                                name="price"
                                className="input input-bordered w-full"
                                placeholder="Enter price"
                                defaultValue={price}
                            />
                        </div>

                        {/* Rating */}
                        <div className="form-control">
                            <label className="label font-semibold">
                                <span>Update Rating</span>
                            </label>
                            <input
                                type="number"
                                name="rating"
                                className="input input-bordered w-full"
                                placeholder="Enter rating (1-5)"
                                max={5}
                                min={1}
                                step={0.1}
                                defaultValue={rating}
                            />
                        </div>

                        {/* Customization */}
                        <div className="form-control">
                            <label className="label font-semibold">
                                <span>Update Customization</span>
                            </label>
                            <input
                                type="text"
                                name="customization"
                                className="input input-bordered w-full"
                                placeholder="Enter customization options"
                                defaultValue={customization}
                            />
                        </div>

                        {/* Processing Time */}
                        <div className="form-control">
                            <label className="label font-semibold">
                                <span>Update Processing Time</span>
                            </label>
                            <input
                                type="text"
                                name="processingTime"
                                className="input input-bordered w-full"
                                placeholder="Enter delivery time"
                                defaultValue={processingTime}
                            />
                        </div>

                        {/* Stock Status */}
                        <div className="form-control md:col-span-2">
                            <label className="label font-semibold">
                                <span>Update Stock Status</span>
                            </label>
                            <input
                                type="number"
                                name="stockStatus"
                                className="input input-bordered w-full"
                                placeholder="Enter available product quantity"
                                defaultValue={stockStatus}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary w-full">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;