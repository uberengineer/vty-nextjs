import styles from '../styles/About.module.scss';

export default function About() {
  return (
    <div className={styles.about} id="about">
      <div className={styles.about_text}>
        <ul>
          <li>Established 2000 Since 3 years 2nd generation IJzerman</li>
          <li>kunststof verpakkingsindustrie</li>
          <li>transportbedrijven</li>
          <li>glasvezelindustrie</li>
          <li>tractorpulling</li>
          <li>installaties voedingsindustrie</li>
          <li>truck op- en ombouw</li>
          <li>pompspecialisten</li>
          <li>poederprocesengineering</li>
          <li>Staal, RVS, aluminium, gereedschapsstaal of kunststof</li>
          <li>enkelstuks of kleine series</li>
        </ul>
      </div>
      <div className={styles.about_video}>
        <video playsInline autoPlay muted loop allowFullScreen >
          <source src="/assets/video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
  ;
}

