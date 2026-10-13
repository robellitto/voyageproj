'use client';
import { Destination } from "@/components/Experiences/SearchContext";

export default function handleFilter(destinations: Destination[],
                                    setResult:(des: Destination[]) => void, 
                                    category:string, 
                                    price: number[], 
                                    language?:string){
    console.log(category)
    setResult(destinations.filter(destination => category==="all" || destination.categories.includes(category))
                          .filter(destination => {
                            console.log(price.length ==2 ? destination.price >= price[0] && destination.price <= price[1] : true)
                            
                            return price.length ==2 ? destination.price >= price[0] && destination.price <= price[1] : true}))
    
    

}

