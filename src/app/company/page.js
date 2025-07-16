'use client'
import { useScroll, motion, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import Image from 'next/image'
import Background1 from '../../../public/images/4.jpg'
import Background2 from '../../../public/images/2.jpg'

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

  const op1 = useTransform(scrollYProgress1, [0, 1, 2], [0, 1, 0])
  const op2 = useTransform(scrollYProgress2, [0, 1], [0, 1])

  return (
    <div className="relative">
      <div
        className="flex justify-center"
        style={{ zIndex: 3, height: '200vh' }}
        ref={pointer1}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          quibusdam maiores quo! In perferendis quia obcaecati laborum, veniam
          tempore nulla, numquam a tempora dicta qui illum ipsum sapiente
          assumenda esse.
        </p>
      </div>
      <div style={{ zIndex: 3, height: '200vh' }} ref={pointer2}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
        quibusdam maiores quo! In perferendis quia obcaecati laborum, veniam
        tempore nulla, numquam a tempora dicta qui illum ipsum sapiente
        assumenda esse.
      </div>
      <div className="fixed top-0">
        <motion.div
          style={{ opacity: op1 }}
          className="h-[100vh] overflow-hidden"
        >
          <Image
            src={Background1}
            alt="image"
            style={{
              objectFit: 'cover',
              zIndex: 1,
              height: '100vh',
              width: '100%',
            }}
          />
        </motion.div>
      </div>
      <div className="fixed top-0">
        <motion.div
          style={{ opacity: op2 }}
          className="h-[100vh] overflow-hidden"
        >
          <Image
            src={Background2}
            alt="image"
            style={{
              objectFit: 'cover',
              zIndex: 2,
              height: '100vh',
              width: '100vw',
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}
