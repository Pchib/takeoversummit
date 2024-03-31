"use client"
import React, { Component } from 'react';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Set loading to true when the form is submitted
    this.setState({ loading: true });

    // Your form submission logic...
    var fullName = event.target.FullName.value;
    var email = event.target.Email.value;
    var phoneNo = event.target.PhoneNo.value;
    var modeOfParticipation = event.target.ModeOfParticipation.value;
    var summitDiscoveryMethod = event.target.SummitDiscoveryMethod.value;

    // fetch('https://localhost:3001/api/sendEmail',
    fetch('https://takeoverbackend.onrender.com/api/sendEmail',
     {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: event.target.FullName.value,
          email: event.target.Email.value,
          phoneNo: event.target.PhoneNo.value,
          modeOfParticipation: event.target.ModeOfParticipation.value,
          summitDiscoveryMethod: event.target.SummitDiscoveryMethod.value,
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          console.log('Form submitted successfully!');
        })
        .catch((error) => {
          console.error('Error:', error);
          console.log('Error submitting the form. Please try again.');
        });

    const formEle = document.querySelector('form');
    const formDatab = new FormData(formEle);

    fetch(
      'https://script.google.com/macros/s/AKfycbyA-JMs64INLVORSqgfRSWwJex5LXnnL2ZR8URhg52MbWoMg09J6kvj9BlfYzCFyodK8g/exec',
      {
        method: 'POST',
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert('Registration successfully!');
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      })
      .finally(() => {
        // Set loading to false when the fetch request is complete
        this.setState({ loading: false });
      });
  };

  render() {
    const containerStyle = {
      backgroundColor: 'black',
      color: 'white',
      transition: 'color 0.3s',
    };
    const inputStyle = {
      // width:'40%',
      // marginLeft:'300px',
     };  
     const labelStyle = {
      // color:'white',
      // marginTop:'15px',
     };
     const Style = {
      // color:'white',
      // marginTop:'15px',
     };

    
    return (
      <section  id="register" >
<div className="bodyform">
        <div>
       
          <div className="container">
            <div className="">
              <div className="ring" >
                <i style={{ '--clr': '#00ff0a' }}></i>
                <i style={{ '--clr': '#ff0057' }}></i>
                <i style={{ '--clr': '#fffd44' }}></i>
                <div className="login" style={{display:'flex', flexDirection: "column", width:'70%', alignItems:'center', justifyContent : 'center', marginLeft:'15%'}}>
                  <h2 style={{color:"white", textAlign:"center"}}>Register</h2>
                  <div className=''>          
                            <div className=''>
                  {/* <img src='assets/kc.png'/> */}
                  </div>
                  <div className=''>
                    <form className="form" onSubmit={this.handleSubmit}>
                      <div className="inputBx mb-1" style={{ textAlign: 'center' }}>
                        <div className='' style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                        {/* <div className=''>
                        <label style={labelStyle} htmlFor="FullName">Name</label>
                        </div> */}
                        <input style={inputStyle} type="text" id="FullName" name="FullName" placeholder="Full Name" required />
                        </div>
                      </div>
                      <div className="inputBx mb-1" style={{ textAlign: 'center' }}>
                      <div className='' style={{display:'flex', flexDirection:'row',justifyContent:'center'}}>
                      {/* <div> 
                         <label style={{color:'white', marginTop:'15px', marginRight: ''}} htmlFor="Email">Email</label>
                      </div> */}
                      
                        <input style={inputStyle} type="email" id="Email" name="Email" placeholder="Email" required />
                        </div>
                      </div>
                    
                      <div className="inputBx mb-1"  style={{ textAlign: 'center' }}>

<div style={{display:'flex', flexDirection:'row',justifyContent:'center'}}>
{/*                       
                        <div style={labelStyle}>       
                        
                        <label htmlFor="PhoneNo">Phone No.</label>
                        </div> */}
                        <input style={inputStyle} type="tel" id="PhoneNo" name="PhoneNo" placeholder="Phone No." required />
                        </div>
                      </div>
                      <div className="inputBx mb-1" style={{ textAlign: 'center' }}>

<div>
  
                          {/* <label htmlFor="ModeOfParticipation">Mode of Participation</label> */}


                        <select style={inputStyle}
                          id="ModeOfParticipation"
                          name="ModeOfParticipation"
                          className="inputBx2"
                          required
                          
                        >
                          <option value="" >Mode of Participation.</option>
                          <option style={containerStyle} value="physical">Physical</option> 
                          <option style={containerStyle} value="virtual">Virtual </option>
                        </select>
                      </div>
                      <div className="inputBx mb-1" style={{ textAlign: 'center' }}>
                        {/* <label htmlFor="SummitDiscoveryMethod">Summit Discovery Method</label> */}
                        <select style={inputStyle}
                          id="SummitDiscoveryMethod"
                          name="SummitDiscoveryMethod"
                          className="inputBx2"
                          placeholder="mode"
                          required
                        >
                          <option  value="" >How Did You Hear About Us</option>
                          <option style={containerStyle} value="website">Website</option>
                          <option style={containerStyle} value="social_media">Social Media</option>
                          <option style={containerStyle} value="Email">Email</option>
                          <option style={containerStyle} value="word_of_mouth">Word of Mouth</option>
                          <option style={containerStyle} value="other">Other</option>
                        </select>
                      </div>
                      </div>
                      <div className="inputBx" style={{ textAlign: 'center' }}>
                        <input
                          type="submit"
                          value={this.state.loading ? 'Loading...' : 'Submit'}
                          disabled={this.state.loading}
                        />
                      </div>
                    </form>
                  </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      
    );
  }
}
