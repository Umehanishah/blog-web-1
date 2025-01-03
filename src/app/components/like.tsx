"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Add() {
  const [blog, setblog] = useState([
    { id: 1 , quantity: 10 },
    
  ]);

  const increaseQuantity = (id: number) => {
    setblog((prevblog) =>
      prevblog.map((blog) =>
        blog.id === id
          ? { ...blog, quantity: blog.quantity + 1 }
          : blog
      )
    );
  };
  return (
    
      
          <div >
            {blog.map((blog) => (
              <div>
                <div className="flex items-center text-base md:text-lg font-semibold bg-gray-100 rounded-3xl px-5 py-2">
                    <Button className="px-3 bg-transparent hover:bg-transparent shadow-none"
                  onClick={() => increaseQuantity(blog.id)}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="red" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            
                </Button>
                {blog.quantity}
                </div>
                
              </div>
            ))}
          </div>
       
  );
}
