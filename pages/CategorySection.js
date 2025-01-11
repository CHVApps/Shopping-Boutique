import styles from '../styles/CategorySection.module.css';

const categories = [
  { name: "Sarees", image: "/Images/Sarees/photo-1716504628105-bd76d91e85f2.avif", extraImages: [
    "/Images/Sarees/photo-1736374143053-cb070a404533.avif",
    "/Images/Sarees/photo-1615886753866-79396abc446e.avif",
    "/Images/Sarees/photo-1610030469978-6bb537f3b982.avif",
    "/Images/Sarees/photo-1609748340041-f5d61e061ebc.avif"
  ]},
  { name: "Salwar", image: "/Images/Salwar/free-photo-of-model-in-a-gray-dress-with-purple-embroidery.jpeg", extraImages: [
    "/Images/Salwar/free-photo-of-model-in-a-floral-purple-dress-with-embroidery.jpeg",
    "/Images/Salwar/free-photo-of-model-in-embroidered-gray-dress-and-scarf.jpeg",
    "/Images/Salwar/pexels-photo-8887122.jpeg",
    "/Images/Salwar/pexels-photo-20777182.webp"
  ]},
  { name: "Lehengas", image: "/Images/Lehengas/free-photo-of-portrait-of-smiling-woman-in-traditional-clothing.jpeg", extraImages: [
    "/Images/Lehengas/pexels-photo-2053852.jpeg",
    "/Images/Lehengas/pexels-photo-2106685.jpeg",
    "/Images/Lehengas/pexels-photo-12737572.jpeg",
    "/Images/Lehengas/pexels-photo-12737595.jpeg"
  ]},
  { name: "Kurtis", image: "/Images/Kurti/pexels-photo-13178920.jpeg" },
  { name: "Gowns", image: "/Images/Gowns/woman-traditional-dress-stands-front-bush_1113980-2176.jpg" },
  { name: "Innerwear", image: "/Images/Inners/asian-woman-near-palm-trees-posing-summer-dress-vacation_133748-23345.avif" },
  { name: "Duppattas and Shawls", image: "/Images/Duppatas/beautiful-lady-with-manila-shawl_23-2148235344.avif" },
  { name: "Western Dresses", image: "/Images/ww/pexels-photo-29504057.webp" },
  { name: "Bridal Wear", image: "/Images/Bridal wear/RVR19431-Edit.jpg.webp" },
];

const CategorySection = () => {
  return (
    <section className={styles.categorySection}>
      <h2 className={styles.title}>Shop By Category</h2>
      <div className={styles.categoryGrid}>
        {categories.map((category, index) => (
          <div key={index} className={styles.categoryCard}>
            <img src={category.image} alt={category.name} className={`${styles.categoryImage} ${category.name === 'Sarees' || category.name === 'Salwar' || category.name === 'Lehengas' ? styles.blurImage : ''}`} />
            <div className={styles.overlay}>
              <button className={styles.shopButton}>Shop {category.name}</button>
            </div>
            {category.extraImages && (
              <div className={styles.popUpImages}>
                {category.extraImages.map((image, i) => (
                  <img key={i} src={image} alt={`Image ${i}`} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
