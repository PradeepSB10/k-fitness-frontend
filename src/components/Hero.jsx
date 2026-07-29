import heroImg from "../assets/hero_img.jpg";

function Hero() {
  return (
    <section
      className="hero-section"
      id="home"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-tagline">Premium Fitness Club</p>

        <h1>
          DON'T QUIT <br />
          <span>STAY FIT</span>
        </h1>

        <p className="hero-description">
          Train with expert coaches, modern equipment, and a fitness community
            built to push you toward your goals.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="primary-btn">Join Now</a>
          <a href="#plans" className="secondary-btn">View Plans</a>
        </div>

                        {/* STATS CARD SECTION */}

        <div className="hero-stats">
            <div className="stat-box">
                <h3>500+</h3>
                <p>Happy Members</p>
            </div>

            {/* <div className="stat-box">
                <h3>10+</h3>
                <p>Expert Trainers</p>
            </div> */}

            <div className="stat-box">
                <h3>10+</h3>
                <p>Years Experience</p>
            </div>
        </div>

                            {/* STATS CARD END */}

      </div>
    </section>
  );
}

export default Hero;