import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home  from './content/Home';
import ContactUs  from './content/ContactUs';
import './assets/css/style.css';
import './assets/css/bootstrap.min.css';

const App = () => (
 <Router><div className="root_wrapper">
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={ContactUs} />
	  </div>
  </Router>
)
export default App;