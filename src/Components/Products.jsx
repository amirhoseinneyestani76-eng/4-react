import React, { useEffect, useState } from "react";
import ProductsCards from "./ProductsCards";
import Loading from "./Loading";

export default function Products() {
  const [Products, setProducts] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    })();
  }, []);
  const items = Products?.map((pr) => {
    <ProductsCards
      key={pr?.id}
      title={pr?.title}
      category={pr?.category}
      price={pr?.price}
      description={pr?.description}
      image={pr?.image}
      rate={pr?.rating?.rate}
      count={pr?.rating?.count}
    />;
  });
  if (!Products) return <Loading />;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-4 gap-4">
      <div>
        <h2>List All of Products</h2>
        <button>Logout</button>
      </div>
      {items}
    </div>
  );
}
