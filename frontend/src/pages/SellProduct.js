import React, { useState } from 'react';
import axios from 'axios';
import '../styles/SellProduct.css';

function SellProduct() {
	const [productData, setProductData] = useState({
		name: '',
		email: '',
		phone: '',
		address: '',
		category: '',
		description: '',
		price: '',
		image: null,
	});

	const categories = ['Electronics','Books','Instruments', 'Others'];

	const handleChange = (e) => {
		const { name, value } = e.target;
		setProductData({ ...productData, [name]: value });
	};

	const handleImageChange = (e) => {
		setProductData({ ...productData, image: e.target.files[0] });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		for (const key in productData) {
			if (key === 'price') {
				formData.append(key, Number(productData[key])); // Convert price to number
			} else {
				formData.append(key, productData[key]);
			}
		}

		try {
			const res = await axios.post('http://localhost:5000/api/products/sell', formData);
			alert('Product Listed Successfully');
			setProductData({
				name: '',
				email: '',
				phone: '',
				address: '',
				category: '',
				product_name: '',
				description: '',
				price: '',
				image: null,
			});
		} catch (error) {
			alert('Failed to List Product');
		}
	};

	return (
		<div className="sell-product">
			<h2>Sell Your Product</h2>
			<form onSubmit={handleSubmit}>
				<input type="text" name="name" placeholder="Name" value={productData.name} onChange={handleChange} required />
				<input type="email" name="email" placeholder="Email" value={productData.email} onChange={handleChange} required />
				<input type="text" name="phone" placeholder="Phone Number" value={productData.phone} onChange={handleChange} required />
				<input type="text" name="address" placeholder="Address" value={productData.address} onChange={handleChange} required />
				<input type="number" name="price" placeholder="Price (₹)" value={productData.price} onChange={handleChange} required />
				<select name="category" value={productData.category} onChange={handleChange} required>
					<option value="">Select Category</option>
					{categories.map((cat, index) => (
						<option key={index} value={cat}>
							{cat}
						</option>
					))}
				</select>
				<input type="text" name="product_name" placeholder="Product Name" value={productData.product_name} onChange={handleChange} required />
				<textarea name="description" placeholder="Product Description" value={productData.description} onChange={handleChange} required></textarea>
				<input type="file" name="image" onChange={handleImageChange} required />
				<button type="submit">List Product</button>
			</form>
		</div>
	);
}

export default SellProduct;
