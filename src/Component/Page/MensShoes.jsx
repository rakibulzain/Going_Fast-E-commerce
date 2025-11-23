import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function MensShoes() {

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
    const menProducts = products.filter(item => item.gender === "MEN");
    return (
        <div className='bg-[#e8ebe2] border border-b-black'>
            <div className="flex justify-center items-center mt-5 ">
                <h1 className="text-3xl text-black font-semibold underline underline-offset-8 ">Mens Shoes <span className="text-blue-500">Products</span></h1>
            </div>


            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 mt-10 ">

                {menProducts.length > 0 &&(menProducts.map(product =>(<Card key={product.id}
                id={product.id}
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
