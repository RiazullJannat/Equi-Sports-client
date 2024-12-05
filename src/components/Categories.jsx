import { useEffect, useState } from "react";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])
    return (
        <div className="my-20">
            <h2 className="text-center text-3xl font-extrabold my-5">Our Products Categories</h2>
            <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6 gap-8 ">
                {
                    categories.map(data => <div key={data.id} className="flex flex-col justify-center items-center">
                        <img className="rounded-full h-40 w-40" src={data.image} alt={data.title} />
                        <h3 className="text-2xl font-bold">{data.title}</h3>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Categories;