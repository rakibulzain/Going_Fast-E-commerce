
export default function Card({ title, price, model,image,mainprice }) {
  return (
    <div className="card-body bg-white w-full max-w-sm mx-auto shadow-lg rounded-lg p-6 mb-5">
      <div className="">
        <div className="bg-zinc-300 shadow-lg rounded-lg overflow-hidden ">
          <img className="w-full h-60 object-cover" src={image} alt="Shoes" />
        </div>
        <div className="mt-5">
          <h2 className="card-title text-3xl text-black">{title}</h2>
          <p className="text-black">{model}</p>
          <p className="text-black font-bold text-2xl mt-2">BDT {price}TK <span className="text-black/60 line-through text-sm ">BDT {mainprice}TK</span></p>
          
        </div>
        <div className="flex gap-4 mt-4 justify-center items-center">
          <button className="btn bg-blue-700 hover:bg-black duration-300 px-5">Buy Now</button>
          <button className="btn bg-blue-700 hover:bg-black duration-300">Add to cart</button>
        </div>
      </div>
    </div>
    
  
  )
}
