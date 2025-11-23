import { Link } from "react-router-dom";

export default function Card({ id, name, price, brand, imageURL, discount, gender }) {
  return (
    <div className="bg-white text-black w-full shadow-lg rounded-lg p-6">
      <div className="bg-gray-400 shadow-lg rounded-lg overflow-hidden relative">
        <img className="w-full h-60 object-cover" src={imageURL} alt={imageURL} />
        <p className="absolute  top-1  bg-red-700 text-white rounded px-2 text-sm">Discount $ {discount}</p>
      </div>
      <div className="mt-5">
        <h2 className="text-xl font-bold ">{name}</h2>
        <p className="text-black mb-2">{brand}</p>
        <div className="flex justify-between items-center">
          <p className="font-bold text-xl mt-2"> $ {price}</p>
          <p className="text-gray-700 text-sm"> {gender} </p>

        </div>


      </div>
      <div className="flex gap-4 mt-4 justify-center text-white">
        <Link to={`/product/${id}`}>
          <button className="bg-blue-700 px-4 py-2 rounded hover:bg-black duration-300">
            Buy Now
          </button>
        </Link>


        <button className="bg-blue-700 px-4 py-2 rounded hover:bg-black duration-300">
          Add to Cart
        </button>
      </div>
    </div >



  );
}
