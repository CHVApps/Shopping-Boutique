import styles from '../styles/Shop.module.css';

const Shop = () => {
    const categories = [
        {
            name: "Sarees",
            images: [
                "/Images/Sarees/photo-1716504628105-bd76d91e85f2.avif",
                "/Images/Sarees/photo-1736374143053-cb070a404533.avif",
                "/Images/Sarees/photo-1615886753866-79396abc446e.avif",
                "/Images/Sarees/photo-1610030469978-6bb537f3b982.avif",
                "/Images/Sarees/photo-1609748340041-f5d61e061ebc.avif",
            ],
        },
        {
            name: "Salwar",
            images: [
                "/Images/Salwar/free-photo-of-model-in-a-gray-dress-with-purple-embroidery.jpeg",
                "/Images/Salwar/free-photo-of-model-in-a-floral-purple-dress-with-embroidery.jpeg",
                "/Images/Salwar/free-photo-of-model-in-embroidered-gray-dress-and-scarf.jpeg",
            ],
        },
        {
            name: "Lehengas",
            images: [
                "/Images/Lehengas/free-photo-of-portrait-of-smiling-woman-in-traditional-clothing.jpeg",
                "/Images/Lehengas/pexels-photo-2053852.jpeg",
                "/Images/Lehengas/pexels-photo-2106685.jpeg",
                "/Images/Lehengas/pexels-photo-12737572.jpeg",
                "/Images/Lehengas/pexels-photo-12737595.jpeg",
            ],
        },
    ];

    return (
        <div className={styles.shopPage}>
            <h1 className={styles.pageTitle}>Explore Our Exclusive Collections</h1>
            <p className={styles.pageSubtitle}>
                Discover the finest collection of sarees, lehengas, and salwar for every occasion.
            </p>
            <div className={styles.categoryContainer}>
                {categories.map((category) => (
                    category.images.map((image, index) => (
                        <div key={index} className={styles.categoryCard}>
                            <img src={image} alt={category.name} className={styles.categoryImage} />
                            <h3 className={styles.categoryTitle}>{category.name}</h3>
                        </div>
                    ))
                ))}
            </div>
        </div>
    );
};

export default Shop;
