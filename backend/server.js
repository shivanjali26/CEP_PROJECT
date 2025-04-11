const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = express.json;
const productRoutes = require('./routes/productRoutes');
const app = express();
app.use(cors());
app.use(bodyParser());
app.use('/uploads', express.static('uploads'));
mongoose.connect("mongodb+srv://Shivanjali2006:Sushiv1234@cepusers.vqybn.mongodb.net/?retryWrites=true&w=majority&appName=cepUsers", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((err) => console.log(err));

app.use("/api/auth", require("./routes/auth")); 
app.use('/api/products', productRoutes);
const PORT = process.env.PORT || 5001;
app.listen(5001, () => console.log("Server running on port 5000"));

const router = express.Router();
const Product = require('./models/Product'); // Make sure Product Model is correct

router.post('/api/products/sell', async (req, res) => {
	try {
		const { name, email, phone, address, description, category, price, image } = req.body;
		const newProduct = new Product({
			name,
			email,
			phone,
			address,
			description,
			category,
			price,
			image,
		});
		await newProduct.save();
		res.status(201).json({ message: 'Product added successfully', product: newProduct });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
});

module.exports = router;
