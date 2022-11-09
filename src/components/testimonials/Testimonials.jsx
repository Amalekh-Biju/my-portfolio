import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const data=[
  {
    avatar: AVTR1,
    name: 'Ebin Siby',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, tempora cumqueaspernatur nostrum, asperiores, repellat voluptatem hic laboriosam natus animi repudiand'
  },
  {
    avatar: AVTR2,
    name: 'Ebin Siby',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, tempora cumqueaspernatur nostrum, asperiores, repellat voluptatem hic laboriosam natus animi repudiand'
  },
  {
    avatar: AVTR3,
    name: 'Ebin Siby',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, tempora cumqueaspernatur nostrum, asperiores, repellat voluptatem hic laboriosam natus animi repudiand'
  },
  {
    avatar: AVTR4,
    name: 'Ebin Siby',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, tempora cumqueaspernatur nostrum, asperiores, repellat voluptatem hic laboriosam natus animi repudiand'
  },
]
const Testimonial = () => {
  return (
    <section id="testimonials" >
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper modules={[Pagination]} className="container testimonials__container"
      // install Swiper modules
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
>
        {
          data.map(({avatar, name, review}, index) => {
            return (
            <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
               <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small> 
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial