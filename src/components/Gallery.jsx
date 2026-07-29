import { useState } from "react";

import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
  
  return (
    <section className="gallery-section" id="gallery" data-aos="zoom-in">
      <p className="section-tag">GYM GALLERY</p>

      <h2 className="gallery-heading">
        Explore Our <span>Fitness Space</span>
      </h2>

      <p className="gallery-subtitle">
        Take a look at our training environment, modern equipment, and energetic workout spaces.
      </p>

      <div className="gallery-grid">

        {images.map((img, index) => (
          <div
            key={index}
            className='gallery-item'
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} alt={`Gym gallery ${index + 1}`} />
          </div>
        ))}

      </div>

        {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close">×</button>
          <img src={selectedImage} alt="Gallery preview" />
        </div>
      )}

    </section>
  );
}

export default Gallery;