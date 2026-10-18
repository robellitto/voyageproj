"use client";

import { ArrowRightIcon, Binoculars, Flower2, HandHeart, HandHeartIcon, Heart, Landmark, Leaf, MapPinIcon, Palette, PersonStanding, SlidersHorizontal, Star, Utensils } from "lucide-react";
import ExperienceFilter from "./ExperienceFilters";
import CardCarousel from "./CardCarousel";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Destination, useSearchContext } from "./SearchContext";
import DestinationCards from "./DestinationCards";
import Fuse from "fuse.js";
import { useSpecificFilter } from "@/contexts/SpecificFilter";
import FiltersDrawer from "./FiltersDrawer";
import handleFilter from "@/handlers/handleFilter";
import { useRouter, useSearchParams } from "next/navigation";
import { resetNavigationLockToPending } from "next/dist/client/components/segment-cache/navigation-testing-lock";


const categories = [
    {
      "id": "nature-outdoor",
      "name": "Nature & Outdoor",
      "slug": "nature-outdoor",
      "icon": <Leaf />,
      "description": "Mountains, waterfalls, lakes and scenic landscapes.",
      "color": "#0F766E",
      "count": 10,
      "href": "/experiences?category=nature-outdoor"
    },
    {
      "id": "cultural-heritage",
      "name": "Cultural & Heritage",
      "slug": "cultural-heritage",
      "icon": <Landmark />,
      "description": "Historic sites, ancient cities, traditions and heritage tours.",
      "color": "#0F766E",
      "count": 10,
      "href": "/experiences?category=cultural-heritage"
    },
    {
      "id": "food-drink",
      "name": "Food & Drink",
      "slug": "food-drink",
      "icon": <Utensils />,
      "description": "Ethiopian cuisine, coffee culture, markets and local dining.",
      "color": "#0F766E",
      "count": 10,
      "href": "/experiences?category=food-drink"
    },
    {
      "id": "adventure",
      "name": "Adventure",
      "slug": "adventure",
      "icon": <PersonStanding />,
      "description": "Trekking, cycling, rafting and active outdoor trips.",
      "color": "#0F766E",
      "count": 10,
      "href": "/experiences?category=adventure"
    },
    {
      "id": "wellness-relaxation",
      "name": "Wellness & Relaxation",
      "slug": "wellness-relaxation",
      "icon": <Flower2 />,
      "description": "Slow travel, restorative stays and peaceful experiences.",
      "color": "#0F766E",
      "count": 10,
      "href": "/experiences?category=wellness-relaxation"
    },
    {
      "id": "wildlife-safari",
      "name": "Wildlife & Safari",
      "slug": "wildlife-safari",
      "icon": <Binoculars />,
      "description": "National parks, endemic wildlife and birdwatching.",
      "color": "#0F766E",
      "count": 10,
      "href": "/experiences?category=wildlife-safari"
    },
    {
      "id": "arts-crafts",
      "name": "Arts & Crafts",
      "slug": "arts-crafts",
      "icon": <Palette />,
      "description": "Handmade crafts, artisan studios, weaving and creative workshops.",
      "color": "#0F766E",
      "count": 10,
      "href": "/experiences?category=arts-crafts"
    },
    {
      "id": "community-volunteering",
      "name": "Community & Volunteering",
      "slug": "community-volunteering",
      "icon": <HandHeartIcon />,
      "description": "Community-led cultural exchange and responsible travel.",
      "color": "#0F766E",
      "count": 10,
      "href": "/experiences?category=community-volunteering"
    }
  ]



export default function ExperienceListing(){
    const { selected,setSelected,
            price,setPrice, 
            search, setSearch, 
            language, setLanguage,
            setFilteredResult,filteredResults,
            searchResults,setSearchResults,
            destinations} = useSearchContext()
    const {setSpecificFilter}= useSpecificFilter()
    const fuse = new Fuse(destinations, {
            threshold: 0.45,
            keys: ["name","region"]
          });
    
  
    useEffect(()=>{
        setSpecificFilter(<FiltersDrawer className="min-[1000px]:hidden"/>)
        
        return () => {setSpecificFilter(null)}
    },[])

    const searchParams = useSearchParams();
    const query = searchParams.get("place");

    useEffect(() => {
      const results = query
        ? fuse.search(query).map((item) => item.item)
        : [];
      
      setSearchResults(results);
      query && setSpecificFilter(null)

      return ()=> setSearchResults([])
      
      
    }, [query]);
    

    return (
        
        <div className="flex items-start  gap-5">
            {
              !searchResults.length &&
              (<div className={`w-75 flex gap-2 flex-col  p-3 shadow-outline max-[1000px]:hidden
                              sticky top-(--nav-h) h-[calc(100dvh-var(--nav-h))]  `}>
                  
                  <div className="flex justify-between ">
                      <span className="flex gap-2 font-bold text-sm items-center"><SlidersHorizontal /> Filters </span>
                      <button className="text-xs text-gray-700" onClick={()=> setFilteredResult(null) }>Clear all</button>
                  </div>   

                  <ExperienceFilter selected={selected} setSelected={setSelected } price={price} setPrice={setPrice} language={language} setLanguage={setLanguage} className="overflow-auto pl-2"/>
                  
                  <button className="flex gap-2 p-2 bg-text-header text-white justify-center mt-auto rounded-sm"
                            onClick={()=>handleFilter(destinations,setFilteredResult,selected,price)}><SlidersHorizontal /> Apply filter</button>
              </div>)
            }
            
            <div className="flex-1 min-w-0 p-3 flex flex-col gap-5 items-stretch" >
                  {
                    !searchResults.length && !query ?  
                    
                      !filteredResults
                        ?

                        selected === "all" || !selected ?
                            
                        categories.map(category =>(
                          <div className="flex flex-col" key={category.id}>
                              <div className="flex justify-between p-2">
                                  <div className="flex gap-3">
                                      {category.icon}
                                      <span className="font-bold">{category.name}</span></div>
                                  <Link href={category.href} className="text-text-header flex gap-1">See all<ArrowRightIcon /></Link>
                              </div>
                              <CardCarousel className="gap-2" page={category.href}>
                                  {
                                      <DestinationCards 
                                          destinations={destinations.filter(destination => destination.categories.includes(category.id)).slice(0,6)} 
                                          className="max-[570px]:w-45"/>
                                  }
                              </CardCarousel>
                          </div>
                          )
                        )
                        :
                        <div className="responsive-grid">
                            {
                                <DestinationCards destinations={destinations.filter((destination)=> destination.categories.includes(selected))}
                                className="w-full min-w-60"/>
                            }
                        </div>

                      :
                      <div className="responsive-grid">
                          {
                              <DestinationCards destinations={filteredResults} className="w-full min-w-60"/>
                          }
                      </div>
                  :
                  <div className="responsive-grid">
                          {
                              <DestinationCards destinations={searchResults} className="w-full min-w-60"/>
                          }
                  </div>
                    
            }

            </div>

            
        </div>
    )
}


