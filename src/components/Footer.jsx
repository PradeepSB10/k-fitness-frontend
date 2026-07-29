function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <h2>K FITNESS</h2>
        <p>DON'T QUIT STAY FIT</p>
      </div>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#plans">Plans</a>
        <a href="#trainers">Trainers</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-social">
        <a href="https://www.instagram.com/k__fitness___/" target="_blank">Instagram</a>
        <a href="https://wa.me/9632752145" target="_blank">WhatsApp</a>
      </div>

      <p className="footer-copy">
        © 2026 K FITNESS. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;