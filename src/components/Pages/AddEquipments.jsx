import { useContext } from "react";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'
import { AuthContext } from "../../AuthProvider/AuthProvider";
const AddEquipments = () => {
    const {user} = useContext(AuthContext);
    function handleSubmit(event) {
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
        const email = user.email
        const userName = user.displayName 
        const product = {userName, email, imageUrl, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus }
        fetch('https://sports-equipments-server.vercel.app/addEquipments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    event.target.reset();
                    Swal.fire({
                        title: "Successfully added to the equipment list.",
                        showClass: {
                            popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                        },
                        hideClass: {
                            popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                        }
                    });
                }
            })
    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card w-full max-w-4xl  shadow-xl p-6">
                <h2 className="text-2xl font-bold mb-4">Add Item</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Image URL */}
                        <div className="form-control md:col-span-2">
                            <label className="label font-semibold">
                                <span>Image URL</span>
                            </label>
                            <input
                                type="url"
                                name="imageUrl"
                                className="input input-bordered w-full "
                                placeholder="Enter image URL"

                            />
                        </div>

                        {/* Item Name */}
                        <div className="form-control">
                            <label className="label font-semibold">
                                <span>Item Name</span>
                            </label>
                            <input
                                type="text"
                                name="itemName"
                                className="input input-bordered w-full"
                                placeholder="Enter item name"

                            />
                        </div>

                        {/* Category Name */}
                        <div className="form-control">
                            <label className="label font-semibold">
                                <span>Category Name</span>
                            </label>
                            <input
                                type="text"
                                name="categoryName"
                                className="input input-bordered w-full"
                                placeholder="Enter category name"

                            />
                        </div>

                        {/* Description */}
                        <div className="form-control md:col-span-2">
                            <label className="label font-semibold">
                                <span>Description</span>
                            </label>
                            <textarea
                                name="description"
                                className="textarea textarea-bordered w-full"
                                placeholder="Enter description"

                            />
                        </div>

                        {/* Price */}
                        <div className="form-control">
                            <label className="label font-semibold">
                                <span>Price</span>
                            </label>
                            <input
                                type="number"
                                name="price"
                                className="input input-bordered w-full"
                                placeholder="Enter price"

                            />
                        </div>

                        {/* Rating */}
                        <div className="form-control">
                            <label className="label font-semibold">
                                <span>Rating</span>
                            </label>
                            <input
                                type="number"
                                name="rating"
                                className="input input-bordered w-full"
                                placeholder="Enter rating (1-5)"
                                max={5}
                                min={1}
                                step={0.1}
                            />
                        </div>

                        {/* Customization */}
                        <div className="form-control">
                            <label className="label font-semibold">
                                <span>Customization</span>
                            </label>
                            <input
                                type="text"
                                name="customization"
                                className="input input-bordered w-full"
                                placeholder="Enter customization options"
                            />
                        </div>

                        {/* Processing Time */}
                        <div className="form-control">
                            <label className="label font-semibold">
                                <span>Processing Time</span>
                            </label>
                            <input
                                type="text"
                                name="processingTime"
                                className="input input-bordered w-full"
                                placeholder="Enter delivery time"
                            />
                        </div>

                        {/* Stock Status */}
                        <div className="form-control md:col-span-2">
                            <label className="label font-semibold">
                                <span>Stock Status</span>
                            </label>
                            <input
                                type="number"
                                name="stockStatus"
                                className="input input-bordered w-full"
                                placeholder="Enter available product quantity"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary w-full">
                            Add Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEquipments;