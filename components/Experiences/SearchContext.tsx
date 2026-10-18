"use client";

import { createContext, useContext, useState } from "react";
import destinations from "../Experiences/mockup.json"
import { DateRange } from "react-day-picker";

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

type SearchContextType = {
  likedCards: string[];
  setLikedCards: React.Dispatch<React.SetStateAction<string[]>>;
  selected: string;
  setSelected: (selected: string) => void;
  price: number[];
  setPrice: (price: number[]) => void;
  search: string ;
  setSearch: (search: string ) =>void;
  language: string | null;
  setLanguage: (language: string| null) => void;
  filteredResults : Destination[] | null;
  setFilteredResult : (result: Destination[] | null) => void;
  dateRange: DateRange  |  undefined;
  setDateRange: (dateRange : DateRange  |  undefined)=> void;
  appliedDateRange: DateRange  | undefined;
  setAppliedDateRange: (appliedDateRange:DateRange |  undefined) => void;
  guest: string | number | null;
  setGuest: (guest : string | number | null) => void;
  room: string  | number | null;
  setRoom: (room: string | number | null) => void;
  searchResults: Destination[];
  setSearchResults: (searchResult: Destination[]) => void;


  destinations : Destination[];
  

};

const SearchContext = createContext<
  SearchContextType | undefined
>(undefined);


export function SearchContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
    const [likedCards,setLikedCards] = useState<string[]>([])
    const [selected,setSelected] = useState<string>("all") 
    const [price,setPrice] = useState<number[]>([1000,50000])
    const [search,setSearch] = useState<string >("")
    const [language,setLanguage] = useState<string | null>("amharic")
    const [filteredResults, setFilteredResult] = useState<Destination[] | null>(null)
    const [dateRange, setDateRange] = useState<DateRange| undefined>();
    const [appliedDateRange, setAppliedDateRange] = useState<DateRange | undefined>();
    const [guest,setGuest] = useState<string|number|null>(1)
    const [room, setRoom] = useState<string|number|null>(1)
    const [searchResults,setSearchResults] = useState<Destination[]>([])
    

  return (
    <SearchContext.Provider
      value={{  likedCards, setLikedCards, 
                selected, setSelected, 
                price, setPrice, 
                search,setSearch,
                language,setLanguage, 
                filteredResults,setFilteredResult, 
                dateRange,setDateRange,
                appliedDateRange,setAppliedDateRange,
                guest,setGuest,
                room,setRoom,
                searchResults,setSearchResults,
                destinations}}
    >
      {children}
    </SearchContext.Provider>
  );
}


export function useSearchContext() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error(
      "useSearchContext must be used within SearchContextProvider"
    );
  }

  return context;
}