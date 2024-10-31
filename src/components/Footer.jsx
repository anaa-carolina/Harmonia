// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {

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

    return (
        <footer className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>Harmonia</h2>
                    <p>Harmonia é a sua loja de instrumentos musicais, oferecendo uma variedade de produtos para músicos de todos os níveis.</p>
                </div>

                <div className="footer-section links">
                    <h3>Links Úteis</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#products"onClick={scrollToProducts}>Produtos</a></li>
                        <li><a href="#footer">Contato</a></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h3>Contato</h3>
                    <p>Endereço: Rua dos Músicos, 900</p>
                    <p>Telefone: (11) 91111-1111</p>
                    <p>Email: contato@harmonia.com</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 Harmonia - Todos os direitos reservados</p>
            </div>
        </footer>
    );
};

export default Footer;
