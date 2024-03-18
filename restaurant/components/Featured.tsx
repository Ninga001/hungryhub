import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { get_featured_products } from '@/app/backend';

const Featured = () => {

  const [featuredProducts, setFeaturedProducts] = useState<productModel[]>([]);

  const load_products = () => {
    get_featured_products()
    .then((response) => {
      setFeaturedProducts(response.data.products)
    })
  }

  useEffect(() => {
    load_products()
  },[])
  

  const imageLoader = (url : string | undefined) => {
    return `http://localhost:8000${url}`;
  }

  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[70vh]"
          >
            {/* IMAGE CONTAINER */}
            {item.image && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
              <Image 
                loader={() => imageLoader(item!.image)}
                src={"http://localhost:8000"+item.image} 
                alt="" 
                fill 
                className="object-contain" 
              />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
              {/* "/temporary/p1.png" */}
                {item.title}</h1>
              <p className="p-4 2xl:p-8">
                {/* Desc */}
                {item.description}</p>
              <span className="text-xl font-bold uppercase ">kshs  {item.price}</span>
                 {/* Kshs 300 */}
              <button className="bg-green-500 text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// const Featured = () => {
//   return (
//     <div className='w-screen overflow-x-scroll text-red-500'>
//        {/* WRAPPER */}
//        <div className='w-max flex'>
//         {/* SINGLE ITEM */}
//         {featuredProducts.map((item => (
//         <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'>
//           {/* justify around */}
//           {/* IMAGE CONTAINER */}
//           {item.img && (
//           <div  className='relative flex-1 w-full'>
//             <Image src={item.img}
//            
//              alt="" fill 
//              className='object-contain '/>
//           </div>
//           )}
//           {/* TEXT CONTAINER */}
//           <div className='flex-1 flex flex-col items-center text-center gap-4'>
//             <h1  className='text-xl font-bold uppercase'>{item.title}
//               {/* Title */}
//               </h1>
//             <p className='p-4'>
//               {item.desc}
//             </p>
//             <span className='text-xl font-bold'>
//            {item.price}
//         m
//   );
// };

export default Featured
