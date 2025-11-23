import React from "react";
import { useSearchParams } from "react-router-dom";
import data from "../../data/shoesdata.json";

export default function SearchProduct() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query")?.toLowerCase() || "";

    const products = Object.values(data);

    const filtered = products.filter((item) =>
        item.name.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
        return (
            <h1 className="text-center text-red-500 mt-10">
                No products found for "{query}"
            </h1>
        );
    }

    return (
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 min-h-screen py-10 px-2 bg-[#e8ebe2] text-black">
            {filtered.map((product) => (
                <div
                    key={product.id}
                    className=" p-4 rounded-lg shadow hover:scale-105 transition bg-white"
                >
                    <img src={product.imageURL} alt={product.name} className="w-full h-60 bg-cover" />
                    <h2 className="font-bold text-xl mt-2">{product.name}</h2>
                    <p>Brand: {product.brand}</p>
                    <p>Price: ${product.price}</p>
                    <div className="mt-8 flex gap-6">
                        <button className="w-1/2 bg-blue-700 text-white py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-blue-900 duration-300">
                            Buy Now
                        </button>

                        <button className="w-1/2 bg-gray-800 text-white py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-black duration-300">
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
