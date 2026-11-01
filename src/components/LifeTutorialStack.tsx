import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const tutorialImages = [
  "IMG_0121.jpg",
  "IMG_0129.jpg",
  "IMG_0163.jpg",
  "IMG_0171.jpg",
  "IMG_0176.jpg",
  "IMG_0185.jpg",
];

const imagePath = (filename: string) =>
  `/images/life%20tutorials/${filename}`;

export function LifeTutorialStack() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pointerStartX = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % tutorialImages.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const showPrevious = () => {
    setCurrentIndex((index) => (index - 1 + tutorialImages.length) % tutorialImages.length);
  };

  const showNext = () => {
    setCurrentIndex((index) => (index + 1) % tutorialImages.length);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return;

    const swipeDistance = event.clientX - pointerStartX.current;
    pointerStartX.current = null;

    if (swipeDistance < -60) showNext();
    if (swipeDistance > 60) showPrevious();
    setIsPaused(false);
  };

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      <div
        className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-3xl shadow-2xl"
        style={{ touchAction: "pan-y" }}
        onPointerDown={(event) => {
          pointerStartX.current = event.clientX;
          event.currentTarget.setPointerCapture(event.pointerId);
          setIsPaused(true);
        }}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          pointerStartX.current = null;
          setIsPaused(false);
        }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <ImageWithFallback
              src={imagePath(tutorialImages[currentIndex])}
              alt={`Life Tutorials photo ${currentIndex + 1} of ${tutorialImages.length}`}
              className="h-full w-full select-none object-cover"
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-sm text-foreground/60" aria-live="polite">
          {currentIndex + 1} / {tutorialImages.length}
          <span className="ml-2 hidden sm:inline">Swipe to browse</span>
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Show previous Life Tutorials photo"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Show next Life Tutorials photo"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
