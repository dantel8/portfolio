"use client";

import { DlUiText } from "@/components/ui/DlUiText";
import { DlUiCarruselAutoScroll } from "@/components/ui/DlUiCarruselAutoScroll";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = {
  loop: true,
  align: "center",
  containScroll: "trimSnaps",
  dragFree: true,
};

const skills = [
  {
    name: "React",
    image: "React.png",
  },
  {
    name: "Next.js",
    image: "Next.js.png",
  },
  {
    name: "Tailwind CSS",
    image: "Tailwind CSS.png",
  },
  {
    name: "TypeScript",
    image: "TypeScript.png",
  },
  {
    name: "Vue.js",
    image: "Vue.js.png",
  },
  {
    name: "Sass",
    image: "Sass.png",
  },
  {
    name: "Node.js",
    image: "Node.js.png",
  },
  {
    name: "Express",
    image: "Express.png",
  },
  {
    name: "Java",
    image: "Java.png",
  },
  {
    name: "Spring Boot",
    image: "Spring.png",
  },
  {
    name: "C++",
    image: "C++ (CPlusPlus).png",
  },
  {
    name: "MySQL",
    image: "MySQL.png",
  },
  {
    name: "Git",
    image: "Git.png",
  },
  {
    name: "GitHub",
    image: "GitHub.png",
  },
];

const DlSkills = () => {
  return (
    <div id="skills" className="flex flex-col justify-center gap-8">
      <DlUiText
        type="h3"
        className="text-v1-primary-600 relative mt-10 text-center"
      >
        Skills
      </DlUiText>
      <div>
        <DlUiCarruselAutoScroll skills={skills} options={OPTIONS} />
      </div>
    </div>
  );
};

export default DlSkills;
