import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"



export default function Subscribe(){
    return(
        <>
        <div className="pt-40 relative top-[230em] md:top-[0] mx-20">
        <Separator className="mt-20"/>

        <div className="place-self-center pt-5">
        

                <div className="">
                <h1 className="text-2xl md:text-4xl font-bold font-serif px-10 md:px-20 pt-16">
                    Drop Me a Line, Let Me Know What Your Think</h1>
                <div>
                
                    <div className="container w-[300px] md:w-[1200px] md:flex pt-10 px-10 md:px-20">
                        <div className="container w-[400px] md:w-[800px] ">
                    <Label htmlFor="picture" className="text-gray-500">First Name *</Label>
                    <Input type="email" placeholder="___________________________________________________________________" className="mt-2 border-none shadow-none"/>
                    </div>

                    <div className="container w-[400px] md:w-[800px] ">
                    <Label htmlFor="picture" className="text-gray-500">Last Name *</Label>
                    <Input type="email" placeholder="_____________________________________________________________" className="mt-2 border-none shadow-none"/>
                    </div>
                    
                    </div>
                    <div className="container w-[450px] md:w-[1600px] pt-5 px-10 md:px-0">
                    <Label htmlFor="picture" className="text-gray-500">Email *</Label>
                    <Input type="email" placeholder="_______________________________________________________________________________________________________" className="mt-2 pt-5 border-none shadow-none block md:hidden"/>
                    <Input type="email" placeholder="______________________________________________________________________________________________________________________________________________" className="mt-2 pt-5 border-none shadow-none hidden md:block"/>
                    </div>

                    <div className="container w-[450px] md:w-[1600px] pt-5  px-10 md:px-0">
                    <Label htmlFor="picture" className="text-gray-500">Message...</Label>
                    <Textarea placeholder="____________________________________________" className="mt-2 border-none shadow-none block md:hidden"/>
                    <Textarea placeholder="_______________________________________________________________________________________________________________________________________________" className="mt-2 border-none shadow-none hidden md:block"/>
                    </div>

                    <Button className="bg-indigo-600 mx-5 text-base font-light px-20 rounded-none">
                        Subscribe</Button>
                    
                </div>
                </div>
                </div>
            <Separator className="mt-14"/>
            </div>
        </>
    );
}