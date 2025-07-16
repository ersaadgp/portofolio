'use client'

import { useScroll, motion, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import Image from 'next/image'
import Background1 from '../../public/images/4.jpg'
import Background2 from '../../public/images/2.jpg'

export default function Company() {
  const pointer1 = useRef(null)
  const pointer2 = useRef(null)

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: pointer1,
    offset: ['start center', 'start 10%'],
  })

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: pointer2,
    offset: ['start center', 'start 10%'],
  })

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  const op1 = useTransform(scrollYProgress1, [0, 0.5, 1], [0, 1, 0])
  const op2 = useTransform(scrollYProgress2, [0, 1], [0, 1])

  return (
    <div className="relative h-[300vh]">
      {/* TEXT DI ATAS GAMBAR */}
      <div className="fixed top-0 left-0 z-50 w-full p-10 text-white text-xl pointer-events-none">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          quibusdam maiores quo!
        </p>
        <p>
          In perferendis quia obcaecati laborum, veniam tempore nulla, numquam a
          tempora dicta.
        </p>
      </div>

      {/* BACKGROUND IMAGE 1 */}
      <div ref={pointer1} className="sticky top-0 h-[100vh] z-0">
        <motion.div
          style={{ opacity: op1 }}
          className="h-full w-full overflow-hidden"
        >
          <Image
            src={Background1}
            alt="image"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* BACKGROUND IMAGE 2 */}
      <div ref={pointer2} className="sticky top-0 h-[100vh] z-0">
        <motion.div
          style={{ opacity: op2 }}
          className="h-full w-full overflow-hidden"
        >
          <Image
            src={Background2}
            alt="image"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </div>
  )
}
