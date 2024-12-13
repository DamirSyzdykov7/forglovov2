import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import axios from "axios";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperRest() {
  const [restoraunts , SetRestoraunts] = useState([])

  useEffect(() => {
          const restCall = async() => {
          const query = await axios.get('http://glovo/api/main')
          const reponse =  query.data.isRestoraunts
          SetRestoraunts(reponse)

        }
      restCall()
  },[])
  console.log('Рестики' , restoraunts)

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {restoraunts && restoraunts.length > 0 ? restoraunts.map((restoraunt) => (
              <SwiperSlide key={restoraunt.id}>
                  <div className="w-[300px] h-[300px] mt-[48px] shadow-lg rounded mb-[72px]">
                    <p className="w-full h-[200px]">
                      <img
                        src={`/src/shared/assets/photo/${restoraunt.фото}`}
                        className="h-full w-full"
                        alt={restoraunt.Название}
                      />
                    </p>
                    <div className="text-center mt-[38px]">{restoraunt.Название}</div>
                  </div>
              </SwiperSlide>
      )) : ''}

    </Swiper>
  );
};

export default SwiperRest