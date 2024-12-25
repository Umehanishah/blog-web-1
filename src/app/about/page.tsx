"use client";

import Navigation from "@/app/components/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {Button} from "@/components/ui/button";


  const blogs = [
    { 
      id: 9, 
      name: "This is Umehani, the creater of this blog website.", 
      description: "I`m a dynamic individual with a passion for both teaching and technology. Having transitioned from a successful career in education to becoming a skilled web developer, you bring a unique blend of communication, creativity, and technical expertise to your work. Your background in computer courses has equipped you with a strong foundation, enabling you to tackle projects with confidence and precision. Currently, you’re working on innovative Node.js projects, exploring advanced concepts like implementing dark and light modes with Tailwind CSS. Your curiosity and drive to learn continually push you to new heights, making you an inspiring example of adaptability and growth.", 
      year: "Dec 24, 2024",
      image: "/img-10.jpg"
    },
    
    
  ];
  

export default function About() {

  const [products, setProducts] = useState([
    { id: 9, quantity: 1 },
  ]);

  // Handle adding quantity
  const increaseQuantity = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

    return ( 
        <section>
          <Navigation/>
            <div className="container w-[1200px] px-10 pb-10 place-self-center">
            
                    <div className="pt-14">
                    <h2 className="text-xl tracking-[.30em] pb-10 font-light">
                        ABOUT ME</h2>
                    </div>
                
            <div className="">
            <div className="container w-[1200px] h-[500px]">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.id}`}
              className=""
            >
              <div className="border border-black mb-10 md:flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300">
                <Image
                  src={blog.image}
                  alt={blog.name}
                  width={600}
                  height={250}
                  className=""
                />
                <div className="">
                  <div className="pt-5 px-3">
                <p className="flex gap-5 text-xs text-gray-500 font-light mt-2">{blog.year}</p>
                <h2 className="text-xl font-bold pt-5">{blog.name}</h2>
                <p className="text-xs text-gray-500 font-light pt-5 pb-5 leading-8 text-justify">{blog.description}</p>
                <hr/>
                <p className="flex gap-5 text-gray-500 text-xs font-light pt-5 pb-5 items-center">
                    0 Views <span className="px-5"> 0 Comments</span>
             
              {products.map((product) => (
            
            <div className="flex items-center text-lg">
                <Button className="bg-transparent shadow-none hover:bg-transparent"
                  onClick={() => increaseQuantity(product.id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="red" stroke="#ff0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart hover:fill-red-600"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </Button>
                {product.quantity}
              </div>
          ))}
                </p>
                </div>
               
                </div> 
              </div>
            </Link>
          ))}
        </div>
        </div>

</div>

</section>

    )
  }
