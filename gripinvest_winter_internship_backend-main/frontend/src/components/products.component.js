import React, { useEffect, useState } from "react";
import UserService from "../services/user.service";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    UserService.getProducts().then(res => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="container">
      <h2>Investment Products</h2>
      {products.map(p => (
        <div key={p.id} style={{border:"1px solid #ccc", padding:"10px", margin:"10px"}}>
          <h4>{p.name}</h4>
          <p>Yield: {p.annual_yield}%</p>
          <p>Risk: {p.risk_level}</p>
        </div>
      ))}
    </div>
  );
}
