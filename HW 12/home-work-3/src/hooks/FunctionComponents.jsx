import { useTheme, useThemeUpdate } from "./ThemeContext";
import styles from "./FunctionComponents.module.css";

export default function ContextComponents() {
  const theme = useTheme();
  const toggleTheme = useThemeUpdate();
  return (
    <>
      <div className={styles.container}>
        <button
          onClick={toggleTheme}
          className={
            theme ? `${styles.button_normal}` : `${styles.button_style}`
          }
        >
          Toggle Theme{" "}
        </button>
        <input
          type="text"
          className={theme ? `${styles.input_normal}` : `${styles.input_style}`}
        />
      </div>
    </>
  );
}
