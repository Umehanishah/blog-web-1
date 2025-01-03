
import Link from "next/link";
import Image from "next/image";
import Like from "@/app/components/like";


export default function About() {
    return ( 
       <div className="container md:w-[200px] pt-10">
            
                <div className="place-self-center md:place-self-auto">
                    <h2 className="text-xl tracking-[.30em] pb-10 font-light">
                        ABOUT ME</h2>
                    </div>
                
                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300">
                <div className="container w-[400px] h-[780px] border border-black">
                  <Link href="/about">
                  <Image src="/img-10.jpg" alt="img-10" width={400} height={300}/>
                  <h2 className="pt-5 px-5 text-lg font-serif font-light tracking-widest">Umehani, UI/UX Developer</h2>
                  <p className="pt-5 px-5 font-light">
                    Hi there! I`m Umehani, a passionate UI/UX Developer and the creative mind behind this blog website. With a love for designing intuitive, user-friendly experiences and a knack for turning ideas into reality, I`ve built this platform as a space to share thoughts, stories, and inspiration with the world.</p>
                  <p className="pt-5 px-5"><Link href="/about">Click here to read more</Link></p>

                  <div className="flex gap-5 pt-5 px-5 items-center">
                  <Like/>
                  <Link href="/comment">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle-more"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>
                  </Link>
                  </div>
                  </Link>
                </div>
                
                </div>
           </div>
    )
  }
