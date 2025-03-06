import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_CONTACT } from "../graphql/mutations";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState(""); // Message de succès

  // Mutation GraphQL
  const [addContact, { loading, error }] = useMutation(ADD_CONTACT);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addContact({ variables: formData });
      setSuccessMessage("Votre message a été envoyé avec succès !");
      setFormData({ name: "", lastname: "", email: "", message: "" }); // Réinitialiser le formulaire
    } catch (err) {
      console.error("Erreur lors de l'envoi du formulaire :", err);
    }
  };

  return (
    <div className="contact">
      <h2>Contactez-nous</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Prénom :</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Envoi en cours..." : "Envoyer"}
        </button>

        {/* Message de succès affiché sans cacher le formulaire */}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>

      {/* Message d'erreur si échec */}
      {error && (
        <p className="error-message">
          Une erreur est survenue, veuillez réessayer.
        </p>
      )}
    </div>
  );
}

export default Contact;
