import styles from '../styles/Landing.module.scss';

export default function Landing() {
  return (
    <div className={styles.landing} id="landing">
      <video playsInline autoPlay muted loop allowFullScreen >
        <source src="/assets/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
