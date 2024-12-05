
const AddEquipments = () => {
    function handleSubmit (event) {
        event.preventDefault();
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