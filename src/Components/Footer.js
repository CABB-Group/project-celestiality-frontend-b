import React from 'react';
import '../CSS/Footer.css';
import logo from '../Images/Celestiality-logo.png';
import { Link } from 'react-router-dom';


class Footer extends React.Component {
    render() {
        return (
            <footer>
            <div style={{ backgroundColor: "rgb(38, 45, 145)" }}className="footer-logo" >
            <Link to="/" className="nav-link">
          <img src={logo} alt='logo' width="290px" height="36px" className="footer-img"></img>
          </Link>
            </div>
            </footer>
        )
    }
}

export default Footer;
