import { useState } from "react";
import styles from "./Counter.module.css";

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles["counter-section"]}>
        <div className={styles["counter-display"]}>
          <span
            className={
              value === 0 ? styles.gray : value < 1 ? styles.red : styles.green
            }
            id={styles.counterValue}
          >
            {value}
          </span>

          <p className={styles["counter-text"]}>
            {value === 0 ? "Bằng không" : value < 1 ? "Số âm" : "Số dương"}
          </p>
        </div>

        <div className={styles["counter-controls"]}>
          <button
            onClick={() => setValue(value - 1)}
            className={`${styles["control-btn"]} ${styles.decrease}`}
          >
            <span>-</span>
            Giảm
          </button>

          <button
            onClick={() => setValue(0)}
            className={`${styles["control-btn"]} ${styles.reset}`}
          >
            <span>↻</span>
            Reset
          </button>

          <button
            onClick={() => setValue(value + 1)}
            className={`${styles["control-btn"]} ${styles.increase}`}
          >
            <span>+</span>
            Tăng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
