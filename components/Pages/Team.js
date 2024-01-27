 "use client"
// import React, { Component } from 'react'

// export default class Team extends Component {
//     render() {
//       const containerStyle = {
//         display:'inline'    };
//         return (
//             <div>
//                            <section id="team" className="section-bg">
//       <div className="container">
//         <div className="section-header">
//           <h3>Meet Our Facilitators</h3>
//           <p>At Take Over Summit, our facilitators are the driving force behind the transformative experiences we offer. These seasoned leaders and experts bring a wealth of knowledge and insight, shaping the summit into a dynamic platform for growth and inspiration.</p>
//         </div>

//         <div className="row">

//           <div className="col-lg-3 col-md-6 col-sm-6  wow fadeInUp">
//             <div className="member">
//               <img style={containerStyle} src="assets/img/rv.png" className="img-fluid" alt=""/>
//               <div className="member-info">
//                 <div className="member-info-content">
//                   <h4>Rev Victor Adeyemi</h4>
//                   <span>Senior Pastor, GHarvest Church, Int’l.</span>
//                   {/* <div className="social">
//                     <a href=""><i className="fa fa-twitter"></i></a>
//                     <a href=""><i className="fa fa-facebook"></i></a>
//                     <a href=""><i className="fa fa-google-plus"></i></a>
//                     <a href=""><i className="fa fa-linkedin"></i></a>
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-3 col-md-6 col-sm-6  wow fadeInUp" data-wow-delay="0.1s">
//             <div className="member">
//               <img style={containerStyle} src="assets/img/bishop.png" className="img-fluid" alt=""/>
//               <div className="member-info">
//                 <div className="member-info-content">
//                   <h4>Bishop FEB Idahosa</h4>
//                   <span>President, Ben Idahosa University, Benin</span>
//                   {/* <div className="social">
//                     <a href=""><i className="fa fa-twitter"></i></a>
//                     <a href=""><i className="fa fa-facebook"></i></a>
//                     <a href=""><i className="fa fa-google-plus"></i></a>
//                     <a href=""><i className="fa fa-linkedin"></i></a>
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-3 col-md-6 col-sm-6  wow fadeInUp" data-wow-delay="0.2s">
//             <div className="member">
//               <img style={containerStyle} src="assets/img/pd.png" className="img-fluid" alt=""/>
//               <div className="member-info">
//                 <div className="member-info-content">
//                   <h4>Pastor Dare Kolawole </h4>
//                   <span>Lead Pastor, GHarvest Church
// Island</span>
//                   {/* <div className="social">
//                     <a href=""><i className="fa fa-twitter"></i></a>
//                     <a href=""><i className="fa fa-facebook"></i></a>
//                     <a href=""><i className="fa fa-google-plus"></i></a>
//                     <a href=""><i className="fa fa-linkedin"></i></a>
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-3 col-md-6 col-sm-6  wow fadeInUp" data-wow-delay="0.3s">
//             <div className="member">
//               <img style={containerStyle} src="assets/img/tt.png" className="img-fluid" alt=""/>
//               <div className="member-info">
//                 <div className="member-info-content">
//                   <h4>Crystal Berger</h4>
//                   <span>Founder, EBO & Host of the Counter Culture Podcast</span>
//                   {/* <div className="social">
//                     <a href=""><i className="fa fa-twitter"></i></a>
//                     <a href=""><i className="fa fa-facebook"></i></a>
//                     <a href=""><i className="fa fa-google-plus"></i></a>
//                     <a href=""><i className="fa fa-linkedin"></i></a>
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>  
//         <div className="row">

// <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp">
//   <div className="member">
//     <img style={containerStyle} src="assets/img/unknow1.png" className="img-fluid" alt=""/>
//     <div className="member-info">
//       <div className="member-info-content">
//         {/* <h4>Rev Victor Adeyemi</h4>
//         <span>Senior Pastor, GHarvest Church, Int’l.</span> */}
//         {/* <div className="social">
//           <a href=""><i className="fa fa-twitter"></i></a>
//           <a href=""><i className="fa fa-facebook"></i></a>
//           <a href=""><i className="fa fa-google-plus"></i></a>
//           <a href=""><i className="fa fa-linkedin"></i></a>
//         </div> */}
//       </div>
//     </div>
//   </div>
// </div>

