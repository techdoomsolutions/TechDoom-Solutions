"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Title from "../Ui/Title";
import TitleLine from "../Ui/TitleLine";

interface Project {
  id: number;
  title: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "ICJF",
    image: "/Images/project-1.png",
    link: "https://www.icjf.in/",
  },
  {
    id: 2,
    title: "FDS",
    image: "/Images/project-2.png",
    link: "https://www.fdslimousine.com/",
  },
  {
    id: 3,
    title: "Urban Express",
    image: "/Images/project-3.png",
    link: "https://www.urbanexpress.ae/",
  },
  {
    id: 4,
    title: "Sai Photography",
    image: "/Images/project-4.png",
    link: "https://sai-photo-graphy.vercel.app/",
  },
];

export default function ProjectShowcase() {
  const [projectList, setProjectList] = useState<Project[]>([]);

  useEffect(() => {
    setProjectList([...projects, ...projects]);
  }, []);

  return (
    <section id="project" className="w-full py-8 space-y-4">
      <Title title="Project Showcase" />
      <TitleLine titleline="Explore some of the impactful projects we've delivered across diverse industries" />
      <div className="relative overflow-hidden">
        <div className="relative w-full overflow-hidden space-y-4">
          {/* First Slider - Left to Right */}
          <div className="flex slide-left gap-4 min-w-[200%]">
            {projectList.map((project, index) => (
              <Link href={project.link} target="_blank" key={`first-${index}`}>
                <div className="relative min-w-[200px] sm:min-w-[250px] md:min-w-[300px] h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden cursor-pointer group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                  <div className="hidden md:block absolute inset-0 bg-black/75 group-hover:bg-black/0 transition duration-300" />
                </div>
              </Link>
            ))}
          </div>

          {/* Second Slider - Right to Left */}
          <div className="flex slide-left reverse gap-4 min-w-[200%]">
            {projectList.map((project, index) => (
              <Link href={project.link} target="_blank" key={`second-${index}`}>
                <div className="relative min-w-[200px] sm:min-w-[250px] md:min-w-[300px] h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden cursor-pointer group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                  <div className="hidden md:block absolute inset-0 bg-black/75 group-hover:bg-black/0 transition duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Embedded CSS for animation */}
        <style jsx>{`
          @keyframes slideLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .slide-left {
            animation: slideLeft 40s linear infinite;
          }

          .reverse {
            animation-direction: reverse;
          }
        `}</style>
      </div>
    </section>
  );
}
