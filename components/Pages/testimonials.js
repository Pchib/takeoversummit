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
import React, { Component } from "react";

// import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

// Dynamically import the OwlCarousel component with jQuery configuration
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  loading: () => <p></p>,
  // This ensures that the ProvidePlugin configuration is applied only when the component is loaded
  ssr: false,
});

export default class testimonials extends Component {
  render() {
    const styles = {
      body: {
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
      },
      header: {
        backgroundColor: "#323369" /* Blue background color */,
        color: "#ffffff" /* White font color */,
        padding: "20px",
        textAlign: "center",
      },
      content: {
        backgroundColor: "#ffffff" /* White background color */,
        color: "#000000" /* Black font color */,
        padding: "20px",
        textAlign: "center",
      },
      section: {
        marginBottom: "20px",
      },
    };

    const option = {
      loop: true,
      autoWidth: true,
      mergeFit:true,
      autoplay: true,
      lazyLoad: true,
      autoplayTimeout: 5500,
      animateout: "slideoutup",
      nav: false,
      dots: false,
    };
    const sizeCal ={
      paddingRight: "50px", paddingLeft: "50px"
    }

    return (
      <div style={{ marginTop: "-50px", marginBottom: "-70px" }}>
        <div
          class="modal fade bd-example-modal-ed"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div style={styles.body}>
                <header style={styles.header}>
                  <h1>Education</h1>
                  <div
          class="modal fade bd-example-modal-ed"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div style={styles.body}>
                <header style={styles.header}>
                  <h1>Education</h1>
                </header>

                <div style={styles.content}>
                  <div style={styles.section}>
                    <p>
                      For the education sector, Take Over At The Summit has been
                      a beacon of inspiration for aspiring young leaders. The
                      focus on forging a succession generation of leaders aligns
                      with the principles of Christ, emphasizing values and
                      ethics in leadership. The platform provides a unique
                      opportunity for networking and learning from world-class
                      leaders, fostering innovation and pushing boundaries in
                      the field of education.
                    </p>
                  </div>

                  {/* Repeat the structure for other sectors */}
                </div>
              </div>
            </div>
          </div>
          <div
          class="modal fade bd-example-modal-ed"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div style={styles.body}>
                <header style={styles.header}>
                  <h1>Education</h1>
                </header>

                <div style={styles.content}>
                  <div style={styles.section}>
                    <p>
                      For the education sector, Take Over At The Summit has been
                      a beacon of inspiration for aspiring young leaders. The
                      focus on forging a succession generation of leaders aligns
                      with the principles of Christ, emphasizing values and
                      ethics in leadership. The platform provides a unique
                      opportunity for networking and learning from world-class
                      leaders, fostering innovation and pushing boundaries in
                      the field of education.
                    </p>
                  </div>

                  {/* Repeat the structure for other sectors */}
                </div>
              </div>
            </div>
          </div>
        </div>        </div>                </header>

                <div style={styles.content}>
                  <div style={styles.section}>
                    <p>
                      For the education sector, Take Over At The Summit has been
                      a beacon of inspiration for aspiring young leaders. The
                      focus on forging a succession generation of leaders aligns
                      with the principles of Christ, emphasizing values and
                      ethics in leadership. The platform provides a unique
                      opportunity for networking and learning from world-class
                      leaders, fostering innovation and pushing boundaries in
                      the field of education.
                    </p>
                  </div>

                  {/* Repeat the structure for other sectors */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade bd-example-modal-bu"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div style={styles.body}>
                <header style={styles.header}>
                  <h1> Business and Economy</h1>
                </header>

                <div style={styles.content}>
                  <div style={styles.section}>
                    <p>
                    Take Over At The Summit has a significant impact on the business and economic sectors by bringing together leaders who exemplify Christ-centered principles in their professional lives. The event provides a platform for discussions on ethical business practices, innovation, and collaboration. Networking opportunities foster connections that contribute to the growth and development of a principled business community.
                    </p>
                  </div>

                  {/* Repeat the structure for other sectors */}
                </div>
              </div>
            </div>
          </div>
        </div> <div
          class="modal fade bd-example-modal-en"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div style={styles.body}>
                <header style={styles.header}>
                  <h1>Entertainment</h1>
                </header>

                <div style={styles.content}>
                  <div style={styles.section}>
                    <p>
                    In the realm of entertainment, Take Over At The Summit has created a space where leaders come together to share stories of grit, creativity, and boundary-pushing. The event serves as a platform to inspire young individuals to aspire to leadership roles in the entertainment industry. The principles of Christ guide these leaders, ensuring a values-driven approach in an industry often characterized by diverse influences.
                    </p>
                  </div>

                  {/* Repeat the structure for other sectors */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade bd-example-modal-po"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div style={styles.body}>
                <header style={styles.header}>
                  <h1>Politics</h1>
                </header>

                <div style={styles.content}>
                  <div style={styles.section}>
                    <p>
                    Take Over At The Summit plays a crucial role in the political landscape by bringing together leaders who are guided by the principles of Christ. The event fosters discussions on leadership that transcend political boundaries, emphasizing values, and inspiring the next generation of political leaders. The networking opportunities provided create a platform for leaders from different ethnic backgrounds to connect and collaborate.
                    </p>
                  </div>

                  {/* Repeat the structure for other sectors */}
                </div>
              </div>
            </div>
          </div>
        </div>


        <div
          class="modal fade bd-example-modal-re"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div style={styles.body}>
                <header style={styles.header}>
                  <h1>Religion</h1>
                </header>

                <div style={styles.content}>
                  <div style={styles.section}>
                    <p>
                    Given its focus on Christ-centered leadership, Take Over At The Summit significantly impacts the religious sector. Leaders converge to discuss and embody principles that align with Christ's teachings, fostering a generation of religious leaders who lead with integrity and compassion. The event serves as a unique platform for religious leaders to connect and share their experiences.
                    </p>
                  </div>

                  {/* Repeat the structure for other sectors */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade bd-example-modal-fa"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div style={styles.body}>
                <header style={styles.header}>
                  <h1>Family</h1>
                </header>

                <div style={styles.content}>
                  <div style={styles.section}>
                    <p>
                    In the context of family, Take Over At The Summit recognizes the importance of leadership within the family unit. By promoting principles rooted in the life of Christ, the event inspires individuals to take on leadership roles within their families, fostering strong, values-driven family units. The networking opportunities at the summit contribute to the exchange of ideas on building resilient and compassionate families.
                    </p>
                  </div>

                  {/* Repeat the structure for other sectors */}
                </div>
              </div>
            </div>
          </div>
        </div>


        <div
          class="modal fade bd-example-modal-me"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div style={styles.body}>
                <header style={styles.header}>
                  <h1>Media and Technology</h1>
                </header>

                <div style={styles.content}>
                  <div style={styles.section}>
                    <p>
                    For the dynamic sectors of media and technology, Take Over At The Summit serves as a catalyst for innovation and boundary-pushing. Leaders from these fields gather to share insights, discuss opportunities, and inspire the next generation. The principles of Christ guide discussions, ensuring ethical and responsible leadership in the ever-evolving landscape of media and technology.
                    </p>
                  </div>

                  {/* Repeat the structure for other sectors */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <OwlCarousel className="owl-theme" loop margin={2} {...option} nav>
          <div className="item">
            <section
              id="services"
              style={{ background: "transparent" }}
              className="section-bg"
            >
              <div className="container">
                <div className="bounceInUp" data--duration="1.4s">
                  <div
                    className="box "
                    style={sizeCal}
                  >
                    <button
                      type="button"
                      class=""
                      data-toggle="modal"
                      data-target=".bd-example-modal-ed"
                    >
                     <div class="icon" style={{background:"#eafde7"}}><i class="ion-ios-speedometer-outline" style={{color: "#41cf2e"}}></i>
                      </div>
                      <h4 className="title">
                        <a>
                          Education<br></br>
                          <br></br>
                        </a>
                      </h4>
                      <p className="description"></p>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="item">
            <section
              id="services"
              style={{ background: "transparent" }}
              className="section-bg"
            >
              <div className="container">
                <div className="  bounceInUp" data--duration="1.4s">
                  <div
                    className="box"
                    style={{ paddingRight: "50px", paddingLeft: "50px" }}
                  >  <button
                  type="button"
                  class=""
                  data-toggle="modal"
                  data-target=".bd-example-modal-bu"
                >
                   <div class="icon" style={{background:"#e6fdfc"}}><i class="ion-ios-paper-outline" style={{color: "#3fcdc7"}}></i>
                    </div>
                    <h4 className="title">
                      <a>
                        Business & <br></br>
                        Economy
                      </a>
                    </h4>
                    <p className="description"></p>
                    </button>
                  </div>
                </div>
              </div>
            </section>{" "}
          </div>
          <div className="item">
            <section
              id="services"
              style={{ background: "transparent" }}
              className="section-bg"
            >
              <div className="container">
                <div className="  bounceInUp" data--duration="1.4s">
                  <div
                    className="box"
                    style={{ paddingRight: "50px", paddingLeft: "50px" }}
                  >  <button
                  type="button"
                  class=""
                  data-toggle="modal"
                  data-target=".bd-example-modal-en"
                >
                <div class="icon" style={{background: "#e1eeff"}}><i class="ion-ios-world-outline" style={{color: "#2282ff"}}></i>
                    </div>
                    <h4 className="title">
                      <a>Entertainment </a><br></br>
                          <br></br>
                    </h4>
                    <p className="description"></p>
                    </button>
                  </div>
                </div>
              </div>
            </section>{" "}
          </div>
          <div className="item">
            <section
              id="services"
              style={{ background: "transparent" }}
              className="section-bg"
            >
              <div className="container">
                <div className="  bounceInUp" data--duration="1.4s">
                  <div
                    className="box"
                    style={{ paddingRight: "50px", paddingLeft: "50px" }}
                  >  <button
                  type="button"
                  class=""
                  data-toggle="modal"
                  data-target=".bd-example-modal-po"
                >
                   
              <div class="icon" style={{background: "#ecebff"}}><i class="ion-ios-clock-outline" style={{color: "#8660fe"}}></i>
                    </div>
                    <h4 className="title">
                      <a>Politics</a><br></br>
                          <br></br>
                    </h4>
                    <p className="description"></p>
                    </button>
                  </div>
                </div>
              </div>
            </section>{" "}
          </div>
          <div className="item">
            <section
              id="services"
              style={{ background: "transparent" }}
              className="section-bg"
            >
              <div className="container">
                <div className="  bounceInUp" data--duration="1.4s">
                  <div
                    className="box"
                    style={{ paddingRight: "50px", paddingLeft: "50px" }}
                  >  <button
                  type="button"
                  class=""
                  data-toggle="modal"
                  data-target=".bd-example-modal-re"
                >
                  
              <div class="icon" style={{background:"#fff0da"}}><i class="ion-ios-bookmarks-outline" style={{color: "#e98e06"}}></i>
                    </div>
                    <h4 className="title">
                      <a>Religion</a><br></br>
                          <br></br>
                    </h4>
                    <p className="description"></p>
                    </button>
                  </div>
                </div>
              </div>
            </section>{" "}
          </div>
          <div className="item">
            <section
              id="services"
              style={{ background: "transparent" }}
              className="section-bg"
            >
              <div className="container">
                <div className="  bounceInUp" data--duration="1.4s">
                  <div
                    className="box"
                    style={{ paddingRight: "50px", paddingLeft: "50px" }}
                  >
                      <button
                      type="button"
                      class=""
                      data-toggle="modal"
                      data-target=".bd-example-modal-fa"
                    >
                    <div class="icon" style={{background:"#fceef3"}}><i class="ion-ios-analytics-outline" style={{color: "#ff689b"}}></i>
                    </div>
                    <h4 className="title">
                      <a>Family</a><br></br>
                          <br></br>
                    </h4>
                    <p className="description"></p>
                    </button>
                  </div>
                </div>
              </div>
            </section>{" "}
          </div>{" "}
          <div className="item">
            <section
              id="services"
              style={{ background: "transparent" }}
              className="section-bg"
            >
              <div className="container">
                <div className="  bounceInUp" data--duration="1.4s">
                  <div
                    className="box"
                    style={{ paddingRight: "50px", paddingLeft: "50px" }}
                  >  <button
                  type="button"
                  class=""
                  data-toggle="modal"
                  data-target=".bd-example-modal-me"
                >
                <div class="icon" style={{background:"#eafde7"}}><i class="i-ion:bulb-outline w-1em h-1em" style={{color: "#41cf2e"}}></i>
                    </div>
                    <h4 className="title">
                      <a>
                        Media &<br></br>
                        Technology
                      </a>
                    </h4>
                    <p className="description"></p>
                    </button>
                  </div>
                </div>
              </div>
            </section>{" "}
          </div>
        </OwlCarousel>
      </div>
    );
  }
}
