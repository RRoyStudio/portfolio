import styles from "./cfm.module.css";
import Header from "../components/header";
import Image from "next/image";
import TextRight from "../components/text-right";
import TextLeft from "../components/text-left";


export default function CFM() {
    return (
      <div className={styles.body}>
        <div className={styles.header}>
          <Header
            src="/cfm-header.png"
            alt="CFM Global"
            heading="CFM Global"
            discrp="CFM Global faced several challenges with its existing website. The site was outdated, contained missing and broken links, and the company lacked direct access to make updates. Additionally, the website had low visibility, limiting its effectiveness in reaching potential customers. The goal of this project was to modernize the website, enhance its functionality, and establish a strong, cohesive brand presence across CFM Global and its affiliated companies."
          />
        </div>
        <div className={styles.companies}>
          <Image
            className={styles.PUI}
            src="/PUI.png"
            alt="PUI"
            width="1920"
            height="1080"
            layout="responsive"
          />
          <Image
            className={styles.CFM}
            src="/CompleteFM.png"
            alt="CFM"
            width="1920"
            height="1080"
            layout="responsive"
          />
          <Image
            className={styles.BFMW}
            src="/BFMW.png"
            alt="BFMW"
            width="1920"
            height="1080"
            layout="responsive"
          />
          <Image
            className={styles.CFMGlobal}
            src="/CFMgobal.png"
            alt="CFM Global"
            width="1920"
            height="1080"
            layout="responsive"
          />
        </div>
        <div className={styles.section}>
          <TextRight
            src="/cfmwebsite.png"
            alt="CFM Global new website"
            heading="Branding and Design"
            discrp="The branding and design process for CFM Global involved creating a cohesive visual identity that aligned with the company's mission and values. This included designing a new logo, selecting a color palette, and developing a consistent typography style. The goal was to create a modern and professional look that would resonate with the target audience."
          />
        </div>
        <div className={styles.section}>
          <TextLeft
            src="/AHRbooth.png"
            alt="CFM Global new website"
            heading="Website Development"
            descpt="By addressing CFM Globals challenges with a strategic and structured approach, this project has significantly improved the companys online presence and brand consistency. The next phase will further strengthen its digital footprint and user experience."
            before={["one", "two", "three"]}
          />
        </div>
      </div>
    );
}