import styles from '@/styles/Title.module.css'

const Title = ({title}) => {
  return (
    <div className={styles.title__section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.underline}></div>
    </div>
  )
}

export default Title
