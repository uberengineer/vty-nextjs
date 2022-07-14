import Image from 'next/image';
import styles from '../styles/Navbar.module.scss';
import logo from '../public/assets/logo.png';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <Image src={logo} alt="VTY Logo" layout="fill" objectFit="contain" />
      </div>
      <nav className={styles.navbar_items}>
        <ul>
          <li>
            <a href="#machinepark">Machinepark</a>
          </li>
          <li>
            <a href="#products">Producten</a>
          </li>
          <li>
            <a href="#about">Over ons</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};