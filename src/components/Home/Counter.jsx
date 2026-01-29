import React from 'react'
import Icon1 from '../../assets/counter/icon4.png'
import Icon2 from '../../assets/counter/icon2.png'
import Icon3 from '../../assets/counter/icon3.png'
import Icon4 from '../../assets/counter/icon1.png'
import Container from '../Common/Container'
import CounterCard from '../Common/CounterCard'

const counter = [
    {
        id:1,
        icon:Icon1,
        number:560,
        desc:"Total Area Sq"
    },
    {
        id:2,
        icon:Icon2,
        number:197,
        desc:"Apartments Sold"
    },
    {
        id:3,
        icon:Icon3,
        number:268,
        desc:"Total Constructions"
    },
    {
        id:4,
        icon:Icon4,
        number:340,
        desc:"Apartio Rooms"
    }
]
const Counter = () => {
  return (
    <section className='bg-[#F6F5FC]/76'>
        <Container>
              <div className="">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counter.map((item, index) => (
            <CounterCard
              key={item.id}
              icon={item.icon}
              number={item.number}
              desc={item.desc}
              index={index}
            />
          ))}
        </div>
      </div>
    
  

        </Container>
    </section>
  )
}

export default Counter