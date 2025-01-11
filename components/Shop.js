import styles from '../styles/Shop.module.css';

const Shop = () => {
    return (
        <div className={styles.shopPage}>
            <h1 className={styles.pageTitle}>Discover the Elegance of Our Ladies' Boutique</h1>
            <p className={styles.pageSubtitle}>
                Curated styles for every occasion. Shop our exclusive collection now!
            </p>
            <div className={styles.productsContainer}>
                <div className={styles.productCard}>
                    <img src="/Images/dress1.jpg" alt="Evening Gown" className={styles.productImage} />
                    <h3 className={styles.productName}>Elegant Evening Gown</h3>
                    <p className={styles.productDescription}>
                        A stunning evening gown designed to turn heads at any event.
                    </p>
                    <span className={styles.productPrice}>$129.99</span>
                </div>
                <div className={styles.productCard}>
                    <img src="/Images/bag1.jpg" alt="Designer Handbag" className={styles.productImage} />
                    <h3 className={styles.productName}>Designer Handbag</h3>
                    <p className={styles.productDescription}>
                        Luxurious handbag to complement your style.
                    </p>
                    <span className={styles.productPrice}>$199.99</span>
                </div>
                <div className={styles.productCard}>
                    <img src="/Images/shoes1.jpg" alt="Leather Heels" className={styles.productImage} />
                    <h3 className={styles.productName}>Classic Leather Heels</h3>
                    <p className={styles.productDescription}>
                        Premium leather heels for a touch of sophistication.
                    </p>
                    <span className={styles.productPrice}>$99.99</span>
                </div>
                <div className={styles.productCard}>
                    <img src="/Images/scarf1.jpg" alt="Silk Scarf" className={styles.productImage} />
                    <h3 className={styles.productName}>Silk Scarf</h3>
                    <p className={styles.productDescription}>
                        Add elegance to your outfit with this delicate silk scarf.
                    </p>
                    <span className={styles.productPrice}>$39.99</span>
                </div>
            </div>
        </div>
    );
};

export default Shop;
