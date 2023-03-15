  import styles from './Title.module.css'
  
  export function Title(props) {
  return (
    <div className={styles.title} style={{ fontSize: props.size, fontWeight: props.weight}}>
      João <span>Almeida</span>
    </div>
  )
}

