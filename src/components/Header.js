import React from 'react';
import logo from '../cookbook.png';
import '../App.css';

class Header extends React.Component {
  render() {
      return (
        <header className="header wrapper">
          <div className="full-width">
            <h1>Meal Planner</h1>
            <h2>Find recipes for your diet within your budget</h2>
            <h3>An Example React App</h3>
            <img src={logo} className='logo' alt='RecipeApp'/>
          </div>
        </header>
      );
  }
}

export default Header;
