import React from "react";
import { TfiLocationPin, TfiEmail } from "react-icons/tfi";
import { BiLogoFacebook } from "react-icons/bi";
import { RxTwitterLogo } from "react-icons/rx";
import { PiInstagramLogoLight } from "react-icons/pi";

const contactInfo = [
  {
    id: 1,
    icon: <TfiLocationPin />,
    text: "254 Lillian Blvd, Holbrook",
    ariaLabel: "Location",
    link:"www.map.com"
  },
  {
    id: 2,
    icon: <TfiEmail />,
    text: "info@santizex-site.com",
    ariaLabel: "Email",
    link: "mailto:info@santizex-site.com"
  },
];

const socialLinks = [
  {
    id: 1,
    icon: <BiLogoFacebook />,
    name: "Facebook",
    url: "https://facebook.com",
    ariaLabel: "Visit our Facebook page"
  },
  {
    id: 2,
    icon: <RxTwitterLogo />,
    name: "Twitter",
    url: "https://twitter.com",
    ariaLabel: "Visit our Twitter profile"
  },
  {
    id: 3,
    icon: <PiInstagramLogoLight />,
    name: "Instagram",
    url: "https://instagram.com",
    ariaLabel: "Visit our Instagram profile"
  },
];

const TopBar = () => {
  return (
    <section className="bg-[#0A2C3D] sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row  justify-between lg:items-center  gap-3 lg:gap-0 py-2 sm:py-0">
          
          {/* Left Section - Contact Info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0">
            {contactInfo.map((element, index) => (
              <div 
                key={element.id} 
                className="flex items-center group"
              >
                {element.link ? (
                  <a 
                    href={element.link}
                    className="flex items-center gap-2 hover:text-orange-400 transition-colors duration-300"
                    aria-label={element.ariaLabel}
                  >
                    <span className="text-white w-4 h-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {element.icon}
                    </span>
                    <span className="text-white tracking-wider text-xs sm:text-sm font-normal font-nunito">
                      {element.text}
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500 w-4 h-4 flex items-center justify-center">
                      {element.icon}
                    </span>
                    <span className="text-white font-nunito text-xs sm:text-sm font-normal">
                      {element.text}
                    </span>
                  </div>
                )}
                
                {/* Divider - Only show on desktop and between items */}
                {index === 0 && (
                  <div className="hidden sm:block mx-4 h-14 w-px bg-white"></div>
                )}
              </div>
            ))}
          </div>

          {/* Right Section - Social & CTA */}
          <div className="flex items-center justify-end sm:justify-start gap-3  sm:gap-6">
            {/* Social Icons */}
            <div className="flex items-center  sm:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="size-8 flex items-center justify-center rounded-sm hover:bg-white  text-white group  transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  <span className="text-base group-hover:text-[#0A2C3D]">{social.icon}</span>
                </a>
              ))}
            </div>

            {/* Add Listings Button */}
            <button 
              className="px-4 font-poppins sm:px-6 lg:px-7 py-2.5 sm:py-3 lg:py-4 bg-orange-700 hover:bg-orange-600 text-white text-sm  font-semibold  transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap"
              aria-label="Add new listing for properties"
            >
              Add Listings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBar;