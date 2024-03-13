


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';


const ProjectView = () => {
    return (
    <div className=" max-w-screen-2xl mx-auto py-10 ">
            <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className=' w-96 h-auto' src="https://i.ibb.co/486cgQR/14323.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className=' w-96 h-auto' src="https://i.ibb.co/0FmyR76/15451.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className=' w-96 h-auto' src="https://i.ibb.co/Sf40BSZ/14292.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className=' w-96 h-auto' src="https://i.ibb.co/Sf40BSZ/14292.jpg" alt="" /></SwiperSlide>
       
      </Swiper>
    </>
    </div>
    );
};

export default ProjectView;