'use client';
import { Destination } from "@/components/Experiences/SearchContext";

export default function handleFilter(destinations: Destination[],
                                    setResult:(des: Destination[]) => void, 
                                    category:string, 
                                    price: number[], 
                                    language?:string){
    
    setResult(destinations.filter(destination => category==="all" || destination.categories.includes(category))
                          .filter(destination => {
                           
                            
    return price.length ==2 ? destination.price >= price[0] && destination.price <= price[1] : true}))
    
    

}

