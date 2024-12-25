import Navigation from "@/app/components/navigation";
import Header from "@/app/components/header";
import Subscribe from "@/app/components/subscribe";
import Blogs from "@/app/components/blogs";
import About from "@/app/components/about";
import Comments from "./components/comments";
import Follow from "./components/follow";
import Footer from "./components/footer";




export default function Home() {
  return (
    <>
    <Navigation/>
    <Header/>
    <Subscribe/>
    <div className="md:flex justify-between">
    <Blogs/>
    <div>
    <About/>
    <Follow/>
    </div>
    </div>
    <Comments/>
    <Footer/>
   
    </>
    );
}
