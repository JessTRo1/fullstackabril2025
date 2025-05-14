import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Scrollbar, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

function CarouselSwiper() {
  return (    
    <Swiper
      modules={[Navigation, Pagination, Autoplay, Scrollbar, EffectCoverflow]}
      spaceBetween={30}
      centeredSlides={true}
      slidesPerView={'auto'}
      effect={'coverflow'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: '3'
        }
      }}      
      style={{
        padding: '30px 0',
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
        '--swiper-scrollbar-drag-bg-color': '#fff',
        width: '75vw',
        margin: '0 auto'
      }}
    >
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <SwiperSlide key={item}>        
         <div style={{
            width: '20vw',
            height: '25vw',
            background: `url(https://picsum.photos/id/${item + 236}/400/400)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '15px',
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CarouselSwiper;