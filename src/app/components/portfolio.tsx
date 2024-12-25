import Link from "next/link";
import Image from "next/image";




  const blogs = [
    { 
      id: 9, 
      name: "This is Umehani, the creater of this blog website.", 
      description: "click the blog and know me more...", 
      year: "Dec 24, 2024",
      image: "/img-10.jpg"
    },
    { 
        id: 10, 
        name: "I love to travel ...", 
        description: "click the blog and know me more...", 
        year: "Dec 24, 2024",
        image: "/img-7.jpg"
      },
      { 
        id: 11, 
        name: "I love to travel ...", 
        description: "click the blog and know me more...", 
        year: "Dec 24, 2024",
        image: "/img-8.jpg"
      },
      { 
        id: 12, 
        name: "I love to travel ...", 
        description: "click the blog and know me more...", 
        year: "Dec 24, 2024",
        image: "/img-9.jpg"
      },
    
  ];
  

export default function About() {
    return ( 
        <section>
            <div className="mr-40 ml-5">

                    <div className="pt-14">
                    <h2 className="text-xl tracking-[.30em] pb-10 font-light">
                        ABOUT ME</h2>
                    </div>
                
            <div className="">
            <div className="container w-[300px] h-[500px]">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.id}`}
              className=""
            >
              <div className="border border-black mb-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300">
                <Image
                  src={blog.image}
                  alt={blog.name}
                  width={300}
                  height={250}
                  className=""
                />
                <div className="">
                  <div className="pt-5 px-3">
                <p className="flex gap-5 text-xs text-gray-500 font-light mt-2">{blog.year}</p>
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
    )
  }
