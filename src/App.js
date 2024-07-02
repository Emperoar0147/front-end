// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import './styles/App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <ProductList />
            <Footer />
        </div>
    );
}

export default App;
