import React from 'react'
import styles from '@/styles/Home.module.css'

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className="loading"></div>
      {/* <h2 className={styles.title}>Development in progress...</h2> */}
    </div>
  )
}

export default Loading
