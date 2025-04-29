import Image from "next/image";
import styles from "./components.module.css";

const Header = ({src, alt, heading, discrp}) => { 
    return (
        <div className={styles.header}>
            <div className={styles.headerImg}>
                <Image
                    src={src}
                    alt={alt}
                    width={1920}
                    height={1080}
                    layout="responsive"
                    objectFit="contain"
                />
            </div>
            <div className={styles.headerText}>
                <h3>{heading}</h3>
                <p>{discrp}</p>
            </div> 
        </div>
    )
}

export default Header;