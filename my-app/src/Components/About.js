import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var logopic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="logo-pic"  src={logopic} alt="Logo" />
         </div>
         <div className="nine columns main-col">
            <h2>Despre</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact</h2>
                  <p className="Details">
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
