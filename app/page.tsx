'use client'
import Image from 'next/image'
import VideoCanvas from '@/components/VideoCanvas'
import Guestslide from '@/components/Guestslide'
import About from '@/components/Pages/About'
import Header from '@/components/Pages/Header'
import Team from '@/components/Pages/Team'
import Testimonial from '@/components/Pages/testimonials'
import Pricing from '@/components/Pages/Pricing'
// import Service from '@/components/Pages/Service'
import YouTubePlayer from '@/components/Pages/YouTubePlayer'
import Listen from '@/components/Pages/Listen'
import Countdown from '@/components/Pages/Countdown'
import Contact from '@/components/Pages/Contact.js'
import Footer from '@/components/Pages/Footer.js'
import Head from 'next/head';
// import '../public/assets/css/style'
import '@/public/assets/css/style.css'
import '@/public/assets/lib/bootstrap/css/bootstrap.min.css'
import '@/public/assets/lib/font-awesome/css/font-awesome.min.css'
import '@/public/assets/lib/animate/animate.min.css'
import '@/public/assets/lib/ionicons/css/ionicons.min.css'
// import '@/public/assets/lib/owlcarousel/assets/owl.carousel.min.css'
import '@/public/assets/lib/lightbox/css/lightbox.min.css'
import Script from 'next/script'
import React, { useEffect } from 'react'


export default function Home() {
  // useEffect(() => {
  //   const loadScripts = () => {
  //     const script1 = document.createElement('script');
  //     script1.src = 'https://uicsoft.netlify.app/assets/lib/jquery/jquery.min.js';
  //     script1.async = true;
  //     document.body.appendChild(script1);

  //     const script2 = document.createElement('script');
  //     script2.src = 'https://uicsoft.netlify.app/assets/lib/jquery/jquery-migrate.min.js';
  //     script2.async = true;
  //     document.body.appendChild(script2);

  //     // Add other scripts as needed
  //   };

  //   loadScripts();
  // }, []);
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://uicsoft.netlify.app/assets/lib/owlcarousel/owl.carousel.min.js';
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  return (
    <main className="flex min-h-screen flex-col justify-between ">

  <div>
    <Head>
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>
        
  {/* <Script src='https://uicsoft.netlify.app/assets/lib/jquery/jquery.min.js' strategy="beforeInteractive"/>
  <Script src="https://uicsoft.netlify.app/assets/lib/jquery/jquery.min.js" strategy="beforeInteractive"/>
   <Script src="https://uicsoft.netlify.app/assets/lib/jquery/jquery-migrate.min.js" strategy="beforeInteractive"/> */}
   <Script src='https://uicsoft.netlify.app/assets/lib/jquery/jquery.min.js' strategy="beforeInteractive"/>
<Script src="https://uicsoft.netlify.app/assets/lib/jquery/jquery-migrate.min.js" strategy="beforeInteractive"/>

   <Script src="https://uicsoft.netlify.app/assets/lib/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive"/>
   <Script src="https://uicsoft.netlify.app/assets/lib/easing/easing.min.js" strategy="beforeInteractive"/>
   <Script src="https://uicsoft.netlify.app/assets/lib/mobile-nav/mobile-nav.js" strategy="beforeInteractive"/>
   <Script src="https://uicsoft.netlify.app/assets/lib/wow/wow.min.js" strategy="beforeInteractive"/>
   <Script src="https://uicsoft.netlify.app/assets/lib/waypoints/waypoints.min.js" strategy="beforeInteractive"/>
   <Script src="https://uicsoft.netlify.app/assets/lib/counterup/counterup.min.js" strategy="beforeInteractive"/>
   <Script src="https://uicsoft.netlify.app/assets/lib/owlcarousel/owl.carousel.min.js" strategy="beforeInteractive"/>
   <Script src="https://uicsoft.netlify.app/assets/lib/isotope/isotope.pkgd.min.js" strategy="beforeInteractive"/>
   <Script src="https://uicsoft.netlify.app/assets/lib/lightbox/js/lightbox.min.js" strategy="beforeInteractive"/>
   <Script src="https://uicsoft.netlify.app/assets/js/main.js" strategy="beforeInteractive"/>
   
    {/* <Script src="https://iceblueapp.com/wp-content/uploads/2024/01/main.js" strategy="beforeInteractive"/> */}
   
    <Header /> 

    <VideoCanvas/>
    <Testimonial/>

    <Countdown/>

    {/* <Pricing/> */}
    {/* <Service/> */}
  <About/>
  <Guestslide/>


  <Team/>

  <Contact/>
  {/* <Listen/> */}

  <Footer/>
  {/* <Liveaudio/>
  <YouTubePlayer/> */}
  
       
  </div>
    </main>
  )
};