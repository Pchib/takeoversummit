// import React, { Component } from 'react'

// export default className testimonials extends Component {
//     render() {
//         return (
//             <div className="bobdycar" style={{marginTop:'-20px', marginBottom:"170px"}}>
//         <div className="containercar">
//   <div className="carousel">
//     <div className="image"><span>One</span></div>
//     <div className="image"><span>Two</span></div>
//     <div className="image"><span>Three</span></div>
//     <div className="image"><span>Four</span></div>
//     {/* <div className="image"><span>Five</span></div>
//     <div className="image"><span>Six</span></div>
//     <div className="image"><span>Seven</span></div>
//     <div className="image"><span>Eight</span></div> */}
//     {/* <div className="image"><span>Nine</span></div> */}
//   </div>
// </div>
//             </div>
//         )
//     }
// }
import React, { Component } from 'react'

// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';

// Dynamically import the OwlCarousel component with jQuery configuration
const OwlCarousel= dynamic(() => import('react-owl-carousel'), {
  loading: () => <p></p>,
  // This ensures that the ProvidePlugin configuration is applied only when the component is loaded
  ssr: false,
});

export default class testimonials extends Component {

    render() {
      const option = {
        loop: true,
        item: 2,
        // autoWidth:true,
        mergeFit:true,
autoplay: true,
lazyLoad: true,
autoplayTimeout:4000,
animateout:"slideoutup",
nav: false, dots: false,
}
    
      
        return (
            <div style={{marginTop:"-50px", marginBottom:"-70px"}}>


<OwlCarousel className='owl-theme' loop margin={2} {...option} nav>
    <div className='item'>
        <section id="services" style={{background:"transparent"}}className="section-bg">
      <div className="container">

        
                  <div className="  bounceInUp" data--duration="1.4s">
            <div className="box">
              <div className="icon" style={{background:"#fceef3"}}><i className="ion-ios-analytics-outline" style={{color: "#ff689b"}}></i></div>
              <h4 className="title"><a href="">Career</a></h4>
              <p className="description"></p>
           
            </div>
          </div>
          </div>
          </section>    
    </div>
    <div className='item'>
    <section id="services" style={{background:"transparent"}}className="section-bg">
      <div className="container">

        
                  <div className="  bounceInUp" data--duration="1.4s">
            <div className="box">
            <div className="icon" style={{background:"#eafde7"}}><i className="ion-ios-speedometer-outline" style={{color: "#41cf2e"}}></i></div>
              <h4 className="title"><a href="">Business</a></h4>
              <p className="description"></p>
           
            </div>
          </div>
          </div>
          </section>    </div>
    <div className='item'>
    <section id="services" style={{background:"transparent"}}className="section-bg">
      <div className="container">

        
                  <div className="  bounceInUp" data--duration="1.4s">
            <div className="box">
            <div className="icon" style={{background:"#e6fdfc"}}><i className="ion-ios-paper-outline" style={{color: "#3fcdc7"}}></i></div>
              <h4 className="title"><a href="">Tech </a></h4>
              <p className="description"></p>
           
            </div>
          </div>
          </div>
          </section>    </div>
    <div className='item'>
    <section id="services" style={{background:"transparent"}}className="section-bg">
      <div className="container">

        
                  <div className="  bounceInUp" data--duration="1.4s">
            <div className="box">
            <div className="icon" style={{background: "#e1eeff"}}><i className="ion-ios-world-outline" style={{color: "#2282ff"}}></i></div>
              <h4 className="title"><a href="">Politics</a></h4>
              <p className="description"></p>
           
            </div>
          </div>
          </div>
          </section>    </div>
   
  
</OwlCarousel>
            </div>
        )
    }
}
