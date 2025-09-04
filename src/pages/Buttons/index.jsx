import Button from "@/components/Button";
import styles from "./Buttons.module.css";

const Buttons = () => {
  return (
    <div className={styles.demo}>
      <h3>Default</h3>
      <Button>Click Me</Button>

      <h3>With Onclick</h3>
      <Button onClick={() => alert("Huy")}>Click Me</Button>

      <h3>Variants</h3>
      <div className={styles.row}>
        <Button primary>Primary</Button>
        <Button bordered>Bordered</Button>
        <Button rounded>Rounded</Button>
        <Button primary rounded>
          Primary + Rounded
        </Button>
      </div>

      <h3>Sizes</h3>
      <div className={styles.row}>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>

      <h3>As a Link</h3>
      <Button href="https://google.com" target="_blank">
        Go to Google
      </Button>

      <h3>Disabled</h3>
      <div className={styles.row}>
        <Button disabled>Disabled Button</Button>
        <Button href="https://google.com" disabled>
          Disabled Link
        </Button>
      </div>

      <h3>Loading</h3>
      <div className={styles.row}>
        <Button loading>Loading Button</Button>
        <Button primary loading>
          Loading Primary
        </Button>
      </div>

      <h3>With Icon</h3>
      <div className={styles.row}>
        <Button primary>
          <span>📧</span> Send Email
        </Button>
        <Button primary rounded>
          <span>🔍</span>
        </Button>
      </div>

      <h3>Combine Props</h3>
      <Button primary bordered rounded size="large">
        Combo Props
      </Button>

      <h3>Customization</h3>
      <div className={styles.row}>
        <Button className={styles["button-38"]}>Custom Styled</Button>
        <Button
          className={styles["button-52"]}
          id="btn-test"
          data-testid="button-1"
        >
          With Data Props
        </Button>
      </div>
    </div>
  );
};

export default Buttons;
