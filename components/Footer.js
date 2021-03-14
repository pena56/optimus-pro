import React from 'react'
import styles from '../styles/Home.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <a
          href="https://olivegeeks.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Olivegeeks{' '}
          {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
        </a>
      </footer>
  )
}

export default Footer
