import { useState } from 'react'
import { motion } from 'framer-motion'
import { disperse } from './animation'
import styles from './style.module.scss'

export default function TextDipserse({ children, setBackground }) {
  const [isAnimated, setIsAnimated] = useState(false)

  const getChars = (element) => {
    let chars = []
    if (children.length) {
      children.forEach((el, i) => {
        chars.push(...splitWord(el.props.children, i))
      })
    } else {
      chars.push(...splitWord(element.props.children, 1))
    }
    return chars
  }

  const splitWord = (word, indexOfWord) => {
    let chars = []
    ;[...word].forEach((char, i) => {
      chars.push(
        <motion.span
          custom={indexOfWord * i}
          variants={disperse}
          animate={isAnimated ? 'open' : 'closed'}
          key={char + i}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>,
      )
    })
    return chars
  }

  const manageMouseEnter = () => {
    setBackground(true)
    setIsAnimated(true)
  }

  const manageMouseLeave = () => {
    setBackground(false)
    setIsAnimated(false)
  }

  return (
    <div
      style={{ cursor: 'pointer' }}
      onMouseEnter={() => {
        manageMouseEnter()
      }}
      onMouseLeave={() => {
        manageMouseLeave(false)
      }}
      className={styles.introLine}
    >
      {getChars(children)}
    </div>
  )
}
