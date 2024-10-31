// src/components/Header.js
import React from 'react';
import '../styles/Header.css';

const Header = () => {
    const scrollToProducts = (e) => {
        e.preventDefault();
        const productsSection = document.getElementById('products');
        if (productsSection) {
            const headerOffset = 70; // Altere este valor conforme necessário para a altura do seu cabeçalho
            const elementPosition = productsSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const scrollToFooter = (e) => {
        e.preventDefault();
        const footerSection = document.getElementById('footer');
        if (footerSection) {
            footerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="header">
            <div className="header-logo">
                <h1>Harmonia</h1>
            </div>
            <nav className="header-nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#products" onClick={scrollToProducts}>Produtos</a></li>
                    <li><a href="#footer" onClick={scrollToFooter}>Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
