import Button from "../Button/Button";
import styles from "./Form.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Form = () => {
  return (
    <section className={styles.container}>
      <div className={styles.form}>
        <div className={styles.top}>
          <Button
            text="View support chat"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="Call Vial " icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <form action="">
        <div className={styles.from_control}>
        <label htmlFor="name">Name</label>
        
        <input type="text"   name=""/>
        </div>
        <div className={styles.from_control}>
        <label htmlFor="email">Email</label>
        
        <input type="email"   name="email"/>
        </div>
        <div className={styles.from_control}>
        <label htmlFor="text">Text</label>
        
        <input textarea="text"   name=""/>
        </div>
        <button type="submit">Submit</button>
        </form>
      </div>
      <div className={styles.img}></div>
    </section>
  );
};

export default Form;
