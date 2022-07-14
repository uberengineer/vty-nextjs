import Image from 'next/image';

import styles from '../styles/Landing.module.scss';

import office from '../public/assets/office.jpg';
import product4 from '../public/assets/product4.png';
import phone from '../public/assets/phone.svg';

export default function Landing() {
  return (
    <div className={styles.landing} id="landing">
      <div className={styles.landing_alert}>
        <Image src={phone} alt="vty" height={32} width={64} />
        <span>06-54655813</span>
        <div className={styles.landing_alert_spacer} />
        <Image src={phone} alt="vty" height={32} width={64} />
        <span>06-36110971</span>
      </div>
      <div className={styles.landing_image}>
        <Image src={product4} alt="vty" />
      </div>
      <div className={styles.landing_text}>
        <div className={styles.landing_title}>
          <h2>Verspaningstechniek<br></br>IJzerman</h2>
        </div>
        <div className={styles.landing_description}>
          <h5>
            Uw partner in precisie-engineering op maat
          </h5>
        </div>
        <div className={styles.landing_times}>
          <p>
            Openingstijden:
          </p>
          <p>
            maandag t/m donderdag van 07:00 tot 16:00 uur
          </p>
          <p>
            vrijdag van 07:00 tot 13:00 uur
          </p>
        </div>
      </div>
    </div>
  );
};
