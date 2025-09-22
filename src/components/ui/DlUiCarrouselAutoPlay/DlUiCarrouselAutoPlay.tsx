import React, { useRef } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useAutoplay } from "@/hooks/useAutoplay";
import { useAutoplayProgress } from "@/hooks/useAutoPlayProgress";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../DlUiArrowButtons";

type PropType = {
  slides: number[] | React.ReactNode[];
  options?: EmblaOptionsType;
  showControls?: boolean;
  renderSlide?: (index: number) => React.ReactNode;
};

const EmblaCarouselAutoPlay: React.FC<PropType> = (props) => {
  const { slides, options, showControls, renderSlide } = props;
  const progressNode = useRef<HTMLDivElement>(null);
  const plugins = React.useMemo(() => {
    if (!showControls) {
      return [
        Autoplay({
          playOnInit: false,
          delay: 3000,
        }),
      ];
    }
    return [];
  }, [showControls]);

  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  const [isPlaying, setIsPlaying] = React.useState(false);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi);

  React.useEffect(() => {
    if (!showControls || !emblaApi) return;

    setIsPlaying(true);

    let intervalId: NodeJS.Timeout | null = null;

    const scrollNext = () => {
      if (emblaApi && emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else if (emblaApi) {
        emblaApi.scrollTo(0);
      }
    };

    if (isPlaying) {
      intervalId = setInterval(scrollNext, 3000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [emblaApi, showControls, isPlaying]);

  const { showAutoplayProgress } = useAutoplayProgress(
    emblaApi,
    progressNode as React.RefObject<HTMLElement>
  );

  return (
    <div className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {typeof slides[0] === "number"
            ? (slides as number[]).map((index) => (
                <div className="embla__slide" key={index}>
                  {renderSlide ? (
                    renderSlide(index)
                  ) : (
                    <div className="embla__slide__number">
                      <span>{index + 1}</span>
                    </div>
                  )}
                </div>
              ))
            : (slides as React.ReactNode[]).map((slide, index) => (
                <div className="embla__slide" key={index}>
                  {slide}
                </div>
              ))}
        </div>
      </div>

      <div className="embla__controls">
        {!showControls && (
          <div className="embla__buttons">
            <PrevButton
              onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={() => onAutoplayButtonClick(onNextButtonClick)}
              disabled={nextBtnDisabled}
            />
          </div>
        )}

        <div
          className={`embla__progress${
            showAutoplayProgress ? "" : " embla__progress--hidden"
          }`}
        >
          <div className="embla__progress__bar" ref={progressNode} />
        </div>

        {!showControls && (
          <button
            className="embla__play"
            onClick={toggleAutoplay}
            type="button"
          >
            {autoplayIsPlaying ? "Stop" : "Start"}
          </button>
        )}
      </div>
    </div>
  );
};

export default EmblaCarouselAutoPlay;
