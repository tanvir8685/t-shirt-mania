import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/orders'>Order</Link>
            <Link to='/about'>About</Link>
            <Link to='/try'>Try</Link>
            <Link to='/grandpa'>grandpa</Link>
        </nav>
    );
};

export default Header;