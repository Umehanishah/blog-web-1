import Image from 'next/image'
import { client } from "@/sanity/lib/client";
import { urlFor } from '@/sanity/lib/image';
import Navigation from '@/app/components/navigation';
import Footer from '@/app/components/footer';
import Comment from "@/app/comment/comment";
import { Blog } from '@/app/components/blogs_data';
import Link from 'next/link';


interface Params {
  params: {
    slug:string
  }
}

const blog = async (params:Params) => {

  const {slug} = params.params;

  const blog: Blog  = await client.fetch(`
    *[_type == "blog" && slug.current == $slug]{
          title,
          description,
            "slug":slug.current,
          paragraph,
          image{
            asset->{
              _id,
              url
      }
    },
    year,
  }[0]`, {slug}
) 
  return (
    <main>
      <Navigation/>
      
      <div className='border border-black place-self-center mt-20'>
      <div className="container w-[1100px] md:grid grid-cols-2">
      <div className="container w-[500px] py-10 md:py-0">
        <Image src={urlFor(blog.image).url()} alt={ blog.name } width={600} height={600}/>
      </div>
      <div className='container w-[500px] place-self-center'>
        <h2 className='text-4xl font-bold pt-20 tracking-wider'>
          {blog.title}
          </h2>
        <p className='container w-[400px] pt-10 mb-10 tracking-wider text-justify'> 
          {blog.description} 
        </p>
        <hr/>
        

        <div className="flex gap-5 py-5">
              
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="red" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              
              <Link href="/comment">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle-more"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>
              </Link>
              </div>
          
          <hr/>
          </div>

      </div>
      <p className='container w-[1000px] place-self-center text-base text-gray-500 text-justify py-10 px-10
      tracking-wider leading-10'>
          {blog.paragraph}
          </p>
      
          </div>
  
        <hr className='mt-20'/>
        <div>
          <Comment/>
        </div>
      <Footer/>
    </main>
  )
}

export default blog;