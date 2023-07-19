import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCopyright,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

// Footer component for footer section
const Footer = () => {
  const date = new Date();
  return (
    <div className="footer">
      <span>Created By: Manish Verma </span>

      <span>
        <FontAwesomeIcon icon={faCopyright} />
        <strong>{` ${new Date().getFullYear()} Hot Grills`}</strong>
      </span>
    </div>
  );
};

export default Footer;
