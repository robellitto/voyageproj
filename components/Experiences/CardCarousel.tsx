
type CardCarouselProps = {
  children?: React.ReactNode;
  className?: string;
  page?:string;
};


export default function CardCarousel({className,children}: CardCarouselProps){
    return (
        
        <div className={`${className} flex bg-orange-50 rounded-xs w-full overflow-x-auto scrollbar-hide py-2`}>
            {children}
        </div>
    )
}