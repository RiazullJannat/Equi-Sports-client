import { useLoaderData } from "react-router-dom";

const Details = () => {
    const item = useLoaderData();
    console.log(item);
    return (
        <div>
            details
        </div>
    );
};

export default Details;