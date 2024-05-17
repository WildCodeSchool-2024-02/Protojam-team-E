import { useState } from "react";
import "../css/contact.css";
import Popup from "../components/Popup";

export default function ContactPage() {
  const [showPopup, setShowPopup] = useState(false);

  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const togglePopup = () => {
    if (
      contactForm.firstName !== "" &&
      contactForm.email !== "" &&
      contactForm.lastName !== "" &&
      contactForm.message !== ""
    ) {
      setShowPopup(true);
    }
  };

  const togglePopupClose = () => {
    setShowPopup(false);
    setContactForm({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="form-container" > 
      <section>
      <img  src="https://plus.unsplash.com/premium_photo-1663040014450-11d8157ad539?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        <h1 className="titleform">Une idée à suggérer ? </h1>
      </section>
              
      
      

      <form className="border bg-slate-50 border-green-700" onSubmit={(event) => event.preventDefault()}>
        <input
          className="nom-container"
          required
          placeholder="Nom*"
          name="lastName"
          value={contactForm.lastName}
          onChange={(e) => handleChangeForm(e)}
        />

        <input
          className="prenom-container"
          required
          placeholder="Prénom*"
          name="firstName"
          value={contactForm.firstName}
          onChange={(e) => handleChangeForm(e)}
        />

        <input
          className="mail-container"
          required
          placeholder="Mail*"
          name="email"
          value={contactForm.email}
          onChange={(e) => handleChangeForm(e)}
        />

        <textarea
          required
          className="textarea-container"
          placeholder="Ecrivez votre Message*"
          name="message"
          id="messagearea"
          cols="3"
          rows="10"
          value={contactForm.message}
          onChange={(e) => handleChangeForm(e)}
        />

        <button className="button" type="submit" onClick={togglePopup}>
          Envoyez votre demande
        </button>
      </form>
      

      {showPopup && (
        <div className="popupContainer">
          <Popup />
          <button
            className="closePopup"
            type="submit"
            onClick={togglePopupClose}
          >
            Confirmer
          </button>
        </div>
      )}
    </div>
  );
}

