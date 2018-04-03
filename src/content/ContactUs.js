import React from 'react';
import mobile from '../assets/images/mobile.png';
import print from '../assets/images/print.png';
import at from '../assets/images/at.png';
import Header  from '../components/Header';
import Footer  from '../components/Footer';

const ContactUs = (props) => {
    return (
	
	<div className="contact-main">
	<Header/>
        <div className="page-titles">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						Contact Us
					</div>
				</div>
			</div>
		</div>
		<div className="container">
				<div className="row">
				<div className="col-sm-12">
					<h2 className="form-head">Contact us</h2>
				</div>
					<div className="col-sm-7 col-md-7 col-lg-9">
						<form className="contact-form">
						 <p>We Love To Hear From You!</p>
						  <div className="form-group">
							<input type="text" className="form-control" id="exampleInputName" placeholder="Name:"></input>
						  </div>
						 <div className="form-group">
							<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email:"></input>
						  </div>
						  <div className="form-group">
							<input type="text" className="form-control" id="exampleInputName" placeholder="Phone Number:"></input>
						  </div>
						  <div className="form-group">
							<textarea className="form-control" id="exampleTextarea" rows="3"  placeholder="Message:"></textarea>
						  </div>
						
						  <button type="submit" className="btn btn-primary">Submit</button>
						</form>
					</div>
					<div className="col-sm-5 col-md-5 col-lg-3">
						<div className="contact-right">
							<ul>
								<li><img src={mobile} alt="Phone"></img>Phone: <a href="tel:123-295-4127">123-295-4127</a></li>
								<li><img src={print} alt="Phone"></img>Fax: <a href="tel:+123.333.2233">+123.333.2233</a></li>
								<li><img src={at} alt="Phone"></img>Email: <a href="mailto:info@example.com"> info@example.com</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<Footer/>
</div>	
			
    );

}

export default ContactUs;