// <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
//   <div className="member">
//     <img style={containerStyle} src="assets/img/unknow2.png" className="img-fluid" alt=""/>
//     <div className="member-info">
//       <div className="member-info-content">
//         {/* <h4>Bishop FEB Idahosa</h4>
//         <span>President, Ben Idahosa University, Benin</span> */}
//         {/* <div className="social">
//           <a href=""><i className="fa fa-twitter"></i></a>
//           <a href=""><i className="fa fa-facebook"></i></a>
//           <a href=""><i className="fa fa-google-plus"></i></a>
//           <a href=""><i className="fa fa-linkedin"></i></a>
//         </div> */}
//       </div>
//     </div>
//   </div>
// </div>

// <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
//   <div className="member">
//     <img style={containerStyle} src="assets/img/unknow3.png" className="img-fluid" alt=""/>
//     <div className="member-info">
//       <div className="member-info-content">
//         {/* <h4>Pastor Dara </h4>
//         <span>Lead Pastor, GHarvest Church
// Island</span> */}
//         {/* <div className="social">
//           <a href=""><i className="fa fa-twitter"></i></a>
//           <a href=""><i className="fa fa-facebook"></i></a>
//           <a href=""><i className="fa fa-google-plus"></i></a>
//           <a href=""><i className="fa fa-linkedin"></i></a>
//         </div> */}
//       </div>
//     </div>
//   </div>
// </div>

// <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
//   <div className="member">
//     <img style={containerStyle} src="assets/img/unknow4.png" className="img-fluid" alt=""/>
//     <div className="member-info">
//       <div className="member-info-content">
//         {/* <h4>Crystal Berger</h4>
//         <span>Founder, EBO & Host of the Counter Culture Podcast</span> */}
//         {/* <div className="social">
//           <a href=""><i className="fa fa-twitter"></i></a>
//           <a href=""><i className="fa fa-facebook"></i></a>
//           <a href=""><i className="fa fa-google-plus"></i></a>
//           <a href=""><i className="fa fa-linkedin"></i></a>
//         </div> */}
//       </div>
//     </div>
//   </div>
// </div>

// </div>

//       </div>
//     </section>
//             </div>
//         )
//     }
// }

