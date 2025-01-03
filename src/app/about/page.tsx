
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/app/components/navigation";
import Comments from "@/app/comment/comment";
import Footer from "@/app/components/footer";


export default function About() {
    return ( 
        <>
        <Navigation/>
       <div className="container  w-[300px] sm:w-[500px] md:w-[1200px] place-self-center pt-10">
            
                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300">
                <div className="container w-[300px] sm:w-[500px] md:w-[1000px] h-[full] place-self-center border border-black">
                 <div className="md:flex">
                    <div className="container  w-[300px] sm:w-[500px]">
                  <Image src="/img-10.jpg" alt="img-10" width={500} height={300}/>
                  </div>
                  <div className="container  w-[300px] sm:w-[500px]">
                  <h2 className="pt-20 px-5 text-2xl font-serif font-light tracking-widest leading-10">Umehani, <br/> UI/UX Developer</h2>
                  <p className="container  w-[300px] sm:w-[450px] pt-5 px-5 font-light text-justify tracking-wider">
                    Hi there! I`m Umehani, a passionate UI/UX Developer and the creative mind behind this blog website. With a love for designing intuitive, user-friendly experiences and a knack for turning ideas into reality, I`ve built this platform as a space to share thoughts, stories, and inspiration with the world.</p>
                  
                  <div className="flex gap-5 pt-5 px-5 pb-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="red" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                  <Link href="/comment">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle-more"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>
                  </Link>
                  </div>
                  <hr/>
                  </div>
                  </div>
               

                <p className="py-10 px-10 tracking-wider leading-10 text-justify font-light">
                    As a UI/UX developer, I thrive on solving problems through design. I believe that every pixel, interaction, and animation should serve a purpose, creating seamless and enjoyable experiences for users. My journey in the world of design and development has been driven by curiosity, creativity, and a constant desire to learn and grow.
                    This blog website is a reflection of my passion for both design and storytelling. It`s a place where I combine my technical skills with my love for writing, curating content that resonates with readers. Whether it`s sharing insights about design, exploring nostalgic themes, or simply documenting life`s little moments, this platform is my canvas to express and connect.
                    When I`m not coding or designing, you`ll find me sketching ideas in my notebook, exploring new tools and technologies, or sipping coffee while brainstorming my next project. I`m a firm believer in the power of simplicity and the beauty of thoughtful design, and I strive to bring that philosophy into everything I create.
                    Thank you for visiting this space and being a part of my journey. I hope you find inspiration, comfort, and joy here—just as I`ve poured my heart into building it. Let`s explore, create, and grow together!
                    Feel free to reach out or connect with me—I`d love to hear your thoughts, feedback, or just chat about design and life.
                    Warm regards.<br/>
                        <span className="font-bold">Umehani, UI/UX Developer & Creator</span></p>
                </div>
                
                </div>
           </div>
           
           <Comments/>
           <Footer/>
           </>
    )
  }
