import Navigation from "@/app/components/navigation";
import Header from "@/app/components/header";
import Subscribe from "@/app/components/subscribe";
import Blogs_data from "@/app/components/blogs_data";
import About from "@/app/components/about";
import Comment from "./comment/comment";
import Follow from "./components/follow";
import Footer from "./components/footer";




export default function Home() {
  return (
    <>
    <Navigation/>
    <Header/>
    <Subscribe/>
    <div className="lg:flex gap-10 place-self-center">
    <Blogs_data/>
    <div>
    <About/>
    <Follow/>
    </div>
    </div>
    <Comment/>
    <Footer/>
   
    </>
    );
}
