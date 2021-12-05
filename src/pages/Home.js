import React from 'react'
import { Link } from "react-router-dom";
import bannerImage from '../assets/food.jpg'
import '../styles/Home.css';

function Home() {
 return (
  <div className="home" style={{backgroundImage: `url(${bannerImage})`}}>
   <div className="headerContainer">
    <h1>Food Corner</h1>
    <p>BANGLADESHI FOOD AT A CLICK</p>
    <Link to="menu">
     <button>Order Now</button>
    </Link>
    
   </div>
  </div>
 )
}

export default Home
