import Image from 'next/image';
import styles from '../styles/Machinepark.module.scss';
import logo from '../public/assets/logo.png';

export default function MachinePark() {
  return (
    <div className={styles.machinepark} id="machinepark">
      <h1>MACHINEPARK</h1>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Milling</h2>
          <Image src={logo} alt="VTY Logo" />
        </div>
        <div className={styles.card}>
          <h2>Lathes</h2>
          <Image src={logo} alt="VTY Logo" />
        </div>
        <div className={styles.card}>
          <h2>3D Printing</h2>
          <Image src={logo} alt="VTY Logo" />
        </div>
      </div>
    </div>
  );
};