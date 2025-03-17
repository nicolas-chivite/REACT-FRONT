"use client";

const onSubmit = async (event) => {
  event.preventDefault();

  const formData = {
    content: event.target.content.value,
    expeditor: event.target.expeditor.value,
    object: event.target.object.value,
    // email: event.target.email.value,
    // phone: event.target.phone.value,
  };

  const url = "http://127.0.0.1:8000/admin/message/new/{student.id}";

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
        <label htmlFor="expeditor">Expéditeur</label>
        <input type="text" name="expeditor"></input>
        <label htmlFor="object">Objet</label>
        <input type="text" name="object"></input>
        {/* <label htmlFor="email">Email</label>
        <input type="email" name="email"></input>
        <label htmlFor="phone">Téléphone</label>
        <input type="text" name="phone"></input> */}
        <label htmlFor="content">Message</label>
        <input type="text" name="content"></input>
        <button>Envoyer</button>
      </form>
    </div>
  );
};

export default ContactForm;
