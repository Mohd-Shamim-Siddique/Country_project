import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className='home_header flex container'>
      <div className='right-headre content'>
        <h1>Explore the World, One Country at a Time.</h1>
        <p>Discover The History, Culture, And Beauty Of Every Nation.Sort, Search,And Filter Through Countries To Find The Details You Need  </p>
        <button className='flex button'>Start Exploring <FaLongArrowAltRight /></button>
      </div>
      <div className='left-header image'>
        <img src="https://media.licdn.com/dms/image/v2/C561BAQG0RRqJHrUDZw/company-background_10000/company-background_10000/0/1583943356453/world_atlas_cover?e=2147483647&v=beta&t=qtf5cOuqjdIINDcTz4-MlK0xHnwTSxKjYNCC5Ot-tvI" alt="" />
      </div>
    </div>
  )
}

export default Home