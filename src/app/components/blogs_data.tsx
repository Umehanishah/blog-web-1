import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Like from "@/app/components/like";



export interface Blog {
  imageUrl: string;
  name: string;
  _id: string;
  title: string;
  description: string;
  slug: string;
  paragraph: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
  year: string;
}

export default async function Data() {
  const blogs: Blog[] = await client.fetch(
    `*[_type == "blog"]{
      title,
      description,
      "slug": slug.current,
      paragraph,
      image {
        asset-> {
          _id,
          url
        }
      },
      year,
    }`
  );

 
  console.log(blogs);

  if (!blogs || blogs.length === 0) {
    return <p>No blogs found.</p>;
  }

  return (
    <div className="container w-[400px] md:w-[800px] mx-auto">
      <h2 className="text-xl tracking-[.30em] pb-5 font-light pt-10 place-self-center md:place-self-auto">
      OUR POPULAR BLOGS</h2>
      {blogs.map((blogs) => (
        <Link href={`/blogs/${blogs.slug}`}>
          <div
            className="container w-[450px] md:w-[800px] md:flex gap-5 my-5 mb-10 border border-black items-center place-self-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300">
            {blogs.image?.asset?.url ? (
              <img
                src={urlFor(blogs.image).url()}
                alt={blogs.name}
                className="w-full md:w-80 h-80 object-cover"
              />
            ) : (
              <div className="w-full h-48 flex items-center justify-center bg-gray-200 rounded-t-lg">
                <p>Image not available</p>
              </div>
            )}
           
            <div className="container w-[400px] px-5 py-5 md:px-0 md:py-0">
            <h1 className="text-lg font-bold pt-4 text-black">
              {blogs.title}
            </h1>
            <p className="text-md text-gray-800 mt-2 pb-5">
              {blogs.description}
            </p>
              <hr/>
              <div className="flex gap-5 pt-5">
              
            <Like/>
            
            <Link href="/comment">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle-more"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>
            </Link>
            </div>
            </div>
            
            
            </div>
         
        </Link>
      ))}
    </div>
  );
}
