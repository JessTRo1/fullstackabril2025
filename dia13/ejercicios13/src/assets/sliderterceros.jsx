import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function SimpleSwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]} 
      spaceBetween={30}
      slidesPerView={1}
      navigation  
      pagination={{ clickable: true }}  
      autoplay={{ delay: 3000 }}  
      loop={true}  
      onSlideChange={() => console.log('slide change')}
      style={{ 
        width: '50%', 
        height: '500px',
        borderRadius: '10px',
        margin: '3rem',
      }}
    >
      <SwiperSlide>
        <img 
          src="https://picsum.photos/id/250/800/400" 
          alt="Slide 1" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img 
          src="https://picsum.photos/id/220/800/400"  
          alt="Slide 2" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img 
          src="https://picsum.photos/id/221/800/400" 
          alt="Slide 3" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default SimpleSwiper;