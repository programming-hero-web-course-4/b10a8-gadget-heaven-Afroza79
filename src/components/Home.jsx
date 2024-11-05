import React from 'react'
import { Outlet } from 'react-router-dom'
import Cards from './Cards'
import CategoryDetail from './CategoryDetail'

const Home = () => {
  return (
    <div>
      <Cards/>
      {/* <Outlet />
      <CategoryDetail categoryName="all" /> */}
    </div>
  )
}

export default Home
