import logo from "/logo.png";
import "./FooterTop.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaRegEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
const FooterTop = () => {
  return (
    <div className="footer-top flex pt-24 pb-12">
      <div className="footer-left">
        <img src={logo} alt="" />
        <h2>Espresso Emporium</h2>
        <p>
          Always ready to be your friend. Come & Contact with us to share your
          memorable moments, to share with your best companion.
        </p>
        <div className="social-icons flex">
          <FaFacebook></FaFacebook>
          <FaTwitter></FaTwitter>
          <FaInstagram></FaInstagram>
          <FaLinkedin></FaLinkedin>
        </div>
        <div className="footer-contact-info">
          <h2>Get in Touch</h2>
          <p className="flex items-center">
            <FaPhoneAlt></FaPhoneAlt>
            <span className="ps-4">+88 01533 333 333</span>
          </p>
          <p className="flex items-center">
            <FaRegEnvelope></FaRegEnvelope>
            <span className="ps-4">info@gmail.com</span>
          </p>
          <p className="flex items-center">
            <FaMapMarkerAlt></FaMapMarkerAlt>
            <span className="ps-4">72, Wall street, King Road, Dhaka</span>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <h2>Connect with Us</h2>
        <form>
          <input
            className="w-full bg-white p-2 border mb-2 rounded-sm"
            type="text"
            name=""
            placeholder="Name"
            id=""
          />
          <input
            className="w-full bg-white p-2 border mb-2 rounded-sm"
            type="email"
            name=""
            placeholder="Email"
            id=""
          />
          <textarea
            className="w-full bg-white p-2 border mb-2 rounded-sm"
            name=""
            placeholder="Message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default FooterTop;
