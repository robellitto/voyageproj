
import ExperienceListing from "@/components/Experiences/ExperienceListing";
import ExperienceTopSection from "@/components/Experiences/ExperienceTopSection";


export default function Experiences(){
    return (
        <main className="relative flex flex-col gap-5">
            <ExperienceTopSection />
            <ExperienceListing />
        </main>
    )
}