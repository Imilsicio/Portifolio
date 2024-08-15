"use client";

import {motion} from "framer-motion";
import {Swiper, SwiperSlide} from "swiper/react"
import React, {useState} from 'react';
import "swiper/css";
import { BsArrow90DegRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider,TooltipTrigger } from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";

const project = [
  {
    num:'01',
    category:'frontend',
    title: 'project 1',
    description: ''
  }
]

const work = () => {
  return (
    <div>
      work page
    </div>
  )
}

export default work