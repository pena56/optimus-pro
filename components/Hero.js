import React from 'react'
import styles from '@/styles/Home.module.css'

const Hero = ({text}) => {
  return (
    <div className="hero">
      <h1 className={styles.title}>{text}</h1>
    </div>
  )
}

export default Hero
