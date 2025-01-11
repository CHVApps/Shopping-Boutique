import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
    return (
        <div className={styles.heroContainer}>
            <video className={styles.heroVideo} autoPlay loop muted>
                <source src="/Images/logo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.overlayText}>
                AISWARYA LAKSHMI
            </div>
        </div>
    );
};

export default HeroSection;
