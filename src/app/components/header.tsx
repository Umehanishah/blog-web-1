
"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const blogs = [
    { 
        id: 1, 
        name: "Back to Fiction: What I`m Reading This Summer", 
        description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....", 
        year: "Mar 23, 2023",
        image: "/img-1.jpg"
      },
    ]



export default function Header(){
    return(
        <>
        <section>
            <div className="mx-10 md:mx-40 place-self-center">

            <div className="pt-10">
            <div className="container w-[450px] md:w-[1000px] h-[500px]">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`./blogs/${blog.id}`}
              className=""
            >
            <h2 className="border border-black tracking-[.30em] text-xl font-light bg-white relative top-[10px] px-5">
                FEATURED POST</h2>
              <div className="border border-black mb-10">
                
                <Image
                  src={blog.image}
                  alt={blog.name}
                  width={1000}
                  height={250}
                  className=""
                />
                <div className="">
                  <div className="pt-5 px-5">
                <p className="text-xs text-gray-500 font-light mt-2">{blog.year}</p>
                <h2 className="text-xl font-bold pt-5">{blog.name}</h2>
                <p className="text-xs text-gray-500 font-light pt-5 pb-5">{blog.description}</p>
                <hr/>
                <p className="flex gap-5 text-gray-500 text-xs font-light pt-5 pb-5 items-center">
                    0 Views <span className="px-5"> 0 Comments</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart hover:fill-red-600"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
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
</>
);
}