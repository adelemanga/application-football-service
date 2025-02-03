import React from "react";

const Presentation = () => {
  return (
    <div className="coaching-container">
      {/* Présentation du coach */}
      <section className="about-coach">
        <h2 className="section-title">À PROPOS</h2>
        <p className="about-text">
          Diplômé d'État et passionné de football depuis l'enfance, j’ai choisi
          d’accompagner les joueurs dans leur progression technique, physique et
          mentale. Mon coaching est axé sur la performance et l’épanouissement,
          en mettant en avant des méthodes adaptées aux besoins de chaque
          athlète.
        </p>
      </section>

      {/* Expériences / Qualifications / Spécialités */}
      <div className="info-grid">
        <div className="info-box">
          <h3>EXPERIENCES</h3>
          <ul>
            <li>🏆 Coach sportif personnel (6 ans)</li>
            <li>⚽ Coach en club de football (Ligue régionale)</li>
            <li>💪 Préparateur physique d'équipes de jeunes</li>
            <li>🔹 Conseiller sportif et diététique</li>
          </ul>
        </div>
        <div className="info-box">
          <h3>QUALIFICATIONS</h3>
          <ul>
            <li>📜 BP JEPS Activités de la Forme</li>
            <li>⛑️ PSC1 (Prévention et secours civiques niveau 1)</li>
            <li>🔒 CFS (Certificat de formation à la sécurité)</li>
          </ul>
        </div>
        <div className="info-box">
          <h3>SPÉCIALITÉS</h3>
          <ul>
            <li>⚽ Entraînement technique footballistique</li>
            <li>🏋️ Musculation et renforcement musculaire</li>
            <li>🔥 Perte de poids et remise en forme</li>
            <li>🥊 Boxe conditionning & TRX training</li>
          </ul>
        </div>
      </div>

      {/* Section Avantages */}
      <section className="advantages">
        <h2 className="section-title">AVANTAGES DU COACHING</h2>
        <p className="about-text">
          La pratique d'activités encadrées est essentielle pour la performance
          et la motivation. Le coaching personnalisé vous permet d’optimiser
          votre progression avec un suivi individualisé.
        </p>

        <div className="advantage-grid">
          <div className="advantage-box">
            <h4>1️⃣ Personnalisation</h4>
            <p>Programme sur mesure pour atteindre vos objectifs.</p>
          </div>
          <div className="advantage-box">
            <h4>2️⃣ Confort & Commodité</h4>
            <p>Coaching à domicile, plus flexible et motivant.</p>
          </div>
          <div className="advantage-box">
            <h4>3️⃣ Encadrement Professionnel</h4>
            <p>Apprenez les bonnes techniques pour éviter les blessures.</p>
          </div>
          <div className="advantage-box">
            <h4>4️⃣ Suivi Personnalisé</h4>
            <p>Analyse de progression avec des ajustements précis.</p>
          </div>
          <div className="advantage-box">
            <h4>5️⃣ Confidentialité</h4>
            <p>Séances privées sans regards extérieurs.</p>
          </div>
          <div className="advantage-box">
            <h4>6️⃣ Flexibilité</h4>
            <p>Des horaires adaptés à votre emploi du temps.</p>
          </div>
          <div className="advantage-box">
            <h4>7️⃣ Attention Individuelle</h4>
            <p>Un coaching dédié pour des progrès plus rapides.</p>
          </div>
          <div className="advantage-box">
            <h4>8️⃣ Motivation</h4>
            <p>Un accompagnement motivant pour dépasser vos limites.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Presentation;
