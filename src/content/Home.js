import React from 'react';
import main_banner from '../assets/images/banner.jpg';
  
import phoneIcon from '../assets/images/phone.png';
import faxIcon from '../assets/images/fax.png';
import emailIcon from '../assets/images/email.png';
import testiImg from '../assets/images/testi.png';
import nextarrow from '../assets/images/next.png';
import prearrow from '../assets/images/pre.png';
import Header  from '../components/Header';
import Footer  from '../components/Footer';
import '../assets/js/custom.js';

const Home = (props) => {
    return (
	
	 <div className="main-container">
	  <Header />
        <div className="main-banner">
			<img src={main_banner} alt="Lorem Ipsum"></img>
			<div className="banner-text-main">
				 
				<p>Lorem Ipsum is simply dummy text</p>
				<div className="banner-slider">
					<img src={emailIcon} alt="EMAIL"></img>
					<div className="slider-content">
						<h4>Lorum Ipsum</h4>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
						 
					</div>
				</div>
			</div>
         </div>
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="contact-features">
							<img src={phoneIcon} alt=""></img>
							<div className="contact-fea-inner">
								<span>CALL US TODAY</span>
								<a href="tel:1231236321">+123 123 6321</a>
							</div>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="contact-features">
							<img src={faxIcon} alt=""></img>
							<div className="contact-fea-inner">
								<span>FAX US</span>
								<a href="tel:+12343964450">+123 4 3964450</a>
							</div>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="contact-features">
							<img src={emailIcon} alt=""></img>
							<div className="contact-fea-inner">
								<span>EMAIL US</span>
								<a href="mailto:info@example.com ">info@example.com</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="main-tab">
				<div className="container">
					<div className="row">
						<div className="col-lg-10 col-lg-offset-1 bhoechie-tab-container">
							<div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 bhoechie-tab-menu">
							  <div className="list-group">
								<a href="" className="list-group-item active">About</a>
								<a href="" className="list-group-item">Management</a>
								<a href="" className="list-group-item">Registrations</a>
								<a href="" className="list-group-item">Registered agent</a>
							</div>
							</div>
							<div className="col-lg-9 col-md-9 col-sm-8 col-xs-12 bhoechie-tab">
								<div className="bhoechie-tab-content active">
									  <h2>About US</h2>
									  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged	</p>
                                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>										
								</div>
			
								<div className="bhoechie-tab-content">
									  <h2>Management</h2>
									  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged	</p>
									  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged	</p>
								</div>
					
								
								<div className="bhoechie-tab-content">
									  <h2>Registrations</h2>
									  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged	</p>
									  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged	</p>
								</div>
								<div className="bhoechie-tab-content">
									  <h2>Registered agent</h2>
									 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged	</p>
                                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged	</p>
								</div>
							
							</div>
						</div>
				  </div>
				</div>
			</div>


			<div className="testimonial">
				<div className="container">
					<div className="row">
						<div className="testimonial-inner col-lg-10 col-lg-offset-1 ">
							<div className="col-sm-3 text-center">
								<img src={testiImg} alt="testimonial"></img>
								<h5>Alex Ower</h5>
								<p>Partner</p>
							</div>
							<div className="col-sm-9">
								<h5>What others say about us</h5>
								<ul>
									<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
									<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
									<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
									<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
								</ul>
							</div>
							<div className="controller">
								<img src={prearrow} className="pre" alt=""></img>
								<img src={nextarrow} className="next" alt=""></img>
							</div>
						</div>
					</div>
				</div>
			</div>			
		
		  <Footer />	

		</div>
		
		

		
    );

}

export default Home;