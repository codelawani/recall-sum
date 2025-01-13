'use client'

import { useEffect, useRef } from 'react'
import { useInView, useAnimation } from 'framer-motion'

export default function AnimatedHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start({ scaleX: 1 })
    } else {
      controls.start({ scaleX: 0 })
    }
  }, [isInView, controls])
// bg-[#020817]
  return (
    <section
      ref={ref}
      className="relative min-h-[10vh] flex flex-col items-center justify-center px-4 py-12"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white">
        YouTube Video Summarizer
      </h1>
      {/* <motion.div
        initial={{ scaleX: 0 }}
        animate={controls}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full max-w-[600px] h-[2px] mb-12 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        style={{
          boxShadow: '0 0 20px 1px rgba(59, 130, 246, 0.5)',
        }}
      /> */}
      {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center text-white/90">
        Summarize Anything
      </h2> */}
    </section>
  )
}

