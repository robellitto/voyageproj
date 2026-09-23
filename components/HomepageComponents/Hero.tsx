import SearchDestination from "./SearchDestination";
import Image from "next/image";

export default function Hero(){
    return (
    <div className=" relative overflow-hidden">
    
            <Image
                src={"/LeftSide.png"}
                height={100}
                width={100}
                priority
                className="hidden lg:block object-cover z-0 absolute bottom-10 left-0"
                alt="background"
                loading="eager"
            />
            <Image
                src={"/RightSide.png"}
                width={900}
                height={1200}
                sizes="(max-width:1000px)"
                priority
                className="hidden lg:block object-cover z-0 absolute top-0 -right-5 h-auto "
                alt="background"
                loading="eager"
            />
        
        <div className="relative flex flex-col lg:px-20 lg:pt-40 pb-20 gap-8 z-100">
            
            <div>
                <p className="text-emerald-800 lg:text-xl tracking-wide">
                    Hotels &middot; Tours &middot; Experiences &middot; Accommodations
                </p>
                <h1 className="text-6xl text-emerald-900 font-bold lg:max-w-160 tracking-wide">
                    Your Next <br /> <span className="text-orange-500">Ethiopian</span> Adventure <br />Starts Here
                </h1>
            </div>
            <h3 className="text-[22px] text-emerald-900 max-w-160">
                From ancient history to breathtaking landscapes, find the best tours, activities, and unique experiences across Ethiopia
            </h3>
            <SearchDestination  />
        </div>
    </div>)
}