import React, { useEffect, useRef, useState } from 'react'
import Container from '../Common/Container'
import Dotshape from '../../assets/leadingAbout/dot_shapes.png'
import Sofaimage1 from '../../assets/leadingAbout/interior-with-sofa-3d-illustration.png'
import Sofaimage2 from '../../assets/leadingAbout/interior-with-white-sofa.png'
import PlayIcon from '../../assets/leadingAbout/video.png'
import Icon1 from "../../assets/leadingAbout/icon1.png"
import Icon2 from "../../assets/leadingAbout/icon2.png"
import Icon3 from "../../assets/leadingAbout/icon3.png"
import Icon4 from "../../assets/leadingAbout/icon4.png"

const leadServices = [
    {
        id:1,
        icon:Icon1,
        text:"Smart Home Design"
    },
    {
        id:2,
        icon:Icon2,
        text:"Beautiful Scene Around"
    },
    {
        id:3,
        icon:Icon4,
        text:"Exceptional Lifestyle"
    },
    {
        id:4,
        icon:Icon3,
        text:"Complete 24/7 Security"
    },
   
]
const Leading = () => {
    const ref = useRef(null)
    const [services,setServices] = useState(leadServices)
    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if(!ref.current) return;
            if(entry.isIntersecting){
                ref.current.classList.add("btnAnim")
            }else{
                ref.current.classList.remove('btnAnim')
            }
        },{threshold:0.4});

        observer.observe(ref.current)
        return ()=>observer.disconnect()
    },[])
  return (
    <section className='bg-white pt-[400px] py-[180px] sm:py-[180px] z-0'>
        <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 px-2 gap-y-[3rem] sm:gap-x-5 sm:px-0'>

            <div className='relative w-full sm:max-w-[33.43rem] h-[688px] box-border '> 
                <div className='absolute z-0 top-0 left-0 opacity-80 '> 
                    <img src={Dotshape} className='animate-fade-in' />
                    </div> 
                
                <div className='absolute z-0 sm:top-10 sm:left-10 top-0 left-0'> <img src={Sofaimage1} className='w-full h-full object-cover border-10 border-white shadow transition-tansform duration-300 hover:scale-101'/> </div> 
                
                <div className='absolute z-30 bottom-13 left-0  sm:bottom-3 sm:left-0 animate-slide-up'> <span className='relative'> 
                    <img src={Sofaimage2} className='w-[339px] h-[253] object-cover'/> 

                    <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-tansform duration-300 hover:scale-105 ring-2 rounded-full ring-blue-600' src={PlayIcon}/> </span> 
                    </div>
            </div>

        <div className='font-nunito  flex items-start justify-center flex-col space-y-6'>
         <p className='text-[#FF5A3C] text-3xs font-bold leading-[100%] bg-red-200 pl-7 pr-4 pt-1 pb-1 rounded-xl inline-block'>About Us</p>
         <h2 className='font-poppins font-bold text-5xl text-black leading-relaxed '>The Leading Real Estate 
            Rental Marketplace</h2>
            <p className='text-[#5C727D] font-normal text-[16px] leading-[100%]'>Over 39,000 people work for us in more than 70 countries all over the
            This breadth of global coverage, combined with specialist services</p>

            <div className='grid grid-cols-2 space-y-3'>
                {
                    services.map((service)=>(<div key={service.id} className='flex items-center justify-start gap-x-2'>
                    <img className={` p-3  rounded-full ${service.id === 3 ? 'bg-[#FF5A3C]':'bg-[#FF5A3C]/7'} object-cover shadow-sm `} src={service.icon}/>
                    <span className='font-bold text-[16px] leading-[100%]'>{service.text}</span>
                </div>))
                }
                
            </div>
            <div>
                <blockquote className='text-[#5C727D] font-normal text-[16px] leading-[100%] pt-4 pl-4 pb-4 pr-[100px] bg-[#FF5A3C]/7 border-l-4  border-[#FF5A3C]'>Enimad minim veniam quis nostrud exercitation<br></br>llamco laboris. Lorem ipsum dolor sit amet"</blockquote>
            </div>
            <button ref={ref} className='font-poppins pt-[14px] px-[38px] pb-[13px] bg-[#FF5A3C] text-white'>Know More</button>
        </div>
        

        </div>
        </Container>
    </section>
  )
}

export default Leading