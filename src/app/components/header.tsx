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
  paragraph: number;
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
    `*[_type == "blog" && slug.current == "cozy-autumn-moments"]{
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
    <div className="container w-[400px] md:w-[1200px] mx-auto">
      {blogs.map((blog) => (
        <Link key={blog._id} href={`/blogs/${blog.slug}`}>
          <div className="container w-[500px] md:w-[1000px] my-10 place-self-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                <h2 className="container w-[300px] relative top-[30px] tracking-widest text-xl border border-black py-5 px-3 bg-white font-serif font-light">
                FEATURED BLOG</h2>
          <div className="border border-black items-center ">
          
            {blog.image?.asset?.url ? (
              <img
                src={urlFor(blog.image).url()}
                alt={blog.name}
                className="w-400 h-200 object-cover"
              />
            ) : (
              <div className=" flex items-center justify-center bg-gray-200 rounded-t-lg">
                <p>Image not available</p>
              </div>
            )}

            <div className="container w-[500px] md:w-[800px] py-10 px-10">
              <h1 className="text-lg font-bold pt-4 text-black">{blog.title}</h1>
              <p className="text-md text-gray-800 mt-2 pb-5">{blog.description}</p>
              <hr />
              <div className="flex gap-5 pt-5">
                <Like/>

                <Link href="/comment">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-more">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    <path d="M8 12h.01" />
                    <path d="M12 12h.01" />
                    <path d="M16 12h.01" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          </div>
        </Link>
      ))}
    </div>
  );
}