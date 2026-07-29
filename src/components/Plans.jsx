function Plans({ setSelectedPlan }) {
  return (
    <section className="plans-section" id="plans" data-aos="fade-up">
      <p className="section-tag">MEMBERSHIP PLANS</p>

      <h2 className="plans-heading">
        Choose Your <span>Fitness Journey</span>
      </h2>

      <p className="plans-subtitle">
        Flexible membership options designed to help you
        achieve your fitness goals.
      </p>

      <div className="plans-container">

        <div className="plan-card">
          <h3>Basic</h3>
          <h1>₹999</h1>
          <p className="plan-duration">per month</p>

          <ul>
            <li>✓ Gym Access</li>
            <li>✓ Locker Facility</li>
            <li>✓ Cardio Area</li>
            <li>✓ Free WiFi</li>
          </ul>

          <button
            onClick={() => {
              setSelectedPlan("Basic");
              document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Join Now
          </button>
        </div>

        <div className="plan-card popular">
          <div className="popular-badge">
            Most Popular
          </div>

          <h3>Standard</h3>
          <h1>₹2799</h1>
          <p className="plan-duration">3 months</p>

          <ul>
            <li>✓ Gym Access</li>
            <li>✓ Locker Facility</li>
            <li>✓ Cardio Area</li>
            <li>✓ Free WiFi</li>
          </ul>

          <button
            onClick={() => {
              setSelectedPlan("Standard");
              document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Join Now
          </button>
        </div>

        <div className="plan-card">
          <h3>Premium</h3>
          <h1>₹4999</h1>
          <p className="plan-duration">6 months</p>

          <ul>
            <li>✓ Gym Access</li>
            <li>✓ Locker Facility</li>
            <li>✓ Cardio Area</li>
            <li>✓ Free WiFi</li>
          </ul>

          <button
            onClick={() => {
              setSelectedPlan("Premium");
              document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Join Now
          </button>
        </div>

        <div className="plan-card">
          <h3>Elite</h3>
          <h1>₹9499</h1>
          <p className="plan-duration">12 months</p>

          <ul>
            <li>✓ Gym Access</li>
            <li>✓ Locker Facility</li>
            <li>✓ Cardio Area</li>
            <li>✓ Free WiFi</li>
          </ul>

          <button
            onClick={() => {
              setSelectedPlan("Elite");
              document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Join Now
          </button>
        </div>

      </div>

      <div className="membership-info">

        <h3>Membership Information</h3>

        <div className="info-item">
          <div className="info-line"></div>
          <p>
            <strong>One-Time Admission Fee:</strong> ₹500 (payable during registration).
          </p>
        </div>

        <div className="info-item">
          <div className="info-line"></div>
          <p>
            <strong>Personal Training:</strong> Available as an optional service. Charges vary based on trainer and package.
          </p>
        </div>

        <div className="info-item">
          <div className="info-line"></div>
          <p>
            For the latest Personal Training charges and special offers, please contact K FITNESS.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Plans;