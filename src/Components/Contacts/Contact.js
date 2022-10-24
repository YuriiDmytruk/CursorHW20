import "../../Styles/Contact.css";

function Contact(props) {
  return (
    <div>
      <p>
        {props.contact.firstName}, {props.contact.lastName},
        {props.contact.phone}
      </p>
    </div>
  );
}

export default Contact;