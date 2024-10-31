import React, { useState } from 'react';
import './styles/Home.css';
import product01 from './img/pdt01.webp';
import product02 from './img/pdt02.webp';
import product03 from './img/pdt03.png';
import product04 from './img/pdt04.jpg';
import product05 from './img/pdt05.png';
import product06 from './img/pdt06.jpg';
import product07 from './img/pdt07.webp';
import product08 from './img/pdt08.webp';
import product09 from './img/pdt09.png';
import product10 from './img/pdt10.webp';

const Home = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [favoriteProducts, setFavoriteProducts] = useState({});

    const products = [
        {
            id: 1,
            name: 'Violão Acústico',
            description: 'Kit Violao Acustico Iniciante Estudante Bravo An100 Completo Cor Bk - Black Material Do Diapasão Padrão Orientação Da Mão Destro',
            price: 'R$ 799,00',
            image: product01,
        },
        {
            id: 2,
            name: 'Guitarra Elétrica',
            description: 'Guitarra Elétrica SG de Madeira Maciça Thomaz TEG 340',
            price: 'R$ 1.299,00',
            image: product02,
        },
        {
            id: 3,
            name: 'Piano Digital',
            description: 'Yamaha Piano Digital P225B (Com Pedal e Fonte)',
            price: 'R$ 5.500,00',
            image: product03,
        },
        {
            id: 4,
            name: 'Bateria Eletrônica',
            description: 'Roland VAD307 | Kit V-Drums Acoustic Design com módulo TD-17, novos pads de prato e ferragens',
            price: 'R$ 20.000,00',
            image: product04,
        },
        {
            id: 5,
            name: 'DJM-S7',
            description: 'Mesa de mistura DJ para atuações de 2 canais estilo scratching (Preto)',
            price: 'R$ 699,00',
            image: product05,
        },
        {
            id: 6,
            name: 'Baquetas para Bateria',
            description: 'BAQUETA VIC FIRTH PETER ERSKINE SPE2',
            price: 'R$ 80,00',
            image: product06,
        },
        {
            id: 7,
            name: 'Amplificador de Guitarra',
            description: 'Amplificador Guitarra Marshall Carbon Fiber MG50CFX',
            price: 'R$ 4.500,00',
            image: product07,
        },
        {
            id: 8,
            name: 'Trompete',
            description: 'Trompete Yamaha YTR-2330 BB Laqueado',
            price: 'R$ 6.700,00',
            image: product08,
        },
        {
            id: 9,
            name: 'Contra baixo',
            description: 'Contra Baixo Passivo 5 Cordas BB235 Vermelho YAMAHA',
            price: 'R$ 1.400,00',
            image: product09,
        },
        {
            id: 10,
            name: 'Pandeiro',
            description: 'Pandeiro Branco Com Pele Transparente Torelli Tp348Bc',
            price: 'R$ 500,00',
            image: product10,
        },
    ];

    const handleViewProduct = (product) => {
        setSelectedProduct(product);
    };

    const handleClose = () => {
        setSelectedProduct(null);
    };

    const toggleFavorite = (productId) => {
        setFavoriteProducts((prevFavorites) => ({
            ...prevFavorites,
            [productId]: !prevFavorites[productId],
        }));
    };



    return (
        <div className='product-home'>
            <div className='product-home-content'>
                <div className='product-grid' id="products">
                    {products.map(product => (
                        <div className='product-item' key={product.id}>
                            <h3>{product.name}</h3>
                            <img src={product.image} alt={product.name} />
                            <p>{product.description}</p>
                            <h4>{product.price}</h4>
                            <button onClick={() => handleViewProduct(product)}>Ver Produto</button>
                        </div>
                    ))}
                </div>
                { selectedProduct && (
                    <div className='product-modal'>
                        <div className='modal-content'>
                            <span className='close' onClick={handleClose}>&times;</span>
                            <h3>{selectedProduct.name}</h3>
                            <img src={selectedProduct.image} alt={selectedProduct.name} />
                            <p>{selectedProduct.description}</p>
                            <div className="price-favorite">
                                <h4 className="product-price">{selectedProduct.price}</h4>
                                <button
                                    className={`favorite-button ${favoriteProducts[selectedProduct.id] ? 'favorited' : ''}`}
                                    onClick={() => toggleFavorite(selectedProduct.id)}
                                >
                                    <span className="material-symbols-outlined">
                                        favorite
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
