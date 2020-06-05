import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var parteneri = this.props.data.parteneri.map(function(parteneri){
        var parteneriImage = 'images/portfolio/'+parteneri.image;
        return <div key={parteneri.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={parteneri.url} title={parteneri.title}>
               <img alt={parteneri.title} src={parteneriImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{parteneri.title}</h5>
                     <p>{parteneri.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Parteneri.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {parteneri}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
