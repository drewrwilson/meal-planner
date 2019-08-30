import React from 'react';
import '../App.css';

class Footer extends React.Component {
  render() {
      return (
        <footer className="footer wrapper">
          <div className="full-width">
            <p>Made by <a href='https://drewrwilson.com'>Drew</a>. This is an example react app. See the <a href="https://github.com/drewrwilson/meal-planner">code on github</a>.</p>
          </div>
        </footer>
      );
  }
}

export default Footer;
