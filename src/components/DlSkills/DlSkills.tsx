"use client";

import { DlUiText } from "@/components/ui/DlUiText";
import { DlUiImage } from "@/components/ui/DlUiImage";
import { DlUiGlass } from "@/components/ui/DlUiGlass";

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
    <div
      id="skills"
      className="flex flex-col items-center justify-center gap-4"
    >
      <DlUiText type="h3" className="text-v1-primary-600 relative mt-10">
        Skills
      </DlUiText>
      <DlUiGlass className="w-full p-2 !bg-v1-primary-100/50" blur={2}>
        <div className="grid grid-cols-4 gap-4">
          {skills.slice(0, 8).map((skill) => (
            <div
              className="flex flex-col gap-4 items-center justify-center backdrop-blur-sm rounded-lg p-4 transition-colors"
              key={skill.name}
            >
              <DlUiImage
                src={`/assets/images/${skill.image}`}
                alt={skill.name}
                width={60}
                height={60}
                className="object-contain"
              />
              <DlUiText type="body2" className="text-neutral-800">
                {skill.name}
              </DlUiText>
            </div>
          ))}
          <div className="col-span-2 col-start-2 flex gap-4">
            {skills.slice(8).map((skill) => (
              <div
                className="flex-1 flex flex-col gap-4 items-center justify-center backdrop-blur-sm rounded-lg p-4 transition-colors"
                key={skill.name}
              >
                <DlUiImage
                  src={`/assets/images/${skill.image}`}
                  alt={skill.name}
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <DlUiText type="body2" className="text-neutral-800">
                  {skill.name}
                </DlUiText>
              </div>
            ))}
          </div>
        </div>
      </DlUiGlass>
    </div>
  );
};

export default DlSkills;
