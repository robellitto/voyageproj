'use client';

import { createContext, ReactNode, useContext, useState } from "react"


type SpecificFilterContextProps = {
    SpecificFilter: ReactNode;
    setSpecificFilter: (SpecificFilter: ReactNode) => void;
}

const SpecificFilterContext = createContext<SpecificFilterContextProps | null>(null)

export function SpecificFilterContextProvider({children} : {children: ReactNode}){
    const [SpecificFilter,setSpecificFilter] = useState<ReactNode>(null)
    return (
        <SpecificFilterContext.Provider value={{SpecificFilter,setSpecificFilter}}>
                {children}
        </SpecificFilterContext.Provider>
    )
}

export function useSpecificFilter(){
    const context = useContext(SpecificFilterContext)

    if (!context) {
        throw new Error(
        "useSpecificFilter must be used inside SpecificFilterProvider"
        );
    }

    return context;
}