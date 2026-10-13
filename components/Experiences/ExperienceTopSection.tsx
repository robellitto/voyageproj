import FiltersDrawer from "./FiltersDrawer";
import ExperienceSearch from "./PlaceSearch";



export default function ExperienceTopSection(){
    
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-0.5">
                <h3 className="text-sm font-semibold min-[400px]:text-[15px] text-text-header tracking-wider">Experiences</h3>
                <h1 className="text-2xl  min-[400px]:text-[28px] min-[500px]:text-3xl sm:text-4xl font-bold text-text-main tracking-wide">
                    Tours & Experiences
                </h1>
                <p className="text-xs font-light min-[500px]:text-[15px] tracking-wide">
                    Explore tours, experiences, attractions and more
                </p>
            </div>
            <ExperienceSearch  />
            
            
        </div>
    )
}