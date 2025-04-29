import styles from "./components.module.css";
import Link from "next/link";
import Image from "next/image";

const Frame = ({link, src, alt, width, height, title, tag}) => {
   

    return(
        <div className={styles.frame}>
            <Link href={link}>
                <Image
                className={styles.frameimg}
                src={src}
                alt={alt}
                width={width}
                height={height}
                layout="responsive"
                />
            </Link>
            <div className={styles.discrp}>
                <h4>{title}</h4>
                <p>{tag}</p>
             </div>
        </div>
    );
}

export default Frame;

