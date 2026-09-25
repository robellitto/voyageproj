"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type SliderCard = {
  id: string | number;
  title: string;
  description?: string;
  image: string;
  location?: string;
};

type InfiniteCardSliderProps = {
  cards: SliderCard[];

  /**
   * ONLY THE CARD SIZE NEEDS TO BE SPECIFIED
   */
  cardWidth?: number;
  aspectRatio?: number;
  

  /**
   * How much of the neighboring cards should be visible.
   *
   * Example:
   * sidePeek = 180
   *
   * means 180px of the left and right cards
   * will remain visible.
   */
  sidePeek?: number;

  /**
   * Space between cards.
   */
  gap?: number;

  /**
   * Automatic sliding interval.
   */
  autoSlideInterval?: number;

  /**
   * How long automatic sliding is paused
   * after manually clicking next/previous.
   */
  manualPauseDuration?: number;

  /**
   * Slide animation duration.
   */
  transitionDuration?: number;

  showArrows?: boolean;
  showProgress?: boolean;

  className?: string;
};

export default function InfiniteCardSlider({
  cards,

  cardWidth = 900,
  aspectRatio = 4/3,
  

  sidePeek = 100,
  gap = 24,

  autoSlideInterval = 5000,
  manualPauseDuration = 10000,
  transitionDuration = 700,

  showArrows = true,
  showProgress = true,

  className = "",
}: InfiniteCardSliderProps) {


  /*
   * ==========================================================
   * BASIC VALUES
   * ==========================================================
   */

  const cloneCount = Math.min(2, cards.length);
  const cardHeight: number = cardWidth / aspectRatio;
  
  

  /*
   * We create clones on both sides.
   *
   * Example:
   *
   * Original:
   *
   * [1] [2] [3] [4] [5]
   *
   * Extended:
   *
   * [4] [5] [1] [2] [3] [4] [5] [1] [2]
   *  ↑           REAL CARDS           ↑
   */

  const extendedCards = useMemo(() => {
    if (!cards.length) return [];

    const firstClones = cards.slice(0, cloneCount);
    const lastClones = cards.slice(-cloneCount);

    return [
      ...lastClones,
      ...cards,
      ...firstClones,
    ];
  }, [cards, cloneCount]);

  /*
   * Start at the first REAL card.
   */
  const [currentIndex, setCurrentIndex] = useState(
    cloneCount
  );

  /*
   * Controls whether the sliding animation is enabled.
   *
   * We temporarily disable it when jumping from a clone
   * back to the real card.
   */
  const [transitionEnabled, setTransitionEnabled] =
    useState(true);

  /*
   * Progress tracker.
   *
   * 0 → 100
   */
  const [progress, setProgress] = useState(0);

  /*
   * Automatic sliding pause.
   */
  const [isPaused, setIsPaused] = useState(false);

  const pauseTimeoutRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  const animationFrameRef =
    useRef<number | null>(null);

  const progressStartRef =
    useRef<number | null>(null);

  /*
   * ==========================================================
   * CONTAINER WIDTH
   * ==========================================================
   *
   * This is the important part.
   *
   * We DO NOT ask the user for slider width.
   *
   * It is automatically calculated from:
   *
   * card width
   * +
   * left peek
   * +
   * right peek
   * +
   * gaps
   *
   * Example:
   *
   * cardWidth = 900
   * sidePeek = 180
   * gap = 24
   *
   * width =
   *
   * 180 + 900 + 180 + 24 + 24
   *
   * = 1308px
   */

  const containerWidth =
    cardWidth +
    sidePeek * 2 +
    gap * 2;

  /*
   * Distance between the beginning of one card
   * and the beginning of the next card.
   */
  const cardStep = cardWidth + gap;

  /*
   * ==========================================================
   * PAUSE AUTO SLIDING
   * ==========================================================
   */

  const pauseAutoSlide = useCallback(() => {
    setIsPaused(true);

    /*
     * Reset the 5 second tracker.
     */
    setProgress(0);

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    /*
     * Wait 10 seconds.
     */
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, manualPauseDuration);
  }, [manualPauseDuration]);

  /*
   * ==========================================================
   * NEXT
   * ==========================================================
   */

  const nextSlide = useCallback(
    (manual = false) => {
      if (cards.length < 1) return;

      setTransitionEnabled(true);

      setCurrentIndex((previous) => previous + 1);

      /*
       * Only manual interaction triggers
       * the 10 second pause.
       */
      if (manual) {
        pauseAutoSlide();
      }
    },
    [cards.length, pauseAutoSlide]
  );

  /*
   * ==========================================================
   * PREVIOUS
   * ==========================================================
   */

  const previousSlide = useCallback(
    (manual = false) => {
      if (cards.length < 1) return;

      setTransitionEnabled(true);

      setCurrentIndex((previous) => previous - 1);

      if (manual) {
        pauseAutoSlide();
      }
    },
    [cards.length, pauseAutoSlide]
  );

  /*
   * ==========================================================
   * INFINITE LOOP
   * ==========================================================
   *
   * Example:
   *
   * [1] [2] [3] [4] [5] [1]
   *                         ↑
   *
   * When we reach the cloned [1],
   * silently jump back to the REAL [1].
   *
   * The user doesn't see the jump.
   */

  const handleTransitionEnd = () => {
    if (!cards.length) return;

    /*
     * We moved beyond the final real card.
     */
    if (
      currentIndex >=
      cards.length + cloneCount
    ) {
      setTransitionEnabled(false);

      setCurrentIndex(cloneCount);
    }

    /*
     * We moved before the first real card.
     */
    if (currentIndex < cloneCount) {
      setTransitionEnabled(false);

      setCurrentIndex(
        cards.length + cloneCount - 1
      );
    }
  };

  /*
   * Re-enable transition after the invisible
   * repositioning.
   */
  useEffect(() => {
    if (!transitionEnabled) {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });

      return () => {
        cancelAnimationFrame(frame);
      };
    }
  }, [transitionEnabled]);

  /*
   * ==========================================================
   * AUTO SLIDE + 5 SECOND TIMER
   * ==========================================================
   */

  useEffect(() => {
    if (!cards.length || isPaused) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(
          animationFrameRef.current
        );
      }

      return;
    }

    progressStartRef.current =
      performance.now();

    const updateProgress = (time: number) => {
      if (!progressStartRef.current) {
        progressStartRef.current = time;
      }

      const elapsed =
        time - progressStartRef.current;

      const percentage = Math.min(
        (elapsed / autoSlideInterval) * 100,
        100
      );

      setProgress(percentage);

      /*
       * 5 seconds finished.
       */
      if (elapsed >= autoSlideInterval) {
        progressStartRef.current = time;

        setProgress(0);

        nextSlide(false);
      }

      animationFrameRef.current =
        requestAnimationFrame(updateProgress);
    };

    animationFrameRef.current =
      requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(
          animationFrameRef.current
        );
      }
    };
  }, [
    cards.length,
    isPaused,
    autoSlideInterval,
    nextSlide,
  ]);

  /*
   * Cleanup.
   */
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(
          pauseTimeoutRef.current
        );
      }

      if (animationFrameRef.current) {
        cancelAnimationFrame(
          animationFrameRef.current
        );
      }
    };
  }, []);

  /*
   * ==========================================================
   * TRACK POSITION
   * ==========================================================
   *
   * The CENTER of the current card is aligned
   * with the CENTER of the slider container.
   */

  const trackOffset =
    currentIndex * cardStep +
    cardWidth / 2;

  /*
   * ==========================================================
   * EMPTY
   * ==========================================================
   */

  if (!cards.length) {
    return null;
  }

  return (
    <div className={`relative mx-auto overflow-hidden ${className}`} style={{width:`${containerWidth}px`,height:`${cardHeight}px`}}
    >

        {/* LEFT FADE */}
        <div
        className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-20
            w-3
            bg-gradient-to-r
            from-white
            via-white/80
            to-transparent
            md:w-5
            lg:w-10
        "
        />

        {/* RIGHT FADE */}
        <div
        className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            z-20
            w-3
            bg-gradient-to-l
            from-white
            via-white/80
            to-transparent
            md:w-5
            lg:w-10
        "
        />
      {/* =====================================================
          TRACK
      ===================================================== */}

      <div
        className="absolute left-1/2 top-0 flex h-full items-center"
        style={{
          gap: `${gap}px`,

          transform: `translateX(calc(-${trackOffset}px))`,

          transition: transitionEnabled
            ? `transform ${transitionDuration}ms cubic-bezier(0.22, 1, 0.36, 1)`
            : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedCards.map(
          (card, index) => {
            /*
             * Distance from the currently active card.
             *
             * 0 = center
             * 1 = immediate left/right
             * 2+ = hidden cards
             */
            const distance = Math.abs(
              index - currentIndex
            );

            const isCenter =
              distance === 0;

            const isSide =
              distance === 1;

            return (
              <div
                key={`${card.id}-${index}`}
                className={`
                  relative
                  shrink-0
                  cursor-pointer
                  overflow-hidden
                  rounded-[28px]
                  bg-slate-200
                  transition-[filter,opacity,transform]
                  duration-700
                  ease-out
            
                  ${
                    isCenter
                      ? "z-200 blur-0 opacity-100 scale-100"
                      : isSide
                      ? "z-100 blur-[6px] opacity-70 scale-[0.97]"
                      : "blur-[10px] opacity-0"
                  }
                `}
                style={
                    {
                        height: `${cardHeight}px`,
                        width: `${cardWidth}px`
                    }
                }
                
              >
                {/* =================================================
                    IMAGE
                ================================================= */}

                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 350px) 20vw, (max-width: 250px) 10vw, (max-width: 200px) 5vw"
                  loading="eager"
                  priority
                  className="absolute inset-0 h-full w-full object-cover"
                  draggable={false}
                />

                {/* =================================================
                    GRADIENT
                ================================================= */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/75
                    via-black/10
                    to-transparent
                  "
                />

                {/* =================================================
                    LOCATION
                ================================================= */}

                {card.location && (
                  <div
                    className="
                      absolute
                      left-8
                      top-8
                      rounded-full
                      bg-white/75
                      px-5
                      py-2.5
                      text-xs
                      md:text-sm
                      
                      font-medium
                      text-slate-800
                      backdrop-blur-md
                    "
                  >
                    {card.location}
                  </div>
                )}

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-8
                    text-white
                  "
                >
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-white/80">
                    Destination
                  </p>

                  <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
                    {card.title}
                  </h2>

                  {card.description && (
                    <p className="mt-3 max-w-[65%] text-sm md:text-base leading-7 text-white/90">
                      {card.description}
                    </p>
                  )}
                </div>
                <button
                    type="button"

                    className={`
                    absolute
                    bottom-10
                    right-4
                    rounded-full
                    bg-white
                    px-6
                    py-3
                    text-sm
                    font-medium
                    text-slate-900
                    shadow-lg
                    transition-all
                    duration-200
                    hover:scale-105
                    hover:bg-white/95
                    active:scale-95
                    `}
                >
                    Learn More
                </button>
              </div>
            );
          }
        )}
      </div>

      {/* =====================================================
          PREVIOUS
      ===================================================== */}

      {showArrows && (
        <button
          type="button"
          onClick={() => previousSlide(true)}
          aria-label="Previous destination"
          className="
            absolute
            z-50
            left-5
            top-1/2
            flex
            h-12
            w-12
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white
            text-slate-800
            shadow-lg
            transition-all
            slider-left
            duration-200
            hover:scale-105
            hover:bg-white
            active:scale-95
          "
        >
          <ArrowLeft size={20} strokeWidth={1.8} />
        </button>
      )}

      {/* =====================================================
          NEXT
      ===================================================== */}

      {showArrows && (
        <button
          type="button"
          onClick={() => nextSlide(true)}
          aria-label="Next destination"
          className="
            absolute
            right-5
            top-1/2
            slider-right
            z-100
            flex
            h-12
            w-12
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white
            text-slate-800
            shadow-lg
            transition-all
            duration-200
            hover:scale-105
            hover:bg-white
            active:scale-95
          "
        >
          <ArrowRight size={20} strokeWidth={1.8} />
        </button>
      )}

      {/* =====================================================
          PROGRESS
      ===================================================== */}

      {showProgress && (
        <div
          className="
            absolute
            bottom-5
            left-1/2
            z-40
            w-32
            -translate-x-1/2
          "
        >
          <div className="h-1 overflow-hidden rounded-full bg-white/30">
            <div
              className="h-full rounded-full bg-white"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}