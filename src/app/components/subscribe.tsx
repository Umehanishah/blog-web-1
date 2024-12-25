import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"


export default function Subscribe(){
    return(
        <>
        <div className="pt-20 md:pt-96"></div>
        <Separator className="mt-10 md:mt-20"/>

        <div className="place-self-center pt-5">
        

                <div className="md:flex place-self-center">
                <h1 className="text-2xl md:text-4xl font-bold font-serif px-10 md:px-20 pt-16">
                    Never Miss a New Post.</h1>
                <div>
                    <div className="pt-5">
                    <Label htmlFor="picture" className="text-gray-500">Email</Label>
                    <Input type="email" placeholder="______________________________________________________________________________________________________________________________________________" className="mt-2 pt-5 border-none shadow-none"/>
                    <Button className="bg-indigo-600 mx-5 mt-2 text-xs rounded-none">
                        Subscribe</Button>
                        </div>
                    <Checkbox id="terms" />
                    <label
                        htmlFor="terms"
                        className=" mx-2 text-sm text-gray-500 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                         Yes, subscribe me to your newsletter.
                    </label>
                </div>
                </div>
                </div>
            <Separator className="mt-14"/>
        </>
    );
}