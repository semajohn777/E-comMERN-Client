import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import "./swipe.css"

import {data} from "../datas/Data"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';


const Swipe = () => {

     const navigate = useNavigate()
    const navigatorHandler = () => {
        navigate(`/details`)
    }
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="sect-one_div">
          {data.map((item) => (
              <SwiperSlide key={item.id}>
                  <article className='section-one'>
                      <img src={item.img} alt="" />
                      <div>
                          <h1>{item.title}</h1>
                          <p>{item.subtitle}</p>
                          <div>
                              <button onClick={navigatorHandler}>Shop Now</button>
                          </div>
                      </div>
                  </article>
              </SwiperSlide>
              
          ))}
      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      ...
    </Swiper>
  );
};

export default Swipe;

