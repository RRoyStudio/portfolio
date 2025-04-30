import styles from './roy.module.css';
import Header from '../components/header';
import Image from 'next/image';


export default function Roy (){

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

    const TextRight = ({ src, alt, list }) => {
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
            {list && list.length > 0 ? (
              <ul>
                {list.map((item, index) => (
                  <li key={index}>{item}</li>
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
            src="/royheader.jpg"
            alt="Rroy Studio"
            heading="Rroy Studio"
            discrp="As a freelance designer, I specialize in building thoughtful, visually cohesive brands and websites for small businesses, startups, and entrepreneurs. My work focuses on creating digital experiences that not only look great, but also function seamlessly—aligning with each clients unique goals and identity. From logo design and visual systems to responsive websites and e-commerce platforms, I bring a strategic, design-forward approach to every project. Whether launching a new brand or refining an existing one, I collaborate closely with clients to craft solutions that elevate their presence and connect authentically with their audience."
          />
        </div>
        <div className={styles.threeimg}>
          <div className={styles.imgblock}>
            <Image
              src="/LateNights.png"
              alt="Graphic from the zoo"
              width={1920}
              height={1080}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={styles.imgblock}>
            <Image
              src="/mainevent1.jpg"
              alt="Main event sign"
              width={1920}
              height={1080}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={styles.imgblock}>
            <Image
              src="/Mochapaws.jpg"
              alt="Mocha Paws promotional graphic"
              width={1920}
              height={1080}
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
        <div>
          <TextLeft
            src="/palms-01.png"
            alt="Palms branding"
            heading="My process when building a brand."
            discrp="Creating a strong, memorable brand is about more than just a logo—its about building a visual identity that tells a story and resonates with your audience. Heres how I approach brand design, from concept to completion:"
            list={[
              "Discovery & Strategy: Every project starts with a conversation. I take time to understand your business, goals, target audience, and competitive landscape. Through questionnaires or strategy calls, I gather insights that guide the direction of your brand.",
              "Mood boarding & Inspiration: Based on our initial discussions, I create mood boards to explore potential visual directions. This helps define the look and feel of the brand—color palettes, typography, imagery, and overall tone—before jumping into design.",
            ]}
          />
        </div>
        <div>
          <TextRight
            src="/SMzoo-01.png"
            alt="Social Media for the Zoo"
            list={[
              "Concept Development: Using the approved direction, I design multiple logo concepts and visual identity elements. Each concept is presented with mockups and rationale to show how it could live in the real world and connect with your audience.",
              "Refinement & Iteration: We collaborate to select and refine the strongest concept. Feedback is welcomed and encouraged, and I make thoughtful adjustments until everything aligns with your vision.",
              "Brand Guidelines & Final Delivery: Once finalized, I package your brand into a complete system: logo files in all formats, color codes, typography, and usage guidelines to keep everything consistent as your brand grows.",
            ]}
          />
        </div>
        
      </div>
    );
}