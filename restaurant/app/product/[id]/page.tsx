"use client";
import { get_product } from "@/app/backend";
import Price from "@/components/Price";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ProductPage = () => {
  const path = window.location.href;
  const pathList = path.split("/");
  const id = pathList[pathList.length-1];

  const [product, setProduct] = useState<productModel>()

  const load_product = (pk : string) => {
    get_product(pk)
    .then((response) => {
      setProduct(response.data.product);
    })
  }

  useEffect(() => {
    if(id){
      load_product(id);
    }
  },[id])

  const imageLoader = (url : string | undefined) => {
    return `http://localhost:8000${url}`;
  }

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center">
      {/* IMAGE CONTAINER */}
      {product?.image && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            loader={() => imageLoader(product!.image)}
            src={"http://localhost:8000"+product.image}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      {product?.id && (
        <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
          <h1 className="text-3xl font-bold uppercase xl:text-5xl">{product.title}</h1>
          <p>{product?.description}</p>
          <Price price={product.price} id={product.id} options={product.options}/>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
