import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';

function MenuDeslizante() {
  const menuItems = [
    { id: 1, name: 'Inicio' },
    { id: 2, name: 'Productos' },
    { id: 3, name: 'Servicios' },
    { id: 4, name: 'Portafolio' },
    { id: 5, name: 'Clientes' },
    { id: 6, name: 'Contacto' },
    { id: 7, name: 'Blog' },
    { id: 8, name: 'Nosotros' }
  ];

  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={15}
      freeMode={true}
      mousewheel={true}
      style={{
        margin: '7rem 0',
        padding: '10px 5px',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #eee'
      }}
    >
      {menuItems.map((item) => (
        <SwiperSlide 
          key={item.id}
          style={{ 
            width: 'auto', 
            padding: '8px 20px',
            borderRadius: '20px',
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            cursor: 'pointer',
            userSelect: 'none'
          }}
          onClick={() => console.log(`Clic en ${item.name}`)}
        >
          {item.name}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MenuDeslizante;