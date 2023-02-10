import React from 'react'
import { NavLink } from 'react-router-dom'
// import {AiFillInstagram  } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
        <div>
            <h1>TechyStarr</h1>
            <p>@all right reserved</p>
        </div>

        <div>
            <h5>Follow Us</h5>
            <div>
                <NavLink to="https://www.facebook.com/profile.php?id=100006701534638" target={"blank"} >FaceBook</NavLink> 
                <NavLink to="https://www.instagram.com/mariahussainjamal/" target={"blank"} >Instagram</NavLink>
                {/* <NavLink to="https://www.instagram.com/mariahussainjamal/" target={"blank"} ><AiFillInstagram/></NavLink> */}
                <NavLink to="https://github.com/hafzamaria" target={"blank"} >Github</NavLink>
            </div>
        </div>
    </footer>
    
  )
}

export default Footer
