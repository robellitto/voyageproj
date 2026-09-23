import SearchDestination from "./SearchDestination";
import Image from "next/image";

export default function Hero(){
    return (
    <div className=" relative ">
    
            <Image
                src={"/HeroBg.png"}
                fill
                priority
                className="object-cover z-0 absolute "
                alt="background"
                loading="eager"
            />
        
        <div className="relative flex flex-col px-20 py-18 gap-8 z-100">
            
            <div>
                <p className="text-[#ffe4b2] text-xl font-semibold tracking-wide">
                    EXPLORE &middot; DISCOVER &middot; EXPERIENCE
                </p>
                <h1 className="text-7xl text-white font-bold max-w-180 tracking-wide">
                    Discover <span className="text-orange-500">Ethiopia</span> One Trip at a Time
                </h1>
            </div>
            <h3 className="text-[22px] text-white max-w-160">
                From ancient history to breathtaking landscapes, find the best tours, activities, and unique experiences across Ethiopia
            </h3>
            <SearchDestination />
        </div>
    </div>)
}