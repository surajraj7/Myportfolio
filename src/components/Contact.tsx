import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:suraj4311899@mail.com" data-cursor="disable">
                suraj4311899@mail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+977 9749887055" data-cursor="disable">
                +977 9749887055
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
  href="https://github.com/surajraj7"
  target="_blank"
  rel="noopener noreferrer"
  data-cursor="disable"
  className="contact-social"
>
  Github <MdArrowOutward />
</a>
            <a
              href="https://www.linkedin.com/in/suraj-raj-20042538b/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/_asuraj_/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Suraj Raj</span>
            </h2>
            <h5>
              <MdCopyright /> 2024
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
