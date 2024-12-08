import { useEffect, useState } from "react";

const TopDeal = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./topDeal.json')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);  // You can keep this for debugging
                setProducts(data);  // Update state with fetched data
            })
            .catch((error) => {
                console.error("Error fetching the products data:", error);
            });
    }, []);

    return (
        <section className="py-10">
            <h2 className="text-3xl font-bold text-center mb-8">TOP DEAL</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
                {products.map((product) => (
                    <div key={product.id} className="card shadow-lg border">
                        <figure>
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-48 object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title text-lg font-semibold">
                                {product.title}
                            </h3>
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-gray-500 line-through">৳ {product.oldPrice}</p>
                                <p className="text-red-500 font-bold">৳ {product.newPrice}</p>
                            </div>
                            <div className="card-actions justify-center mt-4">
                                <button className="btn btn-primary w-full">Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopDeal;
