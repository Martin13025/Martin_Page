import "./Socials.css";

const Socials = () => {
  return (
    <div className="social-media">
      <h2>Socials</h2>
      <div className="socials-container">
        <a
          href="https://www.linkedin.com/in/martin-daniels-a6b2b7269"
          target="_blank"
          className="social-icon"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/Martin13025"
          target="_blank"
          className="social-icon"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://t.me/M2rR4b4t"
          target="_blank"
          className="social-icon"
        >
          <i className="fab fa-telegram"></i>
        </a>
        <a href="mailto:danpain800@gmail.com" className="social-icon">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default Socials;
