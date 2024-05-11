import './style.css'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
const NewsCarousel = () => {

  const Data = [
    {
      id: 1,
      description: "Nice app to be notified about your favorite series next episode and to know",
      name: 'Afrooz R.',
    },
    {
      id: 2,
      description: "Nice app to be notified about your favorite series next episode and to know.",
      name: 'Jade K.',
    },
    {
      id: 3,
      description: "Easy to navigate with a nice and simple interface.",
      name: 'Taru A.',
    },
    {
      id: 4,
      description: "This is by far the best movie informer ever! Everything is up to date and",

      name: ' Phillip P.',
    },
    {
      id: 5,
      description: "Great for any movie lover. Seamless Trakt integration and easy to use user interface",
      name: '  Danial D.',
    },

  ]

  return (
    <>
      <div className="newsContainer">
        <p>Our Website has received toching Reviews</p>
        <Swiper

          cssMode={true}
          navigation={true}

          loop={true}


          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,

          }}
          mousewheel={true}
          keyboard={true}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >

          {Data.map((item) => {
            const { id, description, name } = item;
            return (
              <SwiperSlide key={id}><div>{description}</div>
                <div className='writer'>
                  {name}
                </div>
              </SwiperSlide>
            )
          })
          }
        </Swiper>
      </div>
    </>
  )
};
export default NewsCarousel;