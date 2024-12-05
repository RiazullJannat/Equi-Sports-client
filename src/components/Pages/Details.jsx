import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
    const item = useLoaderData();
    return (
        <div>
            <div className="h-screen md:h-[90vh] flex flex-col md:flex-row  justify-center items-center">
                <div className="card glass md:flex-row ">
                    <figure className="md:w-1/2">
                        <img src={item.imageUrl} className="w-full" />
                    </figure>
                    <div className="card-body md:w-1/2">
                        <h2 className="card-title md:text-5xl">{item.itemName}</h2>
                        <p>{item.description}</p>
                        <div className="card-actions justify-end">
                            <Link to="/"><button className="btn glass btn-ghost">Back to Home</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;