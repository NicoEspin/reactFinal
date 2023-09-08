//css
import "./ContactPage.css";
//material ui
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const ContactPage = () => {
  return (
    <>
      <section className="contact-container">
        <div className="section-title">
          <h2 className="contact-title">Informacion de Contacto</h2>
        </div>

        <div className="contact-item">
          <h2 className="item-title">Github</h2>
          <div className="contact-icon">
            <GitHubIcon />
          </div>

          <div className="contact-info">
            <a
              className="contact-link"
              target="_blank"
              href="https://github.com/NicoEspin?tab=repositories"
            >
              Ver mis repositories
            </a>
          </div>
        </div>

        <div className="contact-item">
          <h2 className="item-title">Email</h2>
          <div className="contact-icon">
            <EmailIcon />
          </div>
          <div className="contact-info">nikoespin123@gmail.com</div>
        </div>

        <div className="contact-item">
          <h2 className="item-title">Linkedin</h2>
          <div className="contact-icon">
            <LinkedInIcon />
          </div>

          <div className="contact-info">
            <a
              className="contact-link"
              target="_blank"
              href="https://www.linkedin.com/in/nico-espin-2b59a0183/"
            >
              Ver mi perfil
            </a>
          </div>
        </div>
      </section>
      <div className="sep"></div>
    </>
  );
};
