import Navbar from "../components/Navbar";
import CategorySection from "../components/CategorySection";
import Slideshow from "../components/Slideshow";
import SlideshowNew from "../components/SlideshowNew";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff" }}>
      <Navbar />
      <div
        className="video-container"
        style={{ position: "relative", width: "100%", height: "100vh" }}
      >
        <video
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/Images/logo-video.mp4" type="video/mp4" />
        </video>
        <div
          className="video-overlay"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            fontSize: "56px",
            fontWeight: "bold",
            fontFamily: "'Lucida Handwriting', cursive" ,
          }}
        >
          AISWARYA LAKSHMI
        </div>
        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            fontSize: "18px",
            fontFamily: "'Lucida Handwriting', cursive",
            textAlign: "center",
          }}
        ><br/><br/>
          Ganesh, Centre Tagarapuvalasa, PIN code 531162
          <br />
          Mobile Number: 7661967226
        </div>
      </div>
      <CategorySection />

      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          margin: "50px auto",
          padding: "20px",
        }}
      >
        <div
          style={{
            flex: "1",
            maxWidth: "50%",
            margin: "20px",
          }}
        >
          <Slideshow />
        </div>
        <div
          style={{
            flex: "1",
            maxWidth: "50%",
            margin: "20px",
            textAlign: "center",
            fontFamily: "'Lucida Handwriting', cursive",
          }}
        >
          <h2
            style={{
              color: "#fff",
              fontSize: "36px",
              marginBottom: "20px",
            }}
          >
            Our Special Crafts
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#ccc",
            }}
          >
            Discover our exquisite collection of handcrafted art, showcasing the
            finest traditions of Indian culture. Each piece is made with love,
            care, and precision, ensuring a timeless appeal for your wardrobe
            and home.
          </p>
        </div>
      </section>

      <section
        style={{
          marginTop: "50px",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              color: "#fff",
              fontSize: "36px",
              marginBottom: "20px",
              fontFamily: "'Lucida Handwriting', cursive",
            }}
          >
            New Arrivals
          </h2>
          <SlideshowNew />
        </div>
      </section>

      <section
        style={{
          marginTop: "50px",
          padding: "20px",
        }}
      >
        <h2
          style={{
            color: "#fff",
            fontSize: "36px",
            textAlign: "center",
            marginBottom: "30px",
            fontFamily: "'Lucida Handwriting', cursive",
          }}
        >
          In The Spotlight
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            fontFamily: "'Lucida Handwriting', cursive",
            flexWrap: "wrap",
          }}
        >
          {[
            { img: "/Images/01_READY_TO_SHIP_Web.jpg", title: "Ready to Ship" },
            { img: "/Images/Modern_Heirlooms_Desktop1.jpg", title: "Modern Heirlooms" },
            { img: "/Images/03_TIMELESS_REDS_Web.jpg", title: "Timeless Red" },
            { img: "/Images/02_VEGAN_ACCESSORIES_Web.jpg", title: "Vegan Accessories" },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                background: `url(${item.img}) center/cover no-repeat`,
                width: "220px",
                height: "300px",
                marginBottom: "30px",
                borderRadius: "15px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                position: "relative",
                transition: "transform 0.3s ease-in-out",
              }}
              className="spotlight-card"
            >
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "#fff",
                  textAlign: "center",
                  padding: "10px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  fontFamily: "'Lucida Handwriting', cursive",
                }}
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px",
          fontFamily: "'Lucida Handwriting', cursive",
        }}
      >
        <div style={{ flex: "1", maxWidth: "50%" }}>
          <img
            src="/Images/Gifitng_WEB2128_2440.jpg"
            alt="Crafted Gifts"
            style={{
              width: "100%",
              height: "500px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            }}
          />
        </div>
        <div
          style={{
            flex: "1",
            maxWidth: "50%",
            textAlign: "center",
            color: "#fff",
            padding: "0 20px",
          }}
        >
          <h2 style={{ fontSize: "32px", fontWeight: "bold" }}>
            Thoughtfully Crafted Gifts
          </h2>
          <p style={{ fontSize: "18px", marginTop: "20px" }}>
            Rooted in Andhra Style & meticulously crafted by master artisans,
            these modern-day keepsakes make the perfect gift.
          </p>
          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "16px",
              fontWeight: "bold",
              backgroundColor: "#ff8c00",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.target.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            SHOP NOW →
          </button>
        </div>
      </section>

      <section style={{ width: "100%", marginTop: "50px" }}>
        <img
          src="/Images/frghjkgnv.jpg"
          alt="Full Width Image"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            display: "block",
          }}
        />
      </section>

      <footer
        style={{
          backgroundColor: "#111",
          color: "#fff",
          padding: "40px 0",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            fontFamily: "'Lucida Handwriting', cursive",
          }}
        >
          <div style={{ width: "200px", marginBottom: "20px" }}>
            <h4>CUSTOMER CARE</h4>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li>Orders & Shipment</li>
              <li>Returns & Exchange</li>
              <li>Contact Us</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div style={{ width: "200px", marginBottom: "20px" }}>
            <h4>ABOUT US</h4>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li>Aishwarya Lakshmi Foundation</li>
              <li>Sustainability</li>
              <li>Careers</li>
            </ul>
          </div>

          <div style={{ width: "200px", marginBottom: "20px" }}>
            <h4>CATEGORIES</h4>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li>Women</li>
              <li>Wedding</li>
            </ul>
          </div>

          <div style={{ width: "200px", marginBottom: "20px" }}>
            <h4>LEGAL</h4>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li>Corporate Information</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Shipping Policy</li>
            </ul>
          </div>

          <div style={{ width: "200px", marginBottom: "20px" }}>
            <h4>CONTACT US</h4>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li>Mobile Number: 7661967226</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
