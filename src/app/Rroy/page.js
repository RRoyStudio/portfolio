import styles from './roy.module.css';
import Header from '../components/header';
import TextLeft from '../components/text-left';
import TextRight from '../components/text-right';
import Image from 'next/image';


export default function Roy (){
    return (
    <div>
        <div className={styles.header}>
            <div className={styles.headerLogo}>
                <Image 
                    src="/rroy-studio.png"
                    alt="Rroy Studio"
                    width={1920}
                    height={1080}
                    layout="responsive"
                    objectFit="contain"
                />
            </div>
      <Header
        src="/royheader.jpg"
        alt="Rroy Studio"
        heading="Rroy Studio"
        discrp="As a freelance designer, I specialize in building thoughtful, visually cohesive brands and websites for small businesses, startups, and entrepreneurs. My work focuses on creating digital experiences that not only look great, but also function seamlessly—aligning with each clients unique goals and identity. From logo design and visual systems to responsive websites and e-commerce platforms, I bring a strategic, design-forward approach to every project. Whether launching a new brand or refining an existing one, I collaborate closely with clients to craft solutions that elevate their presence and connect authentically with their audience."
      />
      </div>
      <div className={styles.threeimg}>
        <div className={styles.img}>
            <Image 
                src="/roy1.jpg"
                alt="Rroy Studio"
                width={1920}
                height={1080}
                layout="responsive"
                objectFit="contain"
            />
        </div>
        <div className={styles.img}>
            <Image 
                src="/roy2.jpg"
                alt="Rroy Studio"
                width={1920}
                height={1080}
                layout="responsive"
                objectFit="contain"
            />
        </div>
        <div className={styles.img}>
            <Image 
                src="/roy3.jpg"
                alt="Rroy Studio"
                width={1920}
                height={1080}
                layout="responsive"
                objectFit="contain"
            />
        </div>
      </div>
    </div>
    );
}