import React from 'react'
import Image from 'next/image'
import Background from '../../public/images/2.jpg'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import LetterCountUp from '@/utils/motion'

export default function Intro() {
  const container = useRef()
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh'])

  return (
    <div className="h-screen overflow-hidden">
      <div
        className="absolute text-center font-thin text-white w-full mt-[30vh]"
        style={{ zIndex: 50, letterSpacing: 10 }}
      >
        <LetterCountUp text="SCROLL TO EXPLORE" interval={70} />
      </div>
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src={Background}
          fill
          alt="image"
          style={{ objectFit: 'cover' }}
        />
      </motion.div>
    </div>
  )
}
