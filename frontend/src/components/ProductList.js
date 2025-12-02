import React, { useEffect, useState } from "react";

import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/products")
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.error('Error fetching products:', err));
    }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3>{p.title}</h3>
            <p>Price: ₹{p.price}</p>
            <p>Description: {p.desc}</p>
            <img 
                src={p.image}
                alt={p.title}
                width="200"
                onError={(e) => e.target.style.display = 'none'}
            />
            <p>Catagory: {p.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
