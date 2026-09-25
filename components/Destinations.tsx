import InfiniteCardSlider from "./Slider3";


const destinations = [
  {
    id: 1,
    title: "Lalibela",
    location: "Lalibela",
    description: "Explore the legendary rock-hewn churches.",
    image: "/lalibela.jpg",
  },
  {
    id: 2,
    title: "Simien Mountains",
    location: "Simien Mountains",
    description: "Discover dramatic mountains and incredible landscapes.",
    image: "/simen.jpg",
  },
  {
    id: 3,
    title: "Danakil Depression",
    location: "Danakil",
    description: "Experience one of the most otherworldly places on Earth.",
    image: "/danakil.jpg",
  },
  {
    id: 4,
    title: "Axum",
    location: "Axum",
    description: "Explore Ethiopia's ancient history.",
    image: "/axum.jpg",
  },
  {
    id: 5,
    title: "Gondar",
    location: "Gondar",
    description: "Discover castles and historic architecture.",
    image: "/gondar.jpg",
  },
  {
    id: 6,
    title: "Harar",
    location: "Harar",
    description: "Explore the colorful historic city of Harar.",
    image: "/harar.jpg",
  },
];

export default function DestinationsSlider() {
  return (
    <div className="w-full bg-white px-6 py-12">
      <InfiniteCardSlider
        cards={destinations}
        cardWidth={400}
        aspectRatio={6/4}
        className="slider-shrink"
        
        gap={30}
        

        autoSlideInterval={5000}
        manualPauseDuration={10000}
        transitionDuration={700}

        showArrows
        showProgress
      />
    </div>
  );
}