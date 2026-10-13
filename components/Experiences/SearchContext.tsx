"use client";

import { createContext, useContext, useState } from "react";

type SearchContextType = {
  likedCards: string[];
  setLikedCards: (likedCard: string[]) => void;
  selected: string;
  setSelected: (selected: string) => void;
  price: number[];
  setPrice: (price: number[]) => void;
  search: string ;
  setSearch: (search: string ) =>void;

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
    const [price,setPrice] = useState<number[]>([10000,50000])
    const [search,setSearch] = useState<string >("")

  return (
    <SearchContext.Provider
      value={{ likedCards, setLikedCards, selected, setSelected, price, setPrice, search,setSearch }}
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