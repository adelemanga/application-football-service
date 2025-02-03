// pages/index.js
import Link from "next/link";
import Image from "next/image";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className="video-container">
      <iframe
        className="background-video"
        src="https://www.youtube.com/embed/iva0pgQasCU?autoplay=1&mute=1&loop=1&playlist=iva0pgQasCU"
        title="YouTube video"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

      <div className="content">
        <p className="text">
          <h1 className="home">AL IHSSANE-Coaching-football</h1>
          <br />
          <h3>
            UN ENTRAÎNEMENT PERSONNALISÉ POUR ATTEINDRE VOS OBJECTIFS
          </h3>{" "}
          Vous rêvez d'améliorer votre condition physique, votre technique et
          votre mental pour exceller sur le terrain ? Mon coaching personnalisé
          est conçu pour les joueurs de football, amateurs comme confirmés,
          désireux d'optimiser leur performance.{" "}
          <h3>UN ACCOMPAGNEMENT COMPLET ✔</h3>
          Séances sur mesure : Un programme d'entraînement adapté à votre
          niveau, votre poste et vos ambitions. ✔ Suivi individualisé : Analyse
          de vos progrès, corrections techniques et conseils stratégiques. ✔
          Préparation physique et mentale : Travail sur l’endurance, la vitesse,
          la puissance et la gestion du stress. ✔ Conseils nutritionnels : Une
          alimentation optimisée pour une récupération rapide et une meilleure
          performance. <h3>ENTRAÎNEZ-VOUS COMME UN PRO</h3> Basé à Paris et sa
          région, mon accompagnement s’adapte à vos besoins : renforcement
          musculaire, explosivité, technique de dribble, frappe, endurance…
          Chaque séance est pensée pour maximiser votre potentiel et faire de
          vous un joueur plus performant et confiant. 🚀 Prêt à repousser vos
          limites et à progresser ? Contactez-moi dès aujourd’hui pour un
          coaching sur mesure !
        </p>
      </div>
      <Footer/>
    </div>
  );
}
