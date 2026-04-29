import "../styles/footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      
      {/* LEFT (non cliquable) */}
      <div className="footer__left">
        <span>ML</span>
      </div>

      {/* CENTER (cliquable Instagram) */}
      <div className="footer__center">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="footer__icon"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>

      {/* RIGHT (liens cliquables) */}
      <div className="footer__right">
        <a href="/mentions-legales">Mentions légales</a>
        <a href="/confidentialite">Termes & Confidentialité</a>
      </div>

    </footer>
  );
}