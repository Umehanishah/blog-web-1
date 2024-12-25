import Link from "next/link";
import Image from "next/image";
import Navigation from "@/app/components/navigation";




  const blogs = [
    { 
      id: 2, 
      name: "Do Not Leave Tokyo Before Eating This Ramen", 
      description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and...", 
      year: "Mar 23, 2023",
      image: "/img-2.jpg"
    },
    { 
      id: 3, 
      name: "5 Songs That Make Me REALLY Happy", 
      description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and...", 
      year: "Mar 23,2023",
      image: "/img-3.jpg"
    },
    { 
      id: 4, 
      name: "Amsterdam 101: Redefining The French Fries", 
      description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and...", 
      price: 200,
      image: "/img-4.jpg"
    },
    { 
      id: 5, 
      name: "Turkey: Unique Festivals You Must Visit", 
      description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and...", 
      price: 250,
      image: "/img-5.jpg"
    },
    { 
      id: 6, 
      name: "Paris: Secrets Only The Locals Can Tell You", 
      description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and...", 
      price: 300,
      image: "/img-6.jpg"
    },
    { 
      id: 7, 
      name: "Back to Fiction: What I'm Reading This Summer", 
      description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and...", 
      price: 450,
      image: "/img-7.jpg"
    },
    { 
      id: 8, 
      name: "Best Podcasts to Listen to When Traveling", 
      description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and...", 
      price: 350,
      image: "/img-8.jpg"
    },
  ];
  

export default function Blog() {
    return ( 
        <section>
            <Navigation/>
            <div className="mx-10 md:mx-0 md:ml-40 md:mr-5">

                    <div className="pt-14">
                    <h2 className="text-xl tracking-[.30em] pb-10 font-light">
                        TRAIN OF THOUGHT</h2>
                    </div>
                
            <div className="">
            <div className="container w-[400px] md:w-[1000px] h-[600px]">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.id}`}
              className=""
            >
              <div className="border border-black mb-10 md:flex gap-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300">
                <Image
                  src={blog.image}
                  alt={blog.name}
                  width={300}
                  height={250}
                  className="place-self-center md:place-self-auto container w-[400px] md:w-[250px]"
                />
                <div className="px-5 md:px-0">
                  <div className="pt-5">
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
