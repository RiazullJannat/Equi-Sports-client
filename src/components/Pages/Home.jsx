import { useLoaderData } from "react-router-dom";
import Banner from "../Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Categories from "../Categories";
const Home = () => {
    const data = useLoaderData();
    return (
        <div>
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
                <Categories></Categories>
            </div>
        </div >
    );
};

export default Home;