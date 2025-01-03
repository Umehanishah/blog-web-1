import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"


export default function Subscribe(){
    return(
        <>
        <div className="pt-10"></div>
        <Separator className="mt-5"/>

        <div className="container w-[300px] md:w-[1000px] place-self-center pt-5">
        

                <div className="container w-[300px] md:w-[1000px] md:flex place-self-center">
                <h1 className="container w-[300px] md:w-[500px] text-base sm:text-3xl md:text-4xl place-self-center md:place-self-auto font-bold font-serif px-10 md:px-20 md:pt-16">
                    Never Miss a New Post.</h1>
                <div className="container w-[300px] md:w-[500px] place-self-center md:place-self-auto">
                    <div className="pt-5">
                    <Label htmlFor="picture" className="text-gray-500">Email</Label>
                    <Input type="email" placeholder="______________________________________________________________________________________________________________________________________________" className="mt-2 pt-5 border-none shadow-none"/>
                    <Button className="bg-black hover:bg-white hover:border hover:border-black hover:text-black mx-5 mt-5 text-xs rounded-none">
                        Subscribe</Button>
                        </div>
                    <Checkbox id="terms" className="mt-10"/>
                    <label
                        htmlFor="terms"
                        className="mx-2 text-xs sm:text-sm text-gray-500 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                         Yes, subscribe me to your newsletter.
                    </label>
                </div>
                </div>
                </div>
            <Separator className="mt-14 mb-10"/>
        </>
    );
}