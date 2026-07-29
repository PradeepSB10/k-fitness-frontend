import trainer1 from "../assets/trainer1.jpg";
import trainer2 from "../assets/trainer2.jpg";
import trainer3 from "../assets/trainer3.jpg";

function Trainers() {
  return (
    <section className="trainers-section" id="trainers" data-aos="fade-up">
      <p className="section-tag">EXPERT TRAINERS</p>

      <h2 className="trainers-heading">
        Meet Our <span>Coaches</span>
      </h2>

      <p className="trainers-subtitle">
        Train with certified professionals who guide, motivate, and push you
        toward your best version.
      </p>

      <div className="trainers-container">
        <div className="trainer-card">
          <img src={trainer1} alt="Trainer" />
          <div className="trainer-info">
            <h3>Sohail Khan</h3>
            <p>Owner/Trainer</p>
            <span>10+ Years Experience</span>
          </div>
        </div>

        <div className="trainer-card">
          <img src={trainer2} alt="Trainer" />
          <div className="trainer-info">
            <h3>Ganesh</h3>
            <p>Trainer</p>
            <span>10+ Years Experience</span>
          </div>
        </div>

        {/* <div className="trainer-card">
          <img src={trainer3} alt="Trainer" />
          <div className="trainer-info">
            <h3>Arjun Mehta</h3>
            <p>Personal Coach</p>
            <span>6+ Years Experience</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Trainers;