import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const ExploreMenu = ({category,setCategory}) => {
 
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nesciunt dolorem modi maiores illo aliquam non 
        ipsum minima tenetur quis, odit provident dolorum.
      </p>

      <div className="explore-menu-list">
        <Swiper
          modules={[Navigation]}
          spaceBetween={5}
          slidesPerView={1}
          navigation
          breakpoints={{
            
            430: { slidesPerView: 2},
            650: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {menu_list.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() =>
                  setCategory(prev =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
                className="explore-menu-list-item"
              >
                <img
                  className={category === item.menu_name ? "active" : ""}
                  src={item.menu_image}
                  alt={item.menu_name}
                />
                <p>{item.menu_name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <hr />
    </div>
  );

}

export default ExploreMenu
