'use client';
import { pizzas } from '@/data'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { get_category_products } from '@/app/backend';

const CategoryPage = () => {
  const path = window.location.href;
  const pathList = path.split("/");
  const category = pathList[pathList.length-1];

  const [products, setProducts] = useState<productModel[]>([]);

  const load_category_products = (slug : string) => {
    get_category_products(slug)
    .then((response) => {
      setProducts(response.data.products);
    })
  } 

  useEffect(() => {
    if(category){
      load_category_products(category)
    }
  },[category])

  const imageLoader = (url : string | undefined) => {
    return `http://localhost:8000${url}`;
  }

  return (
    <div className="flex flex-wrap text-red-500">
      {products.map((item) => (
        <Link className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50" href={`/product/${item.id}`} key={item.id}>
          {/* IMAGE CONTAINER */}
          {item.image && (
            <div className="relative h-[80%]">
              <Image loader={() => imageLoader(item.image)} src={"http://localhost:8000"+item.image} alt="" fill className="object-contain"/>
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">kshs {item.price}</h2>
            <button className="hidden group-hover:block uppercase bg-green-500 text-white p-2 rounded-md">Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default CategoryPage
