import styles from '../styles/Offer.module.css';

const Offer = () => {
    return (
        <div className={styles.offerPage}>
            <div className={styles.headerSection}>
                <h1 className={styles.pageTitle}>Special Offers</h1>
            </div>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <img
                        src="/Images/Sarees/photo-1610030469978-6bb537f3b982.avif"
                        alt="Saree"
                        className={styles.cardImage}
                    />
                    <div className={styles.cardContent}>
                        <h3>Saree Collection</h3>
                        <p>Elegant sarees perfect for any occasion. Get yours now!</p>
                        <p className={styles.price}>₹2,500</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="/Images/Salwar/free-photo-of-model-in-a-gray-dress-with-purple-embroidery.jpeg"
                        alt="Salwar"
                        className={styles.cardImage}
                    />
                    <div className={styles.cardContent}>
                        <h3>Salwar Collection</h3>
                        <p>Comfort and style combined in our latest salwar collection.</p>
                        <p className={styles.price}>₹1,800</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="/Images/Lehengas/pexels-photo-12737572.jpeg"
                        alt="Lehenga"
                        className={styles.cardImage}
                    />
                    <div className={styles.cardContent}>
                        <h3>Lehenga Collection</h3>
                        <p>Find the perfect lehenga for your special day at discounted prices.</p>
                        <p className={styles.price}>₹4,000</p>
                    </div>
                </div>
            </div>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <img
                        src="/Images/Sarees/photo-1736374143053-cb070a404533.avif"
                        alt="Saree"
                        className={styles.cardImage}
                    />
                    <div className={styles.cardContent}>
                        <h3>Saree Collection</h3>
                        <p>Explore our premium saree collection, made for every occasion.</p>
                        <p className={styles.price}>₹3,000</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="/Images/Salwar/free-photo-of-model-in-a-floral-gray-dress-with-embroidery.jpeg"
                        alt="Salwar"
                        className={styles.cardImage}
                    />
                    <div className={styles.cardContent}>
                        <h3>Salwar Collection</h3>
                        <p>Beautifully designed salwars with intricate embroidery and fine fabrics.</p>
                        <p className={styles.price}>₹2,200</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        src="/Images/Lehengas/pexels-photo-2053852.jpeg"
                        alt="Lehenga"
                        className={styles.cardImage}
                    />
                    <div className={styles.cardContent}>
                        <h3>Lehenga Collection</h3>
                        <p>Timeless lehengas for a royal look at great prices.</p>
                        <p className={styles.price}>₹4,500</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;
