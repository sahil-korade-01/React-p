import styles from './Button.module.css'

const Button = ({icon,text}) => {
  return (
    <button className={styles.p_btn}>
    {icon}
    {text}


    </button>
  )
}

export default Button