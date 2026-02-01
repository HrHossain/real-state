import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function RealEstateSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const properties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      location: "Beverly Hills, CA",
      price: "$4,500,000",
      beds: 5,
      baths: 4,
      sqft: "4,200",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Downtown Penthouse",
      location: "Manhattan, NY",
      price: "$3,200,000",
      beds: 3,
      baths: 3,
      sqft: "2,800",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Beachfront Paradise",
      location: "Malibu, CA",
      price: "$6,800,000",
      beds: 6,
      baths: 5,
      sqft: "5,500",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Mountain Retreat",
      location: "Aspen, CO",
      price: "$2,900,000",
      beds: 4,
      baths: 3,
      sqft: "3,600",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "Contemporary Estate",
      location: "Miami, FL",
      price: "$5,200,000",
      beds: 5,
      baths: 4,
      sqft: "4,800",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      title: "Lakeside Manor",
      location: "Lake Tahoe, NV",
      price: "$3,750,000",
      beds: 4,
      baths: 4,
      sqft: "3,900",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Luxury Properties
          </h1>
          <p className="text-xl text-slate-300">
            Discover Your Dream Home
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {properties.map((property, index) => (
            <SwiperSlide key={property.id}>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105">
                {/* Property Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white px-4 py-2 rounded-full font-bold">
                    {property.price}
                  </div>
                </div>

                {/* Property Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {property.title}
                  </h3>
                  <p className="text-slate-600 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {property.location}
                  </p>

                  {/* Property Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-800">{property.beds}</div>
                      <div className="text-sm text-slate-600">Bedrooms</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-800">{property.baths}</div>
                      <div className="text-sm text-slate-600">Bathrooms</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-800">{property.sqft}</div>
                      <div className="text-sm text-slate-600">Sq Ft</div>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button className="w-full mt-6 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Active Property Info */}
        <div className="text-center mt-12 text-white">
          <p className="text-lg">
            Viewing property {activeIndex + 1} of {properties.length}
          </p>
        </div>
      </div>

      <style jsx>{`
        .swiper {
          width: 100%;
          padding-top: 50px;
          padding-bottom: 80px;
        }

        .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 400px;
          max-width: 90vw;
        }

        .swiper-slide img {
          display: block;
          width: 100%;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background: rgba(0, 0, 0, 0.5);
          padding: 30px;
          border-radius: 50%;
          width: 50px;
          height: 50px;
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
        }

        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          background: #10b981;
          opacity: 1;
        }

        @media (max-width: 768px) {
          .swiper-slide {
            width: 320px;
          }
        }
      `}</style>
    </div>
  );
}