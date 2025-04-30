import Image from "next/image";
import styles from "./components.module.css";

const TextLeft =({src,alt,heading, descpt, before, after}) => {
    // before is for before description and after is for after description
    
    return (
      <div className={styles.Lblock}>
        <div className={styles.Ltext}>
          <h3>{heading}</h3>
                {before && before.length > 0 ? (
                <ul>
                    {before.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
                ) : null}
        
          <p>{descpt}</p>
                {after && after.length > 0 ? (
                <ul>
                    {after.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
                ) : null}
        </div>
        
        <div className={styles.Limg}>
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
    )
  };


export default TextLeft;