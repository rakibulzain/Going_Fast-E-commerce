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
    <div className="bg-[#e8ebe2] min-h-screen py-10">
      <div className="p-6 max-w-4xl mx-auto bg-white rounded-2xl shadow-xl mt-10">

        {/* Product Title */}
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900 tracking-wide">
          {product.name}
        </h1>

        {/* Image Box */}
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            className="w-full h-[450px] object-cover transform hover:scale-105 duration-500"
            src={product.imageURL}
            alt={product.name}
          />
        </div>

        {/* Details Section */}
        <div className="mt-6 space-y-4 text-gray-800">
          <p className="text-lg">
            <span className="font-semibold">Brand:</span> {product.brand}
          </p>

          <p className="text-lg">
            <span className="font-semibold">Gender:</span> {product.gender}
          </p>

          <p className="text-lg">
            <span className="font-semibold">Category:</span> {product.category}
          </p>

          <p className="text-xl font-bold text-green-700 flex items-center gap-3">
            Price:
            <span className="text-3xl font-extrabold text-green-600">
              ${product.price}
            </span>
            {product.discount > 0 && (
              <span className="text-sm bg-red-600 text-white px-2 py-1 rounded-md">
                -${product.discount} OFF
              </span>
            )}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-6">
          <button className="w-1/2 bg-blue-700 text-white py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-blue-900 duration-300">
            Buy Now
          </button>

          <button className="w-1/2 bg-gray-800 text-white py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-black duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>

  );
}
