"use client";

import { useEffect, type RefObject } from "react";

export default function useOutsideClick(
  containerRef: RefObject<HTMLElement | null>,
  onOutsideClick: () => void,
  exceptionRef?: RefObject<HTMLButtonElement | null>

) {
  useEffect(() => {
    function handleOutsideClick(event: PointerEvent) {
      
      if ( containerRef.current && 
          !containerRef.current.contains(event.target as Node) ) 
      { 
          if (!exceptionRef){
            onOutsideClick();
          }
          else if (exceptionRef && 
              !exceptionRef.current?.contains(event.target as Node)){
                onOutsideClick();
          } 
      }
    }

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [containerRef, onOutsideClick]);
}