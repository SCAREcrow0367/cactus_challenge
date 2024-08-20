import next from "next";
import Image from "next/image";


export default function Card () {
    return (
        <>
            <div className="flex flex-col top-40 p-4 w-card rounded-lg shadow-xl">
                <div>
                    <Image src="/cactus_img.jpg" alt={""} width={336} height={152} className="rounded-md"/> 
                </div>
                <div className="flex flex-col">
                    <div className="flex py-4">
                        <div className="flex rounded-2xl bg-lightpink">
                        <p className="px-4 py-1 text-sm font-semibold text-lightpurple">Design</p>
                        </div>
                    </div>
                    <div className="flex pb-1">
                        <h1 className="font-semibold text-xl text-nowrap">Embracing Minimalism</h1>
                    </div>
                    <div className="flex pt-0.5 pb-5">
                        <p className="font-light text-lg text-darkgray text-left">From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
                    </div>
                    <hr className="h-px mb-4 bg-offgray border-0"></hr>
                    <div className="flex pb-0.5">
                        <p className="font-normal text-sm text-nowrap text-darkgray">Annie Spratt</p>
                    </div>
                </div>
            </div>
        </>
    )
}