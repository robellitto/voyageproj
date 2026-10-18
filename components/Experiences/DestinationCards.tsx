
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Heart, Star, MapPinIcon} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { useSearchContext } from "./SearchContext";

export type Destination = {
  id: string;
  name: string;
  region: string;
  imageUrl: string;
  experienceCount: number;
  categories: string[];
  rating: number;
  reviewCount: number;
  price: number;
};

type Destinations = {
    destinations: Destination[];
    className? : string;
}


export default function DestinationCards({destinations,className}:Destinations){
    const {likedCards,setLikedCards} = useSearchContext()

    return (
        destinations.length
        ?
        destinations.map(destination => (
        <Card key={destination.id} className={`w-60 shadow-outline shrink-0 pt-0 max-[570px]:w-full ${className ? className : ""}`}>
            <div className="relative w-full aspect-video ">
                <Image 
                    fill
                    src={destination.imageUrl}
                    alt={destination.name}
                    className="object-cover"
                    loading="eager"
                />
                <Heart 
                    size={30}
                    fill={likedCards.includes(destination.id) ? "red":"none"}
                    onClick={()=>{
                        if (likedCards.includes(destination.id)){
                            setLikedCards((cards)=>cards.filter(card=>card != destination.id))
                        } else{
                            
                            setLikedCards(cards => [...cards,destination.id])
                        }
                    }}
                    className={`absolute top-2 right-2 p-1 bg-gray-600 text-white rounded-2xl opacity-75 cursor-pointer `}/>
            </div>
            
            
            
            <CardContent className="flex flex-col gap-2 items-start">
                
                <Link className="text-sm text-text-main font-semibold" 
                        href={`/experiences/${destination.name}`}>{destination.name}</Link>
                <CardDescription className="flex gap-1 items-center text-text-main">
                    <MapPinIcon size={18} className="font-extrabold" />
                    <span className="opacity-75 tracking-tight text-xs">{destination.region}</span>
                </CardDescription>
                <div className="flex gap-1 items-center text-text-main">
                    <Star  size={15} color="orange" fill="orange"/>
                    <span className="flex gap-1 items-baseline">
                        {destination.rating}
                        <span className="text-xs">({(destination.reviewCount / 1000).toFixed(1)}k review)</span>
                    </span>
                </div>
                <div className="flex gap-1 items-center">
                    <p className="font-bold text-text-main">ETB {destination.price}</p>
                    <span className="text-text-main">/ person</span>
                </div>
            </CardContent>
            
        
        </Card>
        ))
        :
        
            <div className="absolute w-full flex justify-center h-[90dvh] items-center max-[1000px]:h-fit">
                <h1 className="text-5xl opacity-75 font-bold m-0 max-[1000px]:text-3xl">No Experience Found</h1>
            </div>
        
    )
}