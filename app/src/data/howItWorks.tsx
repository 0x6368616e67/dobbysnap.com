import React from "react";
import { Presentation, Component, BugPlay, BarChart4 } from "lucide-react";


export const steps = [
    {
      number: "01",
      icon: <Presentation className="h-6 w-6" />,
      title: "沟通需求",
      description: "DobbySnap 团队会与您一起深入沟通，把零散想法梳理成清晰需求，确认目标、范围与优先级，再进入设计开发，确保 MVP 一次做对。"
    },
    {
      number: "02",
      icon: <Component className="h-6 w-6" />,
      title: "设计方案",
      description: "DobbySnap 团队会输出可视化原型与技术蓝图，逐条对齐功能、架构与里程碑，确认可行性与风险后再写代码，让后续开发一次到位、少走弯路。"
    },
    {
      number: "03",
      icon: <BugPlay className="h-6 w-6" />,
      title: "协同开发",
      description: "DobbySnap 团队会嵌入您的日常节奏：每日 stand-up、实时 PR、共用看板与自动化 CI，需求微调可当周上线，代码与产品同步生长。"
    }
  ];
  