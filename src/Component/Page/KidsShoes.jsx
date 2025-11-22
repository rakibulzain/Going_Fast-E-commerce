import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function KidsShoes() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("/shoesdata.json")
            .then((res) => res.json())
            .then((data) => {
                const productsArray = Object.values(data);
                setProducts(productsArray);
            })
            .catch((err) => console.log(err));
    }, []);
    const kidsProducts = products.filter(item => item.gender === "KIDS");
    return (
        <div className='bg-[#e8ebe2] border border-b-black'>
            <div className="flex justify-center items-center mt-5 ">
                <h1 className="text-3xl text-black font-semibold underline underline-offset-8 ">Kids Shoes <span className="text-blue-500">Products</span></h1>
            </div>


            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 mt-10 ">

                {kidsProducts.length > 0 &&(kidsProducts.map(product =>(<Card key={product.id}
                name={product.name}
                brand={product.brand}
                price={product.price}
                mainprice={product.mainprice}
                imageURL={product.imageURL}
                discount={product.discount}
                gender={product.gender}/>)))}
                
            </div>


        </div>
    )
}
