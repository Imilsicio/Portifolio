import { easeInOut, motion } from 'framer-motion';
import React from 'react'

const stairAnimation = {
    initial:{
        top: "8%",
    },
    animate: {
        top:"100%",
    },
    exit: {
        top:["100%", "0%"],
    }
};

const reverseIndex = (index)=>{
    const totalSteps = 6;
     return  totalSteps - index - 1;
}
const Stairs = () => {
  return (
    <>
     {[...Array(6)].map((_, index)=> {
        return(
        <motion.div key = {index} variants={stairAnimation}
        initial="initial"
        animate = "animate"
        exit = "exit"
        transition={{
            duration: 0.5,
            ease : "easeInOut",
            delay : reverseIndex(index) * 0.1,
            
        }}
        className="h-full w-full bg-white  relative"
        />
    )
     })}
    </>
  )
}

export default Stairs
