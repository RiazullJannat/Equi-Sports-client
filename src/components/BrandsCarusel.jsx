import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const brands = [
  { id: 1, src: "https://i.ibb.co.com/Qj2nv1J/Lining.png", alt: "Li-Ning" },
  { id: 2, src: "https://i.ibb.co.com/Qj2nv1J/Lining.png", alt: "Landice" },
  { id: 3, src: "https://i.ibb.co.com/Qj2nv1J/Lining.png", alt: "HouseFit" },
  { id: 4, src: "https://i.ibb.co.com/Qj2nv1J/Lining.png", alt: "Redon" },
  { id: 5, src: "https://i.ibb.co.com/Qj2nv1J/Lining.png", alt: "Super-K" },
  { id: 5, src: "https://i.ibb.co.com/Qj2nv1J/Lining.png", alt: "Super-K" },
  { id: 5, src: "https://i.ibb.co.com/Qj2nv1J/Lining.png", alt: "Super-K" },
  { id: 5, src: "https://i.ibb.co.com/Qj2nv1J/Lining.png", alt: "Super-K" },
];

const BrandsCarousel = () => {
  return (
    <div className="brands-carousel my-8">
      <h2 className="text-center text-2xl font-bold mb-6">Top Brands</h2>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={5}
        autoplay={{ delay: 1000 }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 3 },
          480: { slidesPerView: 2 },
        }}
        className="mySwiper"
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <div className="brand-item">
              <img
                src={brand.src}
                alt={brand.alt}
                className="mx-auto"
                style={{ width: "80%", height: "auto" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandsCarousel;
