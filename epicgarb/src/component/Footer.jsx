import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
      <div className="logo">
				<img src="logo.png" alt="LOGO" />
			</div>
        <p className="footer-links">
          <a href="/">home</a>
          <a href="/">home</a>
          <a href="/">home</a>
          <a href="/">home</a>
          <a href="/">home</a>
          <a href="/">home</a>
          <a href="/">home</a>
        </p>
        <p className="footer-company-name">EpicGarb</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fas fa-map-marker-alt"></i>
          <p>
            <span>New Delhi, India</span>
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+1.555.555.5555</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@organica.com">support@epicgarb.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit exercitationem beatae odit minus eaque, voluptates amet debitis eum eveniet cumque, qui nobis omnis 
        </p>
      </div>

      <p className="credit">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, in?
      </p>
    </footer>
  );
};

export default Footer;
