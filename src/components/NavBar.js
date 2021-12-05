import React,{useState} from 'react'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import '../styles/NavBar.css';
import DehazeIcon from '@mui/icons-material/Dehaze';

function NavBar() {
 const [openLinks, setOpenLinks] = useState(false);
 const toggleNavbar = () => {
  setOpenLinks(!openLinks);
 }
 return (
  <div className="navbar">
   <div className="leftSide" id={openLinks ? 'open' : 'close'}>
    <img src={logo} alt="Logo" />
    <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
   </div>
   <div className="rightSide">
        <Link to="/">Home</Link> 
        <Link to="menu">Menu</Link>
        <Link to="about">About</Link>
    <Link to="contact">Contact</Link>
    <button onClick={toggleNavbar}>
     <DehazeIcon/>
    </button>
    
   </div>
  </div>
 )
}

export default NavBar