import PropTypes from "prop-types";

const Banner = ({item}) => {

    return (
        <div            
            className="card bg-base-200 shadow-xl transform hover:scale-105 transition-transform my-10"
        >
            <div className="md:flex gap-5 ">
                <figure className="md:w-1/2">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full object-cover"
                    />
                </figure>
                <div className="flex flex-col justify-center items-center md:w-2/5">
                    <h3 className="card-title text-xl font-bold">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    <div className="card-actions mt-4">
                        <a
                            className="btn btn-primary w-full"
                        >
                            {item.buttonText}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
Banner.propTypes = {
    item: PropTypes.object.isRequired,
  };
export default Banner;