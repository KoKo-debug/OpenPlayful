import React from 'react';



class Footer extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <section className="footer-container">
        <section className="email">
          Email Sign Up
        </section>

        <section className="Main-footer-info">
            See Full Restaurant List
        </section>

        <section className="links">
          links to different sites

        </section>
      </section>
    )
  }

}

export default Footer;