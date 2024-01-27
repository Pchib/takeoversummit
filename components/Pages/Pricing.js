import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default class testimonials extends Component {

  
    render() {
        return (
          
            <div>
              

        <section id="testimonials">
      <div className="container">

        <header className="section-header">
          <h3>Testimonials</h3>
        </header>

        <div className="row justify-content-center">
          <div className="col-lg-8">

            <div className="owl-carousel testimonials-carousel wow fadeInUp">
    
              <div className="testimonial-item">
                <img src="assets/img/testimonial-1.jpg" className="testimonial-img" alt=""/>
                <h3>Ugwu Isaac</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                </p>
              </div>
    
              <div className="testimonial-item">
                <img src="assets/img/testimonial-2.jpg" className="testimonial-img" alt=""/>
                <h3>Grace</h3>
                <h4>Designer</h4>
                <p>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                </p>
              </div>
    
              <div className="testimonial-item">
                <img src="assets/img/testimonial-3.jpg" className="testimonial-img" alt=""/>
                <h3>Emmanuel</h3>
                <h4>Developer</h4>
                <p>
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                </p>
              </div>
    
              <div className="testimonial-item">
                <img src="assets/img/testimonial-4.jpg" className="testimonial-img" alt=""/>
                <h3>Matt Brandons</h3>
                <h4>Freelancer</h4>
                <p>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                </p>
              </div>
            </div>

          </div>
        </div>


      </div>
    </section>
            </div>
        )
    }
}
