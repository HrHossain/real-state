import React from 'react'
import TopBar from '../components/Home/TopBar'
import Header from '../components/Home/Header'
import Banner from '../components/Banner/Banner'
import Leading from '../components/Home/Leading'
import Counter from '../components/Home/Counter'

const Home = () => {
  return (
    <div>
        <TopBar/>
        <Header/>
        <Banner/>
        <Leading/>
        <Counter/>
    </div>
  )
}

export default Home