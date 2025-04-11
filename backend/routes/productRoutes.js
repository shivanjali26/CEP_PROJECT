const express = require('express');
const multer = require('multer');
const Product = require('../models/Product');
const router = express.Router();

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads/');
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + '-' + file.originalname);
	},
});

const upload = multer({ storage: storage });

router.post('/sell', upload.single('image'), async (req, res) => {
	const { name, email, phone, address, category, product_name,description ,price} = req.body;

	try {
		const product = new Product({
			name,
			email,
			phone,
			address,
			category,
			product_name,
			description,
			price,
			image:req.file ? req.file.filename : null,
		});
		await product.save();
		res.status(201).json({ message: 'Product Listed Successfully' });
	} catch (err) {
		res.status(500).json({ message: 'Failed to List Product' });
	}
});
console.log('Product Routes Working...');
router.get('/', async (req, res) => {
	console.log("Fetching products API called");
	try {
		const products = await Product.find();
		console.log("Products found:", products);
		res.json(products);
	} catch (err) {
		console.error("Error fetching products:", err);
		res.status(500).json({ message: 'Failed to fetch products' });
	}
});
router.get('/:id', async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		res.json(product);
	} catch (err) {
		res.status(500).json({ message: 'Failed to fetch product' });
	}
});


module.exports = router;
