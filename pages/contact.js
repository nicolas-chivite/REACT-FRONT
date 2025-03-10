import Header from "@/components/header/header";
import ContactForm from "@/components/contact form/contactForm";
import Messages from "@/components/display messages/displayMessage";
import style from "./contact.module.css";
import "../app/globals.css";

const Contact = () => {
  return (
    <>
      <Header />
      <h2 className={style.h2Title}>Remplissez le formulaire</h2>
      <ContactForm />
      <Messages />
    </>
  );
};

export default Contact;
