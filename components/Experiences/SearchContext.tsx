"use client";

import { createContext, useContext, useState } from "react";
import destinations from "../Experiences/mockup.json"

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

  return (
    <SearchContext.Provider
      value={{ likedCards, setLikedCards, selected, setSelected, price, setPrice, search,setSearch,language,setLanguage, filteredResults,setFilteredResult, destinations}}
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