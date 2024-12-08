import { useLoaderData } from "react-router-dom";
import Banner from "../Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Categories from "../Categories";
import ItemCart from "../ItemCart";
import Animation from "../../assets/Animation - 1733622367050.json"
import Lottie from "lottie-react";
import { Bounce, Fade } from "react-awesome-reveal";
import TopDeal from "../TopDeal";

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <div className="w-80 h-40 flex mx-auto">
                <Lottie animationData={Animation} loop={true} />
            </div>
            <div className="my-10">
                <h1 className="text-5xl font-extrabold text-center">Sports Equipments</h1>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        data.map(item => <SwiperSlide key={item.id}><Banner item={item}></Banner></SwiperSlide>)
                    }
                </Swiper>
            </div>
            <div className="">
                <Fade duration={2000}>
                    <Categories></Categories>
                </Fade>
            </div>
            <div>
                <Bounce duration={2000}>
                    <ItemCart></ItemCart>
                </Bounce>
            </div>
            <TopDeal></TopDeal>
        </div >
    );
};
export default Home;