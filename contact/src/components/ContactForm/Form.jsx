import Button from '../Button/Button'
import styles from './Form.module.css'
import {MdMessage} from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"



const Form = () => {
  return (
    <section className={styles.container}>
    <div className={styles.form}>  
    <div className={styles.top}>
    <Button text="View support chat" icon={<MdMessage fontSize="24px"/>} />
    <Button text="Call" icon={<FaPhoneAlt fontSize="24px"/>} />
 
    
    </div>
   
    </div>
    <div className={styles.img}>
    
    </div>
    
    
    </section>

  )
}

export default Form