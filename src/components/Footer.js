import React from 'react';
import youtubeIcon from '../assets/images/you.png';
import facebookIcon from '../assets/images/fb.png';
import twitterIcon from '../assets/images/twitter.png';
// import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

const Footer = (props) => {

    return (
	  <div className="footer_container">
        <footer>
			<div className="container">
				<div className="row">
					<div className="col-sm-3">
						<div className="footer-menu">
							<h4>ABOUT US </h4>
							<ul>
								<li><a href=""> CHAIRS</a></li>
								<li><a href="">CASUAL SPORT</a></li>
							 
							</ul>	
						</div>
					</div>
					<div className="col-sm-3">
						<div className="footer-menu">
							<h4>OUR SECTORS</h4>
							<ul>
								<li><a href="">Retail & Consumer </a></li>
								<li><a href="">Commodities </a></li>
								 
							</ul>	
						</div>
					</div>
					<div className="col-sm-3">
						<div className="footer-menu">
						<h4>LATEST </h4>
							<ul>
								<li><a href="">How to verify TRN Number ?</a></li>
								<li><a href="">What is your Tax Period ? ​</a></li>
								<li><a href="">Your Account</a></li>
								 
							</ul>
						</div>
					</div>
					<div className="col-sm-3">
						<div className="footer-menu">
						<h4>CONTACT </h4>
							<ul>
								<li className="ph-footer">Call us at:<a href="tel:123-295-4127"> 123-295-4127 </a></li>
								<li className="email-footer">Email:<a href="mailto:www.example.com"> www.example.com </a></li>
							</ul>
						</div>
					</div>
					<div className="col-sm-12">
						<div className="newsletter">
							<input type="text" placeholder="Enter your email address"></input>
							<input type="submit" value="Get Notified"></input>
						</div>
					</div>
				</div>
			</div>
		</footer>
		
		<div className="footer-bottom">
			<div className="container">
				<div className="row">
				<div className="col-sm-12">
					 
					<div className="f-menu">
							<ul className="Social-menu">
								<li><a href=""><img src={facebookIcon} alt="facebook"></img></a></li>
								<li><a href=""><img src={twitterIcon} alt="Twiiter"></img></a></li>
								<li><a href=""><img src={youtubeIcon} alt="youtube"></img></a></li>
							</ul>
					</div>
					</div>
					
				</div>
			</div>
		</div>
		
		</div>
		
    );

}

export default Footer;