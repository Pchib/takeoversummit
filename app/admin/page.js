"use client"
import React, { Component } from 'react'
import '@/public/assets/css/style.css'
import '@/public/assets/lib/bootstrap/css/bootstrap.min.css'
import '@/public/assets/lib/font-awesome/css/font-awesome.min.css'
import '@/public/assets/lib/animate/animate.min.css'
import '@/public/assets/lib/ionicons/css/ionicons.min.css'
// import '@/public/assets/lib/owlcarousel/assets/owl.carousel.min.css'
import '@/public/assets/lib/lightbox/css/lightbox.min.css'
import Script from 'next/script'
import Header from '@/components/Pages/Header'



const users = [
  { username: 'seun', password: 'seun@2024' },
  { username: 'isaac', password: 'isaac@2024' },
  // Add more users as needed
];


export default class page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      isLoggedIn: false,
    };
  }


  
  handleLogin = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    // Check if the entered credentials match any user in the database
    const isValidUser = users.some((user) => user.username === username && user.password === password);

    if (isValidUser) {
      this.setState({ isLoggedIn: true });
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };


  handleSubmit = (event) => {
    event.preventDefault();
    // Set loading to true when the form is submitted
    this.setState({ loading: true });

    // Your form submission logic...
    var header = event.target.header.value;
    var message = event.target.message.value;
    var videolink = event.target.videolink.value;

    // fetch('http://localhost:3001/api/inviteemail',
    fetch('https://takeoverbackend.onrender.com/api/inviteemail',
     {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
      header,
      message,
      videolink
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          console.log('Form submitted successfully!');
          alert('Form submitted successfully!');

        })
        .catch((error) => {
          console.error('Error:', error);
          console.log('Error submitting the form. Please try again.');
          alert('Error submitting the form!');

        }) .finally(() => {
          // Set loading to false when the fetch request is complete
          this.setState({ loading: false });
        });;

    const formEle = document.querySelector('form');
    const formDatab = new FormData(formEle);

  };
    
  render() {

        // If user is not logged in, render the login form
        if (!this.state.isLoggedIn) {
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

              {/* ... (existing script imports) */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <div>
            {/* ... (existing script imports) */}
            <div style={{ width: '90%', textAlign: 'center' }}>
              <form onSubmit={this.handleLogin}>
                <input style={{ marginBottom: '30px' }} name="username" type="text" className="form-control" placeholder="Username" />
                <input style={{ marginBottom: '30px' }} name="password" type="password" className="form-control" placeholder="Password" />
                <button className="btn btn-primary" type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
            </div>
          );
        }
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
     
      <div style={{marginTop:"200px"}}>
                     <div id="contact">
                             <div className="container">
                                 <div className="row">
                                    
                                     <form action="#"  onSubmit={this.handleSubmit}className="col-md-12 col-sm-12" id="contact-form" role="form">
                                         <div className="col-md-6 col-sm-12 wow fadeIn" data-wow-delay="0.3s">
                                             <input name="header" type="text" className="form-control" id="name" placeholder="Subject"/>
                                         </div>
                                         <div className="col-md-6 col-sm-12 wow fadeIn" data-wow-delay="0.3s">
                                             <input name="videolink" type="text" className="form-control" id="email" placeholder="Videolink"/>
                                         </div>
                                         <div className="col-md-12 col-sm-12 wow fadeIn" data-wow-delay="0.9s">
                                             <textarea name="message" rows="5" className="form-control" id="message"
                                                 placeholder="Message"></textarea>
                                         </div>
                                         <div className="col-md-offset-9 col-md-3 col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                             <input name="submit" type="submit" className="form-control" id="submit" 
                                             value={this.state.loading ? 'Loading...' : 'Send'}
                                             disabled={this.state.loading}
                                             />
                                         </div>
                                     </form>
                                 </div>
                             </div>
                         </div>
                 </div>
           </div>    )
  }
}
