import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { DlSkillsItems } from "@/components/DlSkillsItems";

interface Skill {
  name: string;
  image: string;
}

type PropType = {
  skills: Skill[];
  options?: EmblaOptionsType;
  hideControls?: boolean;
};

import "@/styles/embla.css";

const DlUiCarruselAutoScroll: React.FC<PropType> = (props) => {
  const { skills, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({
      playOnInit: true,
      stopOnInteraction: false,
      speed: 1,
    }),
  ]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {skills.map((skill) => (
            <div className="embla__slide_autoscroll" key={skill.name}>
              <DlSkillsItems
                name={skill.name}
                image={`/assets/images/${skill.image}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DlUiCarruselAutoScroll;
