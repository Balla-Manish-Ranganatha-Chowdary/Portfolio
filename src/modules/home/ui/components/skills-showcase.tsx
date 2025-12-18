"use client";

import { motion } from "motion/react";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiFastapi,
  SiDjango,
  SiTensorflow,
  SiPytorch,
  SiGit,
  SiAmazon,
  SiDocker,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import type { Skill } from "@/types/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  python: SiPython,
  fastapi: SiFastapi,
  django: SiDjango,
  tensorflow: SiTensorflow,
  pytorch: SiPytorch,
  api: TbApi,
  aws: SiAmazon,
  docker: SiDocker,
  git: SiGit,
};

interface SkillsShowcaseProps {
  skills: Skill[];
}

export const SkillsShowcase = ({ skills }: SkillsShowcaseProps) => {

  return (
    <div className="p-4 bg-muted rounded-xl">
      <h3 className="text-lg font-semibold mb-4 text-foreground">Skills & Technologies</h3>
      
      {/* Skills Cards Grid - Matching theme design */}
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => {
          const IconComponent = iconMap[skill.icon.toLowerCase()] || SiReact;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-xl bg-muted hover:bg-muted-foreground/10 transition-all duration-150 ease-[cubic-bezier(0.22, 1, 0.36, 1)]"
            >
              {/* Icon Container */}
              <div className="relative aspect-square flex items-center justify-center p-6">
                <div className="relative z-10 w-16 h-16 flex items-center justify-center">
                  <IconComponent className="w-full h-full text-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
              </div>

              {/* Skill Name - Hidden by default, appears on hover from bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 pb-5 z-10">
                <h4 className="text-sm font-semibold text-center text-foreground group-hover:text-primary transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                  {skill.name}
                </h4>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

