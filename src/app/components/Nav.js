import Image from 'next/image';
import styles from './components.module.css';
import Link from 'next/link';

export default function Nav() {
    return (
        <div className={styles.nav}>
            <Image
                src="/Name-black-07.png"
                alt="Rebecca Roy Logo"
                width={300}
                height={100}
                className={styles.logo}
            />
            <Link href="/" className={styles.link}><h3>Home</h3></Link>
        </div>

    )}