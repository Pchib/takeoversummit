"use client"
import React, { Component } from 'react'

export default class Team extends Component {
    render() {
      const containerStyle = {
        display:'inline'    };
        return (
            <div>
                           <section id="team" class="section-bg">
      <div class="container">
        <div class="section-header">
          <h3>Meet Our Facilitators</h3>
          <p>At Take Over Summit, our facilitators are the driving force behind the transformative experiences we offer. These seasoned leaders and experts bring a wealth of knowledge and insight, shaping the summit into a dynamic platform for growth and inspiration.</p>
        </div>

        <div class="row">

          <div class="col-lg-3 col-md-6 wow fadeInUp">
            <div class="member">
              <img style={containerStyle} src="assets/img/rv.png" class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Rev Victor Adeyemi</h4>
                  <span>Senior Pastor, GHarvest Church, Int’l.</span>
                  <div class="social">
                    <a href=""><i class="fa fa-twitter"></i></a>
                    <a href=""><i class="fa fa-facebook"></i></a>
                    <a href=""><i class="fa fa-google-plus"></i></a>
                    <a href=""><i class="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="member">
              <img style={containerStyle} src="assets/img/pt.png" class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Phil Thompson</h4>
                  <span>Gospel Music Artist &
Songwriter</span>
                  <div class="social">
                    <a href=""><i class="fa fa-twitter"></i></a>
                    <a href=""><i class="fa fa-facebook"></i></a>
                    <a href=""><i class="fa fa-google-plus"></i></a>
                    <a href=""><i class="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div class="member">
              <img style={containerStyle} src="assets/img/pd.png" class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Pastor Dara </h4>
                  <span>Lead Pastor, GHarvest Church
Island</span>
                  <div class="social">
                    <a href=""><i class="fa fa-twitter"></i></a>
                    <a href=""><i class="fa fa-facebook"></i></a>
                    <a href=""><i class="fa fa-google-plus"></i></a>
                    <a href=""><i class="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="member">
              <img style={containerStyle} src="assets/img/tt.png" class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Crystal Berger</h4>
                  <span>Founder, EBO & Host of the Counter Culture Podcast</span>
                  <div class="social">
                    <a href=""><i class="fa fa-twitter"></i></a>
                    <a href=""><i class="fa fa-facebook"></i></a>
                    <a href=""><i class="fa fa-google-plus"></i></a>
                    <a href=""><i class="fa fa-linkedin"></i></a>
                  </div>
                </div>
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
