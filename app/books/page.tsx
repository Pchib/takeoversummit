"use client"
import React from 'react'
import '@/public/assets/css/style.css'
import '@/public/assets/lib/bootstrap/css/bootstrap.min.css'
import '@/public/assets/lib/font-awesome/css/font-awesome.min.css'
import '@/public/assets/lib/animate/animate.min.css'
import '@/public/assets/lib/ionicons/css/ionicons.min.css'
// import '@/public/assets/lib/owlcarousel/assets/owl.carousel.min.css'
import '@/public/assets/lib/lightbox/css/lightbox.min.css'
import Script from 'next/script'
import Header from '@/components/Pages/Header'

export default function Video() {
  return (
    <div>
      
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
 <Script
  strategy="lazyOnload"
  src={`https://www.googletagmanager.com/gtag/js?id=G-57TFB6VG95`}
/>

<Script id="ga-script" strategy="lazyOnload">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-57TFB6VG95', {
      page_path: window.location.pathname,
    });
        `}
</Script>
 <div style={{marginBottom:"50px"}}>
 <Header />


 </div>

      <div>
                {/* <main id="main"> */}

	<div className="blob-container">
    <div className="blob"></div>
    <div className="blob one"></div>
    <div className="blob two"></div>
    <div className="blob three"></div>
    <div className="blob four"></div>
    <div className="blob five"></div>
    <div className="blob six"></div>
    <div className="blob seven"></div>
    <div className="blob eight"></div>
    <div className="blob nine"></div>
    <div className="blob ten"></div>
  </div>

 

                <section id="about">

<div className="container">
  <div className="row">

    <div className="col-lg-5 col-md-6">
      <div className="about-img wow fadeInRight animated animated">
        <img src="assets/img/logobanner1.png" alt=""/>
      </div>
    </div>
    

    <div className="col-lg-7 col-md-6">
      <div className="about-content wow fadeInLeft">
        <h2  className=''>Coming Soon</h2>
        <h3></h3>
          {/* <p>For three impactful years, Take Over Summit has been a beacon of inspiration, uniting leaders across Education, Media, Technology, Family, Entertainment, Religion, and Politics. Our mission is clear: to ignite the ambitions of young leaders and cultivate a succession generation whose principles align with the life and teachings of Christ. </p>
            <ul>
          <li><i className="ion-android-checkmark-circle"></i>  Inspiration Across Sectors</li>
          <li><i className="ion-android-checkmark-circle"></i> Christ-Centered Leadership.</li>
          <li><i className="ion-android-checkmark-circle"></i>One-Day Networking Extravaganza.</li><li><i className="ion-android-checkmark-circle"></i>World-className Speaker Series.</li>
        </ul> */}
                                
      </div>
    </div>
  </div>
</div>

</section>
                
           
    {/* </main> */}
                           
                            </div>
                      
      
      </div>
  )
}
