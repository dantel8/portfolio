"use client";

import { DlUiText } from "@/components/ui/DlUiText";
import { DlUiImage } from "@/components/ui/DlUiImage";

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
    <div id="skills" className="flex flex-col justify-center gap-4">
      <DlUiText
        type="h3"
        className="text-v1-primary-600 relative mt-10 text-center"
      >
        Skills
      </DlUiText>
      <div className="flex gap-4 w-full overflow-x-auto scrollbar-none">
        {skills.map((skill) => (
          <div
            className="flex flex-col gap-4 max-w-20 min-w-20 items-center justify-center backdrop-blur-sm rounded-lg p-4 transition-colors"
            key={skill.name}
          >
            <DlUiImage
              src={`/assets/images/${skill.image}`}
              alt={skill.name}
              width={90}
              height={90}
              className="object-contain w-10 h-10"
              quality={100}
            />
            <DlUiText type="body2" className="text-neutral-800 text-nowrap">
              {skill.name}
            </DlUiText>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DlSkills;
