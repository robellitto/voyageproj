import DestinationsSlider from "../Destinations";
import SearchDestination from "./SearchDestination";
import Image from "next/image";
import "./Hero.css"

export default function Hero(){
    return (
    <div className=" relative  overflow-hidden flex items-center justify-start  lg:px-20 lg:pt-20 pb-20 gap-8 hero">
        
        {/* ========= Left Side OF Hero ============ */}
        <div className=" flex flex-col gap-5 md:gap-12 z-50 hero-intro">
            
            <div className="flex flex-col gap-5 intro-text-container">
                <p className="hidden text-emerald-700 text-[14px] tracking-wider intro-text  md:block">
                    HOTELS &middot;  TOURS  &middot;  EXPERIENCES  &middot;  ACCOMMODATIONS  &middot;  AND MORE
                </p>
                <h1 className="text-3xl md:text-6xl text-emerald-900 font-bold lg:max-w-160 intro-text">
                    Your Next <br className="break"/> <span className="text-orange-500">Ethiopian</span> Adventure <br className="break"/>Starts Here
                </h1>
                <h3 className="text-sm md:text-[18px] text-emerald-900 max-w-130 intro-text">
                    From ancient history to breathtaking landscapes, find the best tours, activities, and unique experiences across Ethiopia
                </h3>
            </div>
            
            <SearchDestination  />
        </div>

        {/* ============== Right Side of the Hero Page ============== */}
        <span className="absolute right-0 image-slider">
            <DestinationsSlider />
        </span>

        

    </div>)
}