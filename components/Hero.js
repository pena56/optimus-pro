import React from 'react'
import styles from '@/styles/Home.module.css'
import TradingWiget from './TradingWiget'

const Hero = ({ text }) => {
  return (
    <>
      <div className='hero'>
      <div className="text__container">
        <h1 className={styles.title}>{text}</h1>
        <h4>attain financial stability and live the life you desire.</h4>
        <button className="main_btn">Get Started</button>
      </div>
    </div>
    <TradingWiget />
    </>
  )
}

export default Hero
