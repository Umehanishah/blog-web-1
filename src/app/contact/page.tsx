import Navigation from "@/app/components/navigation";
import Comment from "../comment/comment";
import Footer from "../components/footer";
import Subscribe from "../components/subscribe";

export default function Contact(){
    return(
        <>
        <Navigation/> 
        <Subscribe/>
        <Comment/>
        <Footer/>
        </>
    )
}