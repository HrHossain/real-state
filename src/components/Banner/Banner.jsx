import React from 'react';
import Shape from "../../assets/banner/shape.png";
import Houselogo from "../../assets/banner/houselogo.png";
import BannerImg from "../../assets/banner/banner.png";
import { CiPlay1 } from "react-icons/ci";
import Container from "../Common/Container";
import { LuMoveLeft } from "react-icons/lu";
import { MdArrowRightAlt } from "react-icons/md";
import PropertySearchBar from '../Common/PropertySearchBar';

const Banner = () => {
  return (
    <section className='bg-[#F2F6F7] relative  min-h-screen'>
      {/* Background Shape - Hidden on mobile */}
      <img 
        src={Shape} 
        alt='decorative shape' 
        className=" hidden lg:block w-32 lg:w-40 absolute top-1/2 -translate-y-1/2 "
      />
      
      {/* Main Content Wrapper */}
      <div className="relative min-h-screen flex flex-col lg:flex-row items-center py-8 lg:py-0">
        
        {/* Left Navigation Button - Hidden on mobile */}
        <button 
          className="hidden xl2:flex  absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-20 px-6 py-4 bg-white text-[#FF5A3C] text-xs font-semibold rounded-lg hover:bg-[#FF5A3C] hover:text-white transition-all duration-300 hover:shadow-lg active:scale-95"
          aria-label="Previous"
        >
          <LuMoveLeft className="text-xl" /> 
        </button>

        {/* Center Content */}
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 xl:gap-0 items-center">
            
            {/* Left Content Section */}
            <div className="text-center lg:text-left space-y-4 lg:space-y-6">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 text-sm sm:text-base text-[#1D2022] font-normal font-nunito">
                <img 
                  className="size-5 object-cover " 
                  src={Houselogo} 
                  alt="Real Estate Logo"
                />
                Real Estate Agency
              </span>
              
              {/* Main Heading */}
              <h1 className="font-bold sm:font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black leading-tight font-poppins">
                Find Your Dream<br className="hidden sm:block" /> House By Us
              </h1>
              
              {/* Description */}
              <p className="font-normal font-nunito text-sm sm:text-base text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing
                 <a href='#' target='_blank' aria-level="consectetur adipisicing"></a>
              </p>
             
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button className=" sm:w-auto px-6 sm:px-7 py-3 sm:py-4 bg-[#FF5A3C] text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 hover:shadow-lg active:scale-95 font-poppins">
                  View Properties
                </button>
                <button 
                  className="w-12 h-12 rounded-full bg-white flex justify-center items-center hover:bg-gray-100 transition-all duration-300 hover:shadow-md active:scale-95 group"
                  aria-label="Play video"
                >
                  <CiPlay1 className="text-[#FF5A3C] text-xl group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative py-8 lg:py-12 ">
              <div className="relative overflow-hidden">
                <img 
                  src={BannerImg} 
                  alt="Modern dream house - luxury real estate property"
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Search Card - Floating at bottom */}
          <div className="absolute left-1/2 -bottom-80 sm:-bottom-12 lg:-bottom-10 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] max-w-7xl -translate-x-1/2 z-10">
          <div className="absolute xl2:hidden  bottom-full left-1/2 -translate-x-1/2 flex gap-4 z-30">
          <button 
            className="w-12 h-12 flex items-center justify-center bg-white text-[#FF5A3C] rounded-full shadow-lg hover:bg-[#FF5A3C] hover:text-white transition-all duration-300 active:scale-95"
            aria-label="Previous"
          >
            <LuMoveLeft className="text-xl" />
          </button>
          <button 
            className="w-12 h-12 flex items-center justify-center bg-white text-[#FF5A3C] rounded-full shadow-lg hover:bg-[#FF5A3C] hover:text-white transition-all duration-300 active:scale-95"
            aria-label="Next"
          >
            <MdArrowRightAlt className="text-xl" />
          </button>
        </div>
            <PropertySearchBar/> 

            
          </div>
        </Container>

        {/* Right Navigation Button - Hidden on mobile */}
        <button 
          className="hidden xl2:flex absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 z-20 px-6 py-4 bg-white text-[#FF5A3C] text-xs font-semibold rounded-lg hover:bg-[#FF5A3C] hover:text-white transition-all duration-300 hover:shadow-lg active:scale-95"
          aria-label="Next"
        >
          <MdArrowRightAlt className="text-xl" />
        </button>

        {/* Mobile Navigation - Show only on mobile */}
        
      </div>
    </section>
  );
};

export default Banner;