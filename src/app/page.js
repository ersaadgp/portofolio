'use client'
import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import Intro from '@/components/Intro'
import Description from '@/components/Description'
import Section from '@/components/Section'
import Stack from '@/components/Stack'
import Bio from '@/components/Bio'
import Project from '@/components/Project'
import Footer from '@/components/Footer'
import Loading from '@/components/Loading'
import { AnimatePresence } from 'framer-motion'
import Company from '@/components/Company'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default

      const locomotiveScroll = new LocomotiveScroll()

      setTimeout(() => {
        setIsLoading(false)

        document.body.style.cursor = 'default'

        window.scrollTo(0, 0)
      }, 2000)
    })()
  }, [])

  return (
    <main>
      <AnimatePresence mode="wait">{isLoading && <Loading />}</AnimatePresence>

      <Intro />
      <Bio />
      <Section />
      <Description />
      <Stack />
      <Project />

      <Company />

      <Footer />
    </main>
  )
}
