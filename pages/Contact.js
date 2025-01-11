import styles from '../styles/Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.contactPage}>
            <div className={styles.headerSection}>
                <img
                    src="/Images/RTS_2.jpg"
                    alt="Header Background"
                    className={styles.headerImage}
                />
                <div className={styles.overlayContent}>
                    <h1 className={styles.pageTitle}>Contact Us</h1>
                    <div className={styles.infoSection}>
                        <h2 className={styles.contactName}>AISWARYA LAKSHMI</h2>
                        <p className={styles.contactAddress}>
                            Ganesh, Centre Tagarapuvalasa, PIN code 531162
                        </p>
                        <p className={styles.contactPhone}>
                            Mobile Number: <a href="tel:7661967226">7661967226</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.imageGallery}>
                <img
                    src="/Images/Sarees/photo-1610030469978-6bb537f3b982.avif"
                    alt="Saree"
                    className={styles.galleryImage}
                />
                <img
                    src="/Images/Salwar/free-photo-of-model-in-a-gray-dress-with-purple-embroidery.jpeg"
                    alt="Salwar"
                    className={styles.galleryImage}
                />
                <img
                    src="/Images/Lehengas/pexels-photo-12737572.jpeg"
                    alt="Lehenga"
                    className={styles.galleryImage}
                />
            </div>
        </div>
    );
};

export default Contact;
