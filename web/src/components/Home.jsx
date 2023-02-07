import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle ,AiFillAmazonCircle , AiFillYoutube ,AiFillInstagram} from "react-icons/ai"


const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <main>
        <h1>TechyStar</h1>
        <p>Solution to all your problems.</p>
      </main>
    </div>
      

      {/* 2ndSection */}

    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div className='para'>
        <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>

        </div>
    </div>
    
    {/* 3rd Section */}
    <div className="home3">
        <div className='home3Child' id='About'>
        <h1>Who we are?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas cupiditate architecto adipisci repudiandae eum debitis, officia reiciendis eos dignissimos, 
            sed dolore exercitationem. Reiciendis placeat ipsa hic optio dolor quos voluptatem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas cupiditate architecto adipisci repudiandae eum debitis, officia reiciendis eos dignissimos, 
            sed dolore exercitationem. Reiciendis placeat ipsa hic optio dolor quos voluptatem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas cupiditate architecto adipisci repudiandae eum debitis, officia reiciendis eos dignissimos, 
            sed dolore exercitationem. Reiciendis placeat ipsa hic optio dolor quos voluptatem?</p>
    </div>
    </div>

    {/* 4thSection */}

    <div className="home4" id='Brands'>
        <div>
            
            <h1>Brands</h1>
            <article>
                <div style={{
                animationDelay:"0.3s",
            }}>
          <AiFillGoogleCircle/>
          <p>Google</p>
                </div>

                <div style={{
                animationDelay:"0.5s",
            }}>
          <AiFillAmazonCircle/>
          <p>Amazon</p>
                </div>

             

                <div style={{
                animationDelay:"0.7s",
            }}>
          <AiFillYoutube/>
          <p>Youtube</p>
                </div>

                <div style={{
                animationDelay:"1s",
            }}>
          <AiFillInstagram/>
          <p>Instagram</p>
                </div>
                
            </article>
        </div>

    </div>
    </>
  )
}

export default Home
