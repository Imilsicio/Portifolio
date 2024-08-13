"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { delay, motion } from "framer-motion";
// sobre a data
const about = {
  title: "About me",
  descrition:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nesciunt consequatur at.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Imilsicio Monteiro"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+258) 847854416"
    },
    {
      fieldName: "Experiencia",
      fieldValue: "5+ Anos"
    },
    {
      fieldName: "Email",
      fieldValue: "imilsiciomonteiro@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Disponivel"
    },
    {
      fieldName: "Linguas",
      fieldValue: "Portugues, Ingles"
    },


  ]
}

// Dados de Experiencia
const experience = {
  icon: '/assets/resume/badge.svg',
  title: "Minha Experiencia",
  descrition:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nesciunt consequatur at",
  items: [
    {
      company: "Tech solutions Inc.",
      position: "Full Stack Devloper",
      duration: "2022 - Present",
    },
    {
      company: "Handza",
      position: "Full Stack Devloper",
      duration: "2017 - 2018",
    },
    {
      company: "TopTv",
      position: "Editor",
      duration: "2018 - 2019",
    },
    {
      company: "Sip2x",
      position: "Fotografo",
      duration: "2019 - Present",
    },
  ]
};
// Dados de educacao
const education = {
  icon: '/assets/resume/cap.svg',
  title: "Minha Educacao",
  descrition:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nesciunt consequatur at",
  items: [
    {
      institution: "Universidade Eduardo Mondlane",
      degree: "Informatica",
      duration: "2020 - Present",
    },
    {
      institution: "Instituto Politecnico de Empreendedorismo e Tecnologia",
      degree: "Informatica",
      duration: "2017 - 2019",
    },
    {
      institution: "Escola Josina Machel",
      degree: "Editor",
      duration: "2012 - 2019",
    },

  ]
};
const skills = {
  title: "My Skills",
  descrition:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nesciunt consequatur at",
  skillist: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "nodejs",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },

  ]
}
const resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px]mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiencia</TabsTrigger>
            <TabsTrigger value="education">Educacao</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">Sobre me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title} </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.descrition}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3>{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/**dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>

                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title} </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.descrition}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3>{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/**dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p>{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>

                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mxauto xl:mx-0">{skills.descrition}</p>

                </div>
                <ul className="grid grid-cols-2 sm: grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillist.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>

                      </TooltipProvider>
                    </li>;
                  })}
                </ul >
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold ">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.descrition}</p>
                <ul className="grip grip-cols-1 xl:grip-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index)=>{
                    return(
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>

            </TabsContent>

          </div>

        </Tabs>
      </div>


    </motion.div >
  )
}

export default resume
