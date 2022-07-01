import Image from 'next/image';
import styles from '../styles/Navbar.module.scss';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Image src="/assets/logo.png" alt="VTY Logo" layout="fill" />
      </div>
      <nav className={styles.navbarItems}>
        <a href="#machinepark">Machinepark</a>
        <a href="#products">Producten</a>
        <a href="#about">Over ons</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};