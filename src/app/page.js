import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>
          Rebecca Roy is a <br></br>web designer & developer <br></br>based in Omaha, NE
        </h1>
        <h2>
          she loves coffee, taking long walks with her dog,<br></br> new restaurants, and things that are designed to last! <br></br>View her work below, or reach out via email or LinkedIn
        </h2>
      </div>
    </div>
  );
}
