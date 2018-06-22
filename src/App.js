import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import HomeContent from './components/pages/home';
import Products from './components/pages/products';

class App extends Component {
  render() {
    return (
    //All content must be defined in one big div, also defining class with className
    //Base structure of all components is the same, can copy all the content of app.js file across.
      <Router>
      <div className="App">

        <Header />

        	<Route exact path='/' component={HomeContent} />
        	<h1>
        	<Route exact path='/Products' component={Products} />
        	</h1>

        <Footer />


      </div>
      </Router>
    );
  }
}

export default App;
