import Image from 'next/image';
import styles from '../styles/Footer.module.scss';

import kmlogo from '../public/assets/km-logo-white.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        KvK: 39071711<br></br>Alle rechten voorbehouden vty.nl @2022
      </p>
      <div className={styles.footer_logo} >
        <Image src={kmlogo} alt="KM Logo" layout="fill" objectFit="contain" />
      </div>
    </footer>
  );
};
