import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                 <section id="home" class="text-center">
                        <div class="templatemo_headerimage">
                            <div class="flexslider">
                                <ul class="slides">
                                    <li>
                                        <img src="assets/images/slider/1.jpg" alt="Slide 1"/>
                                        <div class="slider-caption">
                                            <div class="templatemo_homewrapper">
                                                <h1 class="wow fadeInDown" data-wow-delay="2000">Uic Soft Company</h1>
                                                <h2 class="wow fadeInDown" data-wow-delay="2000">
                                                    <span>WE DESIGN & CODE WEBSITES</span>
                                                </h2>
                                                <a href="#service" class="smoothScroll btn btn-default wow fadeInDown"
                                                    data-wow-delay="2000">Our Work</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/images/slider/2.jpg" alt="Slide 2"/>
                                        <div class="slider-caption">
                                            <div class="templatemo_homewrapper">
                                                <h1 class="wow fadeInDown" data-wow-delay="2000">Flex Slider & CSS Flexbox</h1>
                                                <h2 class="wow fadeInDown" data-wow-delay="2000">
                                                    <span>works on all modern browsers & Works on all mobile phone</span>
                                                </h2>
                                                <a href="#about" class="smoothScroll btn btn-default wow fadeInDown"
                                                    data-wow-delay="2000">See about us</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
            </div>
        )
    }
}
