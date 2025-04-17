import React, { useRef } from 'react'
import TextDipserse from './TextDispers'
import gsap from 'gsap'

export default function Bio() {
  const background = useRef(null)

  const setBackground = (isActive) => {
    gsap.to(background.current, { opacity: isActive ? 0.6 : 0 })
  }

  return (
    <div className="flex justify-center py-40">
      <div className="text-[7.5vw] text-center max-w-[75vw] leading-none">
        <TextDipserse setBackground={setBackground}>
          <p className="uppercase font-semibold">Ersaad Gisda</p>
        </TextDipserse>
        <p className="text-[2.5vw] mt-1">Frontend Developer</p>
        <p className="text-[1.5vw] font-thin text-gray-400 mt-10">
          Based in Indonesia
        </p>
      </div>
      <div ref={background} className="background"></div>
    </div>
  )
}
