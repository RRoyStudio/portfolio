import Header from "../components/header";
import Image from "next/image";
import styles from "./bones.module.css";


export default function Bones() {

const TextLeft = ({ src, alt, heading, discrp, list }) => {
  return (
    <div className={styles.Rblock}>
      <div className={styles.Rtext}>
        <h3>{heading}</h3>
        <p>{discrp}</p>
        {list && list.length > 0 ? (
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className={styles.Rimg}>
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

const TextLeft2 = ({ src, alt, heading, discrp2, heading2, discrp, list }) => {
  return (
    <div className={styles.Rblock}>
      <div className={styles.Rtext}>
        <h3>{heading}</h3>
        <p>{discrp}</p>
        {list && list.length > 0 ? (
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : null}
        <h3>{heading2}</h3>
        <p>{discrp2}</p>
      </div>
      <div className={styles.Rimg}>
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

const TextRight = ({ src, alt, heading, discrp, list , heading2 }) => {
  return (
    <div className={styles.Rblock}>
      <div className={styles.Rimg}>
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className={styles.Rtext}>
        <h3>{heading}</h3>
        <p>{discrp}</p>
        <br />
        <h3>{heading2}</h3>
        {list && list.length > 0 ? (
          <ul className={styles.bullet}>
            {list.map((item, index) => (
              <li className={styles.bullet} key={index}>
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};


  return (
    <div>
      <div className={styles.header}>
        <Header
          src="/bonesheader.png"
          alt="Bones"
          heading="Bones A Brand & E-Commerce Redesign"
          discrp="Bones, formerly known as Original Bones, is a company known for their signature pillow products, once selling millions of units annually. After changes in their distribution model, the company recognized the need for a refreshed brand identity and a shift in how they sold their products—moving toward a more modern, direct-to-consumer approach.Thats where I came in. Bones needed not only a new e-commerce website but also a full brand redesign to reflect their updated vision. The project aimed to reposition the company for renewed growth while integrating their digital storefront with existing business systems."
        />
      </div>
      <div className={styles.twoblock}>
        <div className={styles.imgblock}>
          <Image
            src="/bonesmock.png"
            alt="bones website mockup"
            width={1920}
            height={1080}
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className={styles.imgblock}>
          <Image
            src="/bonesbrand.png"
            alt="Bones branding"
            width={1920}
            height={1080}
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>
      <div>
        <TextLeft
          src="/mockbones.png"
          alt="bones mockup"
          heading="Goals"
          list={[
            "- Rebrand Original Bones to simply Bones, modernizing the identity while retaining brand equity.",
            "- Design and develop a fully responsive e-commerce website tailored for a clean, user-first shopping experience.",
            "- Seamlessly integrate the website with SAP B1, the companys enterprise resource planning (ERP) system.",
            "- Support future scalability as the brand re-enters the market post-distribution challenges.",
          ]}
        />
      </div>
      <div>
        <TextRight
          src="/bonesbrand2.png"
          alt="bones logo"
          heading="My Role"
          discrp="I led the brand design and creative direction for the rebrand, collaborated on the UI/UX design of the storefront, and coordinated with developers and third-party specialists to handle the technical integration with SAP B1."
          heading2="Key Contributions"
          list={[
            "- Created a refreshed visual identity, including new logo, color palette, and typography.",
            "- Designed wireframes and high-fidelity mockups for the e-commerce site using a modular, scalable system.",
            "- Consulted on product photography and content direction to align with the new brand tone.",
            "- Worked closely with developers and IT teams to map and implement SAP B1 connections to product, inventory, and fulfillment systems.",
          ]}
        />
      </div>
      <div className={styles.imgblock2}>
        <Image
          src="/boneswireframe.png"
          alt="bones website mockup"
          width={1920}
          height={1080}
          layout="responsive"
          objectFit="contain"
        />
      </div>

      <div>
        <TextLeft2
          src="/bonesmockup2.png"
          alt="bones mockup"
          heading="Challenges"
          heading2="Outcomes"
          discrp2="While the website is nearing its final launch phase, the work done has positioned Bones for a strong comeback once inventory issues are resolved. The brand now has a refreshed, modern identity and a digital infrastructure ready to support direct-to-consumer sales, streamlined operations, and future growth."
          list={[
            "- A lengthy timeline due to supply chain and distribution delays, which postponed product availability and the website launch.",
            "- Navigating the complex SAP B1 integration, requiring close technical collaboration and customized data flows.",
            "- Rebranding a legacy company without losing recognition or existing customer trust.",
          ]}
        />
      </div>
    </div>
  );
}