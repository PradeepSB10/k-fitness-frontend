import about_img from "../assets/about_img.jpg";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-image" data-aos="fade-right">
        <img src={about_img} alt="Gym Image" />
      </div>

      <div className="about-content" data-aos="fade-left">
        <p className="section-tag">ABOUT US</p>

        <h2>More Than A <span>Gym</span></h2>

        <p>
          At <span>K FITNESS</span>, we help people transform their bodies, strengthen their mindset,
          build confidence, and achieve their fitness goals through
          expert coaching and a motivating environment.
        </p>

        <div className="about-features">
          <div>✓ Modern Equipment</div>
          <div>✓ Certified Trainers</div>
          <div>✓ Nutrition Guidance</div>
          <div>✓ Dedicated Ladies Section</div>
        </div>
      </div>
    </section>
  );
}

export default About;