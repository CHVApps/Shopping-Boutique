import styles from '../styles/About.module.css';

const About = () => {
    return (
        <div className={styles.aboutPage}>
            <div className={styles.headerSection}>
                <h1 className={styles.pageTitle}>About Us</h1>
            </div>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <img
                        src="/Images/Sarees/photo-1736374143053-cb070a404533.avif"
                        alt="Saree"
                        className={styles.cardImage}
                    />
                    <div className={styles.cardContent}>
                        <h3>Sarees</h3>
                        <p>Explore our elegant saree collection that speaks volumes about tradition and style.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="/Images/Salwar/free-photo-of-model-in-a-floral-purple-dress-with-embroidery.jpeg"
                        alt="Salwar"
                        className={styles.cardImage}
                    />
                    <div className={styles.cardContent}>
                        <h3>Salwar</h3>
                        <p>Discover a range of salwars designed for comfort and elegance.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="/Images/Lehengas/pexels-photo-2053852.jpeg"
                        alt="Lehenga"
                        className={styles.cardImage}
                    />
                    <div className={styles.cardContent}>
                        <h3>Lehengas</h3>
                        <p>Browse through our beautiful lehengas that are perfect for any occasion.</p>
                    </div>
                </div>
            </div>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <img
                        src="/Images/Sarees/photo-1615886753866-79396abc446e.avif"
                        alt="Saree"
                        className={styles.cardImage}
                    />
                    <div className={styles.cardContent}>
                        <h3>Sarees</h3>
                        <p>Our sarees are crafted with love, offering comfort and style in every piece.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="/Images/Salwar/free-photo-of-model-in-embroidered-gray-dress-and-scarf.jpeg"
                        alt="Salwar"
                        className={styles.cardImage}
                    />
                    <div className={styles.cardContent}>
                        <h3>Salwar</h3>
                        <p>Choose from a variety of salwars that promise both elegance and comfort.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="/Images/Lehengas/pexels-photo-12737572.jpeg"
                        alt="Lehenga"
                        className={styles.cardImage}
                    />
                    <div className={styles.cardContent}>
                        <h3>Lehengas</h3>
                        <p>Find the perfect lehenga for your special day, full of grace and tradition.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
