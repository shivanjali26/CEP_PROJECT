import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/BuyProduct.css';

const BuyProduct = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const selectedCategory = queryParams.get('category');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/products/');
                let filteredProducts = response.data;

                // Filtering Products by Selected Category
                if (selectedCategory) {
                    filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
                }
                setProducts(filteredProducts);
            } catch (err) {
                console.log('Failed to fetch products', err);
            }
        };
        fetchProducts();
    }, [selectedCategory]);

    const handleCardClick = (product) => {
        navigate(`/product/${product._id}`, { state: { product } });
    };

    const filterByCategory = (category) => {
        navigate(`/buyproduct?category=${category}`);
    };

    const clearFilter = () => {
        navigate('/buyproduct');
    };

    return (
        <div className="buy-product-page">
            <h2>{selectedCategory ? `${selectedCategory} Products` : 'All Products'}</h2>

            {/* Category Filters */}
            <div className="categories">
                <div className="category-buttons">
                    <div className="cat4">
                        <button onClick={() => filterByCategory('Electronics')}>Electronics</button>
                        <button onClick={() => filterByCategory('Books')}>Books</button>
                        <button onClick={() => filterByCategory('Instruments')}>Instruments</button>
                        <button onClick={() => filterByCategory('Others')}>Others</button>
                    </div>
                    <button onClick={clearFilter} className="clear-btn">Clear Filter</button>
                </div>
            </div>

            {/* Product Cards Grid */}
            <div className="products-container">
                {products.length === 0 ? <p>No products found.</p> : null}
                {products.map((product) => (
                    <div key={product._id} className="product-card" onClick={() => handleCardClick(product)}>
                        <img src={`http://localhost:5001/uploads/${product.image}`} alt={product.product_name} />
                        <h3>{product.product_name}</h3>
                        <p>{product.description}</p>
                        <p className="price">₹ {product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BuyProduct;
