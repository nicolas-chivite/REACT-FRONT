"use client";

const onSubmit = async (event) => {
  event.preventDefault();

  const formData = {
    content: event.target.content.value,
    firstName: event.target.firstName.value,
    lastName: event.target.lastName.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
  };

  const url = "http://localhost:8000/messages";

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const resultat = await response.json();
  console.log("Réussite :", resultat);

  alert("Message envoyée avec succès !");
  event.target.reset();
};

const ContactForm = () => {
  return (
    <div className="form">
      <form className="contactForm" onSubmit={onSubmit}>
        <label htmlFor="firstName">Prénom</label>
        <input type="text" name="firstName"></input>
        <label htmlFor="lastName">Nom</label>
        <input type="text" name="lastName"></input>
        <label htmlFor="email">Email</label>
        <input type="email" name="email"></input>
        <label htmlFor="phone">Téléphone</label>
        <input type="text" name="phone"></input>
        <label htmlFor="message">Message</label>
        <input type="text" name="content"></input>
        <button>Envoyer</button>
      </form>
    </div>
  );
};

export default ContactForm;
