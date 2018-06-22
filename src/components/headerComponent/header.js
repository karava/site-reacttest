import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

//Replace class name in two places. Must have a capital letter.
class Header extends Component {
  render() {
    return (
    //All content must be defined in one big div, also defining class with className
    //Base structure of all components is the same, can copy all the content of app.js file across.
    <header>
        <div className="logo">
            LOGO
        </div>

        <nav>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <Link to="/Products">Products</Link>                    
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
