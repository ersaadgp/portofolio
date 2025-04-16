import { useEffect, useState } from 'react'

const LetterCountUp = ({ text, interval = 50 }) => {
  const [visibleText, setVisibleText] = useState('')
  const [index, setIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || index >= text.length) return

    const timer = setTimeout(() => {
      setVisibleText((prev) => prev + text.charAt(index))
      setIndex((prev) => prev + 1)
    }, interval)

    return () => clearTimeout(timer)
  }, [mounted, index, text, interval])

  if (!mounted) return null

  return (
    <p>
      {visibleText}
      <span className="blinking-cursor">|</span>
    </p>
  )
}

export default LetterCountUp
