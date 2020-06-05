import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
    
      var torturi = this.props.data.torturi.map(function(torturi){
        return <div key={torturi.cofetarie}><h3>{torturi.cofetarie}</h3> <span>&bull;</span>
        <p>{torturi.description}</p></div>
      })
      
      var fotovideo = this.props.data.fotovideo.map(function(fotovideo){
        return <div key={fotovideo.name}><h3>{fotovideo.name}</h3> <span>&bull;</span>
            <p>{fotovideo.description}</p>
        </div>
      })

      var sali = this.props.data.sali.map(function(sali){
        return <div key={sali.sala}><h3>{sali.sala}</h3>
            <p className="info">{sali.capacitate}</p> <span>&bull;</span>
            <p>{sali.description}</p>
        </div>
      })

    }

    return (
      <section id="resume">

      <div className="row torturi">
         <div className="three columns header-col">
            <h1><span>Torturi</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {torturi}
               </div>
            </div>
         </div>
      </div>


      <div className="row sali">

         <div className="three columns header-col">
            <h1><span>Sali evenimente</span></h1>
         </div>

         <div className="nine columns main-col">
          {sali}
        </div>
    </div>

      <div className="row foto">

         <div className="three columns header-col">
            <h1><span>Foto & Video</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{fotovideo}
            </p>
			   </div>
      </div>
   </section>
    );
  }
}

export default Resume;
