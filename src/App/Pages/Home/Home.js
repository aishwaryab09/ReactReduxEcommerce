import React from 'react'
import TopNavbar from '../../Components/Header/TopNavbar'
import Footer from '../../Components/Footer/Footer'
import HeaderSlider from '../../Components/Slider/HeaderSlider'
import AllCategories from '../../Components/Categories/AllCategories'
import LatestProducts from '../../Components/Product/LatestProducts'

const Home = () => {
  return (
    <>
        <TopNavbar />
        <HeaderSlider />
        <AllCategories />
        <LatestProducts />
        <Footer />
    </>
  )
}

export default Home