import Image from 'next/image';
import styles from '../styles/Machinepark.module.scss';
import logo from '../public/assets/logo.png';
import rosilio from '../public/assets/rosilio.jpg';
import microcut from '../public/assets/microcut.jpg';
import maple from '../public/assets/maple.jpg';
import litz from '../public/assets/litz.jpg';
import threedprinter from '../public/assets/threedprinter.jpg';

export default function MachinePark() {
  return (
    <div className={styles.machinepark} id="machinepark">
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Freesmachines</h2>
          <p>Maple 850</p>
          <Image src={maple} alt="VTY Logo" />
          <p>Litz cv800</p>
          <Image src={litz} alt="VTY Logo" />
        </div>
        <div className={styles.card}>
          <h2>Draaibanken</h2>
          <p>Rosilio</p>
          <Image src={rosilio} alt="VTY Logo" />
          <p>Microcut Challenger</p>
          <Image src={microcut} alt="VTY Logo" />
          <p>Tarnow</p>
          <Image src={logo} alt="VTY Logo" />
        </div>
        <div className={styles.card}>
          <h2>3D Printing</h2>
            <p>3d printer name</p>
          <Image src={threedprinter} alt="VTY Logo" />
        </div>
      </div>
    </div>
  );
};