import Image from "next/image";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button";


export default function Follow(){
    return(
        <>
        <div className="relative top-[240em] md:top-[0] px-10 md:px-0 place-self-center md:place-self-auto">
      <Separator className="container w-[400px] mt-32"/>
                <div className="pt-14">
                    <h2 className="text-xl tracking-[.30em] pb-10 font-light">
                        FOLLOW ME</h2>
                    </div>
                
                <div className="container w-[310px] grid grid-cols-2 gap-5 place-self-center md:place-self-auto">
                    <Image src="/img-7.jpg" alt="img-7" width={150} height={50} className="container w-[150px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300"/>
                    <Image src="/img-8.jpg" alt="img-8" width={150} height={50} className="container w-[150px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300"/>
                    <Image src="/img-9.jpg" alt="img-9" width={150} height={50} className="container w-[150px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300"/>
                    <Image src="/img-10.jpg" alt="img-10" width={150} height={50} className="container w-[150px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300"/>
                    <Image src="/img-12.jpg" alt="img-12" width={150} height={50} className="container w-[150px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300"/>
                    <Image src="/img-13.jpg" alt="img-13" width={150} height={50} className="container w-[150px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300"/>
                    <Image src="/img-11.jpg" alt="img-11" width={150} height={50} className="container w-[150px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300"/>
                    <Image src="/img-14.jpg" alt="img-14" width={150} height={50} className="container w-[150px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300"/>
                </div>
      
                <Separator className="container w-[400px] mt-20"/>
                    <div className="flex gap-10 items-center container w-[350px] py-5 place-self-center">
                    <Link href="www.facebook.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="black" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </Link>
                    <Link href="www.linkedin.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="black" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </Link>
                    <Link href="www.instagram.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="black" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </Link>
                    <Link href="www.github.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="black" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </Link>
                    </div>
                <Separator className="container w-[400px]"/>

                <div className="pt-14">
                    <h2 className="text-xl tracking-[.30em] pb-10 font-light">
                        SUBSCRIBE</h2>
                    </div>
                <div className="container w-[400px]">
                <Label htmlFor="picture" className="text-gray-500">Enter your email *</Label>
                <Input type="email" className="mt-2 rounded-none border-gray-700 shadow-md"/>
                <div className="flex items-center space-x-4 pt-5">
                    <Checkbox id="terms" className="rounded-none"/>
                    <Label htmlFor="terms" className="text-gray-500">Yes, subscribe me to your newsletter.</Label>
                </div>
                <Button className="bg-indigo-700 mt-5 rounded-none px-44">Submit</Button>
                </div>
                </div>
        </>

    );
}