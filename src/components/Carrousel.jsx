import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

export default function Carrousel() {
  const [activities, setActivities] = useState ();

  useEffect (() => {
    fetch("/src/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        setActivities(data);
      });
  }, []);

  console.info(activities);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper md:h-102"
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
      >
        <div className="h-dvh py-16 px-6 ">
          <SwiperSlide>
            <div>
              <Link to={`/activities/1`}>
                <p className="absolute top-10 backdrop-blur-sm left-0 w-full text-white text-center text-3xl p-2">
                  Retraite de Yoga en Forêt
                </p>
                <img
                  className=""
                  src="https://images.unsplash.com/photo-1610295832882-6390c8bb8055?q=80&w=2926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Femme qui fait du yoga"
                />
                <p className="absolute bottom-10 backdrop-blur-sm left-0 w-full text-white drop-shadow-2xl text-center text-3xl p-1">
                  Note : 4.9/5 ⭐️
                </p>
                </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link to={`/activities/2`}>
                <p className="absolute top-10 backdrop-blur-sm left-0 w-full text-white text-center text-3xl p-2">
                  Sortie escalade sur blocs
                </p>
                <img
                  src="https://images.unsplash.com/photo-1507034589631-9433cc6bc453?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Femme qui fait de l'escalade"
                  />
                <p className="absolute bottom-10 backdrop-blur-sm left-0 w-full text-white drop-shadow-2xl text-center text-3xl p-1">
                  Note : 4.9/5 ⭐️
                </p>
                  </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
            <Link to={`/activities/3`}>
                <p className="absolute top-10 backdrop-blur-sm left-0 w-full text-white text-center text-3xl p-2">
                  Baie de la Somme
                </p>
                <img
                  src="https://images.unsplash.com/photo-1655147260029-75bfe22efc90?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Vu d'un phare en bord d'eau"
                />
                <p className="absolute bottom-10 backdrop-blur-sm left-0 w-full text-white drop-shadow-2xl text-center text-3xl p-1">
                  Note : 4.5/5 ⭐️
                </p>
            </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
            <Link to={`/activities/10`}>
                <p className="absolute top-10 backdrop-blur-sm left-0 w-full text-white text-center text-3xl p-2">
                  Sortie à vélo le long de la Coulée Verte Sud
                </p>
                <img
                  src="https://images.unsplash.com/photo-1651645583723-1b4617cf345c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Sortie en vélo"
                />
                <p className="absolute bottom-10 backdrop-blur-sm left-0 w-full text-white drop-shadow-2xl text-center text-3xl p-1">
                  Note : 4.6/5 ⭐️
                </p>
            </Link>
            
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
            <Link to={`/activities/7`}>
                <p className="absolute top-10 backdrop-blur-sm left-0 w-full text-white text-center text-3xl p-2">
                  Jardin des plantes
                </p>
                <img
                  src="https://images.unsplash.com/photo-1690217096723-0fb62f048da2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="vu d'un parc"
                />
                <p className="absolute bottom-10 backdrop-blur-sm left-0 w-full text-white drop-shadow-2xl text-center text-3xl p-1">
                  Note : 4.7/5 ⭐️
                </p>
              </Link>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
