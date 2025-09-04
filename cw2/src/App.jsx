import React from 'react';
import Product from './components/Product';

const App = () => {
  const products = [
    {
      title: "iPhone 15",
      price: 500000,
      inStock: true,
      description: "Latest Apple smartphone with A16 Bionic chip.",
      rating: 5,
      tags: ["New", "Sale"]
    },
    {
      title: "Samsung Galaxy S23",
      price: 450000,
      inStock: false,
      description: "Flagship Android phone with stunning display.",
      rating: 4,
      tags: ["Hot"]
    },
    {
      title: "AirPods Pro",
      price: 120000,
      inStock: true,
      description: "Wireless earbuds with noise cancellation.",
      rating: 5,
      tags: ["New"]
    }
  ];

  return (
    <div className="app">
      <h1>Product List</h1>
      <div className="products">
        {products.map((p, index) => (
          <Product key={index} {...p} />
        ))}
      </div>
    </div>
  );
};

export default App;
