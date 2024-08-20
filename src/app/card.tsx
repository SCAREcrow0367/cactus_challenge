import next from "next";
import Image from "next/image";


export default function Card () {
    return (
        <>
            <div className="flex flex-col top-40 p-4 w-[336px] shadow-light rounded-lg">
                <div>
                    <Image src="/cactus_img.jpg" alt={""} width={336} height={152} className="rounded-md"/> 
                </div>
                <div className="flex flex-col">
                <aside className="flex flex-auto py-4 text-[12px] rounded-md bg-darkgray">Design</aside>
                <h1 className="pb-[6px] font-semibold text-[18px] text-nowrap">Embracing Minimalism</h1>
                <p className="py-5 font-thin text-[14px] text-balance">From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
                <footer className="font-extralight text-[10px] text-nowrap">Annie Spratt</footer>
                </div>
            </div>
        </>
    )
}