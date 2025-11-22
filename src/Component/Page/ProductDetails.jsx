import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();          // URL থেকে id নেওয়া
  const [product, setProduct] = useState(null);

  useEffect(() => {

    fetch("/shoesdata.json")
      .then(res => res.json())
      .then(data => {
      
        const productsArray = Object.values(data);

        const p = productsArray.find(item => item.id.toString() === id);
        setProduct(p);
      })
      .catch(err => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-5 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img
        className="w-full h-80 object-cover rounded-lg mb-4"
        src={product.imageURL}
        alt={product.name}
      />
      <p className="text-lg"><strong>Brand:</strong> {product.brand}</p>
      <p className="text-lg"><strong>Gender:</strong> {product.gender}</p>
      <p className="text-lg"><strong>Category:</strong> {product.category}</p>
      <p className="text-lg"><strong>Price:</strong> ${product.price}</p>
      <p className="text-lg"><strong>Discount:</strong> ${product.discount}</p>
    </div>
  );
}
