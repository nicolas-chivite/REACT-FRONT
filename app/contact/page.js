import ContactForm from "@/components/contact form/contactForm";
import Messages from "@/components/display messages/displayMessage";
import style from "./contact.module.css";

const Contact = () => {
  return (
    <>
      <h2 className={style.h2Title}>Remplissez le formulaire</h2>
      <ContactForm />
      <Messages />
    </>
  );
};

export default Contact;
