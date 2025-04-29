import styles from "./page.module.css";
import Frame from "./components/frame.js";
import Link from "next/link";




export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>
          Rebecca Roy is a <br/>web designer & developer based in
          Omaha, NE
        </h1>
        <h2>
          she loves coffee, goin on hikes with her dog,<br/> new
          restaurants, and things that are designed to last! <br/> View her
          work below, or reach out via <Link href="mailto:rebecca.roy98@gmail.com" className={styles.HLink}>email</Link> or <Link href="https://www.linkedin.com/in/rrebecca-roy/" className={styles.HLink}>LinkedIn</Link>
        </h2>
      </div>
      <div className={styles.grid}>
        <Frame
          link="/CFM"
          src="/CFM-card.png"
          alt="CFM Global"
          width="516"
          height="516"
          title="CFM Global"
          tag="Web Design & Marketing | 2025"
        />
        <Frame
          link="/Rroy"
          src="/rroy-card.png"
          alt="Rroy"
          width="516"
          height="516"
          title="Rroy Studio"
          tag="Web & Brand Development | 2025"
        />
        <Frame
          link="/Bones"
          src="/bones-card.png"
          alt="Bones"
          width="516"
          height="516"
          title="Bones"
          tag="Web & Brand Design | 2025"
        />
      </div>
    </div>
  );
}
