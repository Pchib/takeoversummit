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
    var Subject = event.target.header.value;
    var bgurl = event.target.bgurl.value;
    var websiteurl = event.target.websiteurl.value;
    var imageurl = event.target.imageurl.value;

    // fetch('https://localhost:3001/api/imageemail',
    fetch('https://takeoverbackend.onrender.com/api/imageemail',
     {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
      Subject,
      bgurl,
      websiteurl,
      imageurl
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


    return (
      <div>
      

   
     
      <div style={{marginTop:"200px"}}>
                     <div id="contact">
                             <div className="container">
                                 <div className="row">
                                    
                                     <form action="#"  onSubmit={this.handleSubmit}className="col-md-12 col-sm-12" id="contact-form" role="form">
                                         <div className="col-md-6 col-sm-12 wow fadeIn" data-wow-delay="0.3s">
                                             <input name="header" type="text" className="form-control" id="name" placeholder="Subject"/>
                                         </div>
                                         <div className="col-md-6 col-sm-12 wow fadeIn" data-wow-delay="0.3s">
                                             <input name="websiteurl" type="text" className="form-control" id="websiteurl" placeholder="websiteurl"/>
                                         </div> 
                                         <div className="col-md-6 col-sm-12 wow fadeIn" data-wow-delay="0.3s">
                                             <input name="imageurl" type="text" className="form-control" id="imageurl" placeholder="imageurl"/>
                                         </div>    <div className="col-md-6 col-sm-12 wow fadeIn" data-wow-delay="0.3s">
                                             <input name="bgurl" type="text" className="form-control" id="bgurl" placeholder="bgurl"/>
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
