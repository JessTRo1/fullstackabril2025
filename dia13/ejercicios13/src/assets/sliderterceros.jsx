import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

function SimpleSwiper() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      padding: '3rem 0'
    }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} 
        spaceBetween={30}
        slidesPerView={1}
        navigation  
        pagination={{ clickable: true }}  
        autoplay={{ delay: 3000 }}  
        loop={true}  
        style={{ 
          width: '1000px', 
          height: '500px',
          borderRadius: '10px',
        }}
      >
        <SwiperSlide>
          <img 
            src="https://picsum.photos/id/250/1600/800" 
            alt="Slide 1" 
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://picsum.photos/id/220/1600/800"  
            alt="Slide 2" 
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://picsum.photos/id/221/1600/800" 
            alt="Slide 3" 
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SimpleSwiper;