// "use client"
// "use client"
import React, { Component } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Team({ }) {
  const containerStyle = {
    display: 'inline',
  };

  const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  };

  const colMobileStyle = {
    flex: '0 0 48%', // Two columns on mobile
    marginBottom: '20px',
  };

  const colLaptopStyle = {
    flex: '0 0 23%', // Four columns on laptops
    marginBottom: '20px',
  };

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const colStyle = isMobile ? colMobileStyle : colLaptopStyle;

  return (
    <div>
      <section id="team" className="section-bg">
        <div className="container">
          <div className="section-header">
            <h3>Meet Our Facilitators</h3>
            <p>
              At Take Over Summit, our facilitators are the driving force behind the transformative
              experiences we offer. These seasoned leaders and experts bring a wealth of knowledge and
              insight, shaping the summit into a dynamic platform for growth and inspiration.
            </p>
          </div>

          <div style={rowStyle}>
            {/* Example team members */}
            <div style={colStyle}>
              <div className="member">
              <img style={containerStyle} src="assets/img/rv.png" className="img-fluid" alt=""/>
             <div className="member-info">
                <div className="member-info-content">
                 <h4>Rev Victor Adeyemi</h4>
                 <span>Senior Pastor, GHarvest Church, Int’l.</span>
                 {/* <div className="social">
//                     <a href=""><i className="fa fa-twitter"></i></a>
//                     <a href=""><i className="fa fa-facebook"></i></a>
//                     <a href=""><i className="fa fa-google-plus"></i></a>
//                     <a href=""><i className="fa fa-linkedin"></i></a>
//                   </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div style={colStyle}>
              <div className="member">
              <img style={containerStyle} src="assets/img/bishop.png" className="img-fluid" alt=""/>
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Bishop FEB Idahosa</h4>
                  <span>President, Ben Idahosa University, Benin</span>
                  {/* <div className="social">
//                     <a href=""><i className="fa fa-twitter"></i></a>
//                     <a href=""><i className="fa fa-facebook"></i></a>
//                     <a href=""><i className="fa fa-google-plus"></i></a>
//                     <a href=""><i className="fa fa-linkedin"></i></a>
//                   </div> */}
              </div>
            </div>
            </div>
            </div>
            <div style={colStyle}>
              <div className="member">
              <img style={containerStyle} src="assets/img/pd.png" className="img-fluid" alt=""/>
               <div className="member-info">
                 <div className="member-info-content">
                   <h4>Pastor Dare Kolawole </h4>
                   <span>Lead Pastor, GHarvest Church
 Island</span>
                   {/* <div className="social">
//                     <a href=""><i className="fa fa-twitter"></i></a>
//                     <a href=""><i className="fa fa-facebook"></i></a>
//                     <a href=""><i className="fa fa-google-plus"></i></a>
//                     <a href=""><i className="fa fa-linkedin"></i></a>
//                   </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div style={colStyle}>
              <div className="member">
              <img style={containerStyle} src="assets/img/tt.png" className="img-fluid" alt=""/>
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Crystal Berger</h4>
                  <span>Founder, EBO & Host of the Counter Culture Podcast</span>
                  {/* <div className="social">
//                     <a href=""><i className="fa fa-twitter"></i></a>
//                     <a href=""><i className="fa fa-facebook"></i></a>
//                     <a href=""><i className="fa fa-google-plus"></i></a>
//                     <a href=""><i className="fa fa-linkedin"></i></a>
//                   </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div style={colStyle}>
              <div className="member">
              <img style={containerStyle} src="assets/img/unknow1.png" className="img-fluid" alt=""/>
                  <div className="member-info">
                      <div className="member-info-content">
                        {/* <h4>Rev Victor Adeyemi</h4>
//         <span>Senior Pastor, GHarvest Church, Int’l.</span> */}
        {/* <div className="social">
//           <a href=""><i className="fa fa-twitter"></i></a>
//           <a href=""><i className="fa fa-facebook"></i></a>
//           <a href=""><i className="fa fa-google-plus"></i></a>
//           <a href=""><i className="fa fa-linkedin"></i></a>
//         </div> */}
                  </div>
                </div>
              </div>
            </div>  <div style={colStyle}>
              <div className="member">
              <img style={containerStyle} src="assets/img/unknow2.png" className="img-fluid" alt=""/>
                  <div className="member-info">
                      <div className="member-info-content">
                        {/* <h4>Rev Victor Adeyemi</h4>
//         <span>Senior Pastor, GHarvest Church, Int’l.</span> */}
        {/* <div className="social">
//           <a href=""><i className="fa fa-twitter"></i></a>
//           <a href=""><i className="fa fa-facebook"></i></a>
//           <a href=""><i className="fa fa-google-plus"></i></a>
//           <a href=""><i className="fa fa-linkedin"></i></a>
//         </div> */}
                  </div>
                </div>
              </div>
            </div>  <div style={colStyle}>
              <div className="member">
              <img style={containerStyle} src="assets/img/unknow1.png" className="img-fluid" alt=""/>
                  <div className="member-info">
                      <div className="member-info-content">
                        {/* <h4>Rev Victor Adeyemi</h4>
//         <span>Senior Pastor, GHarvest Church, Int’l.</span> */}
        {/* <div className="social">
//           <a href=""><i className="fa fa-twitter"></i></a>
//           <a href=""><i className="fa fa-facebook"></i></a>
//           <a href=""><i className="fa fa-google-plus"></i></a>
//           <a href=""><i className="fa fa-linkedin"></i></a>
//         </div> */}
                  </div>
                </div>
              </div>
            </div>  <div style={colStyle}>
              <div className="member">
              <img style={containerStyle} src="assets/img/unknow2.png" className="img-fluid" alt=""/>
                  <div className="member-info">
                      <div className="member-info-content">
                        {/* <h4>Rev Victor Adeyemi</h4>
//         <span>Senior Pastor, GHarvest Church, Int’l.</span> */}
        {/* <div className="social">
//           <a href=""><i className="fa fa-twitter"></i></a>
//           <a href=""><i className="fa fa-facebook"></i></a>
//           <a href=""><i className="fa fa-google-plus"></i></a>
//           <a href=""><i className="fa fa-linkedin"></i></a>
//         </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Repeat the above structure for other team members */}
          </div>
        </div>
      </section>
    </div>
  );
}
