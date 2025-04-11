import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../styles/ProductDetails.css";

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product; // Optional chaining to prevent errors

  if (!product) {
    return <h2>No Product Information Available</h2>;
  }

  // Function to handle payment
  // const handlePayment = async () => {
  //   try {
  //     const { data } = await axios.post("http://localhost:5001/api/payment/create-order", {
  //       amount: product.price, // Amount in INR
  //     });

  //     const options = {
  //       key: "your_key_id_here", // Replace with your Razorpay Key ID
  //       amount: data.amount,
  //       currency: data.currency,
  //       order_id: data.id,
  //       name: "EduMart",
  //       description: `Payment for ${product.product_name}`,
  //       handler: function (response) {
  //         alert("Payment Successful!");
  //         console.log(response);
  //         // You can add a success page navigation here
  //       },
  //       prefill: {
  //         name: product.name,
  //         email: product.email,
  //         contact: product.phone,
  //       },
  //       theme: {
  //         color: "#3399cc",
  //       },
  //     };

  //     const rzp1 = new window.Razorpay(options);
  //     rzp1.open();
  //   } catch (error) {
  //     console.error("Error during payment:", error);
  //     alert("Payment failed! Please try again.");
  //   }
  // };

  return (
    <div className="product-detail">
      <img src={`http://localhost:5000/uploads/${product.image}`} alt={product.name} />
      <h2>{product.product_name}</h2>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> ₹ {product.price}</p>
      <p><strong>Seller Name:</strong> {product.name}</p>
      <p><strong>Contact Email:</strong> {product.email}</p>
      <p><strong>Phone:</strong> {product.phone}</p>
      <p><strong>Address:</strong> {product.address}</p>
      <p><strong>Category:</strong> {product.category}</p>

      {/* Pay Now Button */}
      <button className="pay-btn" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
};

export default ProductDetail;
