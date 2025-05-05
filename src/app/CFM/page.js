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
      <div className={styles.buttons}>
        <button className={styles.button}>
          <a href="https://www.cfmglobal.com/" target="_blank">
            Current Website
          </a>
        </button>
        <button className={styles.button}>
          <a
            href="https://www.figma.com/proto/IpvWINcGmfG86YRcFdRj9V/CFM-Global?page-id=1%3A13&node-id=1-14&p=f&viewport=45%2C53%2C0.22&t=VIG5jCFOUUL6S8vp-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A14"
            target="_blank"
          >
            Figma Mockup
          </a>
        </button>
      </div>
      <div className={styles.companies}>
        <div className={styles.complay}>
          <Image
            className={styles.PUI}
            src="/PUI.png"
            alt="PUI"
            width="1920"
            height="1080"
            layout="responsive"
          />
        </div>
        <div className={styles.complay}>
          <Image
            className={styles.CFM}
            src="/CFMedia.png"
            alt="CFM"
            width="1920"
            height="1080"
            layout="responsive"
          />
        </div>
        <div className={styles.complay}>
          <Image
            className={styles.BFMW}
            src="/BondedFMW.png"
            alt="BFMW"
            width="1920"
            height="1080"
            layout="responsive"
          />
        </div>
        <div className={styles.complay}>
          <Image
            className={styles.CFMGlobal}
            src="/CFMglobal.png"
            alt="CFM Global"
            width="1920"
            height="1080"
            layout="responsive"
          />
        </div>
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
          heading="Results & Impact"
          descpt="By addressing CFM Globals challenges with a strategic and structured approach, this project has significantly improved the companys online presence and brand consistency. The next phase will further strengthen its digital footprint and user experience."
          before={[
            "Established a modern, functional website with improved usability.",
            "Created a unified brand identity across CFM Global and its subsidiaries.",
            "Implemented data tracking to gain insights into website performance and visitor behavior.",
            "Increased website engagement through targeted marketing efforts.",
            "Laid the groundwork for a fully custom website to enhance long-term scalability and performance.",
          ]}
        />
      </div>
      <div className={styles.section}>
        <TextRight
          src="/cfm4.png"
          alt="CFM Global promotional image"
          heading="Future Development & Next Steps"
          discrp="While the website has significantly improved over the past year, this project continues to evolve. The next phase involves developing a fully custom website using React for a dynamic and interactive front-end experience and WordPress (Headless CMS) to provide flexible content management capabilities.
            This new approach will offer better scalability, faster performance, and a more seamless user experience. I am currently leading the development of this custom solution to enhance CFM Globals digital presence further."
        />
      </div>
    </div>
  );
}
