import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../components/section2.css";

const Section2 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    

    gsap.to(".icons", {
      scrollTrigger: {
        trigger: ".icons",
        start: "0px 800px",
        end: "+=300",
        scrub: true 
      },
      x: 250,
      ease:"none"
    });
    gsap.to(".icons2", {
      scrollTrigger: {
        trigger: ".icons2",
        start: "0px 800px",
        end: "+=300",
        scrub: true 
      },
      x: -350,
      y:-50,
      ease:"none"
    });
    gsap.to(".icons3", {
      scrollTrigger: {
        trigger: ".icons3",
        start: "300px 800px",
        end: "+=300",
        scrub: true 
      },
      x: 230,
      ease:"none"
    });
    gsap.to(".icons4", {
      scrollTrigger: {
        trigger: ".icons4",
        start: "40px 800px",
        end: "+=300",
        scrub: true 
      },
      x: -250,
      y:-80,
      ease:"none"
    });
    gsap.to(".icons5", {
      scrollTrigger: {
        trigger: ".icons5",
        start: "0px 800px",
        end: "+=300",
        scrub: true 
      },
      x: 250,
      ease:"none"
    });
    gsap.to(".icons6", {
      scrollTrigger: {
        trigger: ".icons6",
        start: "0px 800px",
        end: "+=300",
        scrub: true 
      },
      x: -220,
      y:-100,
      ease:"none"
    });


    gsap.to(".firstContent", {
      scrollTrigger: {
        trigger: ".firstContent",
        start: "top bottom ",
        end:"none",
        scrub: true 
      },
      filter: "blur(10px)",
      scale: 0.8,
      ease: "none"
    });

    gsap.to(".navbar", {
      backgroundColor: "rgba(28, 28, 28, 0.1)", // Change the color values as per your requirement
      scrollTrigger: {
        trigger: ".firstContent",
        start: "top bottom",
        end: "none",
          filter: "blur(10px)",
        scrub: true 
      },
      ease: "none"
    });

  }, []);

  return (
    <div className='second'>


      <div className='navbar'>
        <div><h1>Sweden</h1></div>
        <div className='nav-links'>
          <a href="">Product </a>
          <a href="">Pricing </a>
          <a href="">Features </a>
          <a href="">Company </a>
          <a href="">Insights</a>
        </div>
        <div>Talk To Sales</div>
      </div>


       <div className='round'>
        <img src="https://assets.website-files.com/64749d7783acf7eedfcd9125/6474a0a0f6f6166ad50e2fcf_CircleBg.webp" alt="" />
      </div>


      <div className='firstContent'>
          <h1>Next Unified</h1>
          <h2>Social App</h2>
          <p>Unleash the Power of Productivity: Seamlessly Connect, Collaborate, <br /> and Conquer with Our Cutting-Edge Meeting App.</p>
      </div>


      <div className='secondContent'>
    <div className='all-icons'>
    <div className='icons'>
          <img src="https://assets.website-files.com/64749d7783acf7eedfcd9125/64749d7783acf7eedfcd9173_swatch.svg" alt="" />
       </div>
        <div className='icons2'>
          <img src="https://assets.website-files.com/64749d7783acf7eedfcd9125/64749d7783acf7eedfcd9173_swatch.svg" alt="" />
       </div>
        <div className='icons3'>
          <img src="https://assets.website-files.com/64749d7783acf7eedfcd9125/64749d7783acf7eedfcd9173_swatch.svg" alt="" />
       </div>
        <div className='icons4'>
          <img src="https://assets.website-files.com/64749d7783acf7eedfcd9125/64749d7783acf7eedfcd9173_swatch.svg" alt="" />
       </div>
        <div className='icons5'>
          <img src="https://assets.website-files.com/64749d7783acf7eedfcd9125/64749d7783acf7eedfcd9173_swatch.svg" alt="" />
       </div>
        <div className='icons6'>
          <img src="https://assets.website-files.com/64749d7783acf7eedfcd9125/64749d7783acf7eedfcd9173_swatch.svg" alt="" />
       </div>
    </div>

      
      <div className='phone'>    
        <div className='img-phone'>
          <img src="https://assets.website-files.com/64749d7783acf7eedfcd9125/6474b16b88727267a035693e_iPhone14Pro.png" alt="" />
        </div>
        <div className='img-background one '> 
        <img src="https://assets.website-files.com/64749d7783acf7eedfcd9125/6474b1da96040b5fe42e5a28_MobileApp.webp" alt="" /></div>
        <div className='img-background two'> </div>
      </div>

      </div>


    </div>
  );
};

export default Section2;
