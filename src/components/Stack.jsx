'use client'
import { useScroll, useTransform, motion } from 'framer-motion'
import Picture1 from '../../public/images/2.jpg'
import Picture2 from '../../public/images/3.jpg'
import Picture3 from '../../public/images/4.jpg'
import Picture4 from '../../public/images/5.jpg'
import Lenis from 'lenis'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Stack() {
  const container = useRef()
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className="overflow-hidden">
      <p className="text-center text-[3vw] text-gray-400 mb-10 font-thin">
        Technology Stack
      </p>
      <div ref={container}>
        <Slide
          texts={['CSS', 'Javascript', 'Typescript', 'HTML']}
          src={Picture1}
          direction={'left'}
          left={'-30%'}
          progress={scrollYProgress}
        />
        <Slide
          texts={['React Query', 'GraphQL', 'Axios', 'Redux']}
          src={Picture2}
          direction={'right'}
          left={'-15%'}
          progress={scrollYProgress}
        />
        <Slide
          texts={['Bootstrap', 'Ant Design', 'Material UI', 'Tailwind']}
          src={Picture3}
          direction={'left'}
          left={'-60%'}
          progress={scrollYProgress}
        />
        <Slide
          texts={['MongoDB', 'Scrum', 'Git Version', 'PostgreSQL']}
          src={Picture4}
          direction={'right'}
          left={'-45%'}
          progress={scrollYProgress}
        />
      </div>
    </main>
  )
}

const Slide = (props) => {
  const direction = props.direction == 'left' ? -1 : 1
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction],
  )

  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex whitespace-nowrap"
    >
      {props.texts.map((row) => (
        <Phrase src={props.src} text={row} key={row} />
      ))}
    </motion.div>
  )
}

const Phrase = ({ src, text }) => {
  return (
    <div className={'px-5 flex gap-5 items-center'}>
      <p className="text-[6vw]">{text}</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image style={{ objectFit: 'cover' }} src={src} alt="image" fill />
      </span>
    </div>
  )
}
