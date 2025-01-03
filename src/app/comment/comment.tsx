"use client"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { useState,ChangeEvent, FormEvent } from "react";


export default function Comment(){

    const [name,SetName] = useState<string>("")
    const [comment,SetComment] = useState<string>("")
    const [comments,SetComments] = useState<string[]>([])
    
    
    const input = (e:ChangeEvent<HTMLInputElement>)=>{
        SetName(e.target.value)
    }

    const inputComment = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        SetComment(e.target.value)
    }


    const handlesubmit = (e:FormEvent) => {
        e.preventDefault();
        if(name.trim() && comment.trim()){
            SetComments((prevComments:string[])=>{
               return [
                ...prevComments,
                `${name}:${comment}`,
            ]})
            SetName("")
            SetComment("")
        }
    }

    return(
        <div className="container  w-[300px] sm:w-[400px] lg:w-[1000px] place-self-center">
            <div className="pt-20">
                <h2 className="font-bold font-sans text-2xl my-4">Comments</h2>
                    <ul className="space-y-2 list-disc pl-6 font-semibold cursor-pointer">
                      
                    <li className="container  w-[300px] sm:w-[400px] lg:w-[1000px] text-justify marker font-light hover:font-semibold leading-8">
                    Umehani: Rewind to Simpler Times is such a nostalgic and heartfelt piece! It beautifully captures the longing for a time when life felt less complicated and more genuine. The way it evokes memories of carefree days, meaningful connections, and the little joys we often overlook is truly touching. It`s a gentle reminder to pause, reflect, and cherish the simplicity that still exists around us. This resonates deeply, especially in today`s fast-paced world. Thank you for this beautiful trip down memory lane! 🕰️💛
                    </li>
                        <ul className="space-y-2 list-disc font-semibold">
                            {comments.map((item, index) => (
                                <li
                                    key={index}
                                    className="marker text-black font-light hover:font-bold"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </ul>
                </div>
                <div className="container  w-[300px] sm:w-[400px] lg:w-[1000px] place-self-center">
                <h1 className="text-black font-bold pt-20 text-2xl font-serif tracking-wider">LEAVE A  COMMENT</h1>
                <div className="container  w-[300px] sm:w-[400px] lg:w-[1000px] mt-10 space-y-10 pb-10">
                    <div>
                        <label htmlFor="name"  className="text-black font-serif font-bold">Name:</label>
                        <Input type="text" value={name} onChange={input} className="border-black"/>
                    </div>
                    <div>
                        <label htmlFor="comment" className="text-black font-serif font-bold">Comment:</label>
                        <Textarea value={comment} onChange={inputComment}  rows={5} className="border-black"/>
                    </div>
                    <Button  variant={"secondary"} type="submit" onClick={handlesubmit} className="text-white hover:text-black text-lg font-serif px-10 py-5 bg-black hover:bg-transparent hover:border-2 hover:border-black">Post Comment</Button>
                    </div>
                </div>
        </div>
    )
}