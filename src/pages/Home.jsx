import React from 'react'
import TopBar from '../components/Home/TopBar'
import Header from '../components/Home/Header'
import Banner from '../components/Banner/Banner'
import Leading from '../components/Home/Leading'
import Counter from '../components/Home/Counter'
import SellProperties from '../components/Home/SellProperties'
import OurMainFocus from '../components/Home/OurMainFocus'



const Home = () => {
  return (
    <div>
        <TopBar/>
        <Header/>
        <Banner/>
        <Leading/>
        <Counter/>
       <SellProperties/>
       <OurMainFocus/>
    </div>
  )
}

export default Home