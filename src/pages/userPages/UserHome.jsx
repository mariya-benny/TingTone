import React from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import Banner from '../../components/userComponents/Banner'
import Cards from '../../components/userComponents/Cards'
import SecondBanner from '../../components/userComponents/SecondBanner'
import Testimonials from '../../components/userComponents/Testimonials'
import ThirdBanner from '../../components/userComponents/ThirdBanner'
const UserHome = () => {
  return (
    <>
    <Header/>
        <Banner/>
        <SecondBanner/>
        <Cards/>
        <ThirdBanner/>
        <Testimonials/>
    <Footer/>
      
    </>
  )
}

export default UserHome
