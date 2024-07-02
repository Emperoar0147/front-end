// src/components/Header.js
import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header>
            <h1>KitchenHall</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
