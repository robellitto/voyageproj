
type CardCarouselProps = {
  children?: React.ReactNode;
  className?: string;
  page?:string;
};


export default function CardCarousel({className,children}: CardCarouselProps){
    return (
        
        <div className={`${className} flex bg-red-50 w-full overflow-x-auto scrollbar-hide`}>
            {children}
        </div>
    )
}