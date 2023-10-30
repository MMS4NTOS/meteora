import './Banner.css'
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
    return (
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="../../../assets/Desktop/Banner1.png"
            />
            <source
              media="(min-width: 375px)"
              srcSet="../../../assets/Tablet/banner1.png"
            />
            <img className="banner" src="../../../assets/Mobile/banner1.png" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="../../../assets/Desktop/banner2.png"
            />
            <source
              media="(min-width: 375px)"
              srcSet="../../../assets/Tablet/banner2.png"
            />
            <img className="banner" src="../../../assets/Mobile/banner2.png" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="../../../assets/Desktop/banner3.png"
            />
            <source
              media="(min-width: 375px)"
              srcSet="../../../assets/Tablet/banner3.png"
            />
            <img className="banner" src="../../../assets/Mobile/banner3.png" />
          </picture>
        </SwiperSlide>
      </Swiper>
    );
};
   
export default Banner;