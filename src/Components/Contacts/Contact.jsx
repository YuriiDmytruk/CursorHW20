import "./styles/Contact.css";
import {NavLink} from "react-router-dom";

function Contact(props) {
  return (
    <div>
      <NavLink to={"/contacts/" + props.contact.firstName} state={props.contact}>
        <p>
          {props.contact.firstName}, {props.contact.lastName},
          {props.contact.phone}
        </p>
      </NavLink>
    </div>
  );
}

export default Contact;
