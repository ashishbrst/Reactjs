import React from 'react';

const Header = (props) => {
    return (
		<header className="navbar-fixed-top">
			<div className="container">
				<div className="row">
					<div className="col-sm-3 logo">
						 
					</div>
					<div className="col-sm-9">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
					    </button>
						<nav id="bs-example-navbar-collapse-1" className="collapse navbar-collapse">
							<ul>
								<li><a href="/">Home</a></li>
								<li><a href="">About US</a></li>
								 
								<li className="contact"><a href="contact">Contact</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>		
    );

}

export default Header;