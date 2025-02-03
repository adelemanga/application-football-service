import React from "react";

const Programs = () => {
  return (
    <div className="programs-container">
      <h1 className="programs-title">PROGRAMMES DE COACHING 🏋️‍♂️</h1>

      {/* Section Tonification et Renforcement Musculaire */}
      <section className="program">
        <h2>TONIFICATION - REMISE EN FORME - RENFORCEMENT MUSCULAIRE</h2>
        <p>
          Optimisez les gestes fonctionnels quotidiens et préparez votre corps
          aux efforts (vie quotidienne, sports intensifs) en éliminant les
          toxines. Ce programme est idéal pour :
        </p>
        <ul>
          <li>🌟 Améliorer votre bien-être global</li>
          <li>🏃‍♂️ Augmenter votre force, résistance et endurance</li>
          <li>🖥️ Combattre la sédentarité au travail</li>
          <li>❄️ Se préparer aux efforts intenses (ex: sports d’hiver)</li>
        </ul>
      </section>

      {/* Section Perte de poids */}
      <section className="program">
        <h2>PERTE DE POIDS - MINCEUR</h2>
        <p>
          Maîtrisez votre perte de poids grâce à des entraînements cardio
          (H.I.I.T ou rythme linéaire) et une alimentation équilibrée.
        </p>
        <ul>
          <li>🔥 Réduction de la masse grasse</li>
          <li>❤️ Renforcement du cœur et amélioration du système sanguin</li>
          <li>🚴‍♂️ Cardio classique (course, vélo, rameur...)</li>
          <li>🤝 Soutien physique, mental et nutritionnel</li>
        </ul>
      </section>

      {/* Section Musculation */}
      <section className="program">
        <h2>MUSCULATION - VOLUME / MASSE / SÈCHE</h2>
        <p>
          La musculation ne se limite plus à la simple construction musculaire.
          Elle développe la force, la masse, le volume et la définition
          musculaire.
        </p>
        <ul>
          <li>🏋️‍♂️ Augmente la puissance musculaire</li>
          <li>⚡ Améliore l'explosivité et la souplesse</li>
          <li>🥩 Associe nutrition et entraînements spécifiques</li>
          <li>📈 Progrès avec charges progressives</li>
        </ul>
      </section>

      {/* Section Rééducation et Correction Posturale */}
      <section className="program">
        <h2>RÉÉDUCATION - CORRECTION POSTURALE - SOIN DU DOS</h2>
        <p>
          Que ce soit à domicile ou en extérieur, nous proposons des options
          flexibles adaptées à votre budget et régularité.
        </p>
        <ul>
          <li>🦵 Rétablissement des capacités physiques</li>
          <li>🧘‍♂️ Amélioration de la posture et soin du dos</li>
          <li>🛠️ Programmes personnalisés avec suivi</li>
          <li>💰 Première séance diagnostic à 40€</li>
        </ul>
      </section>
    </div>
  );
};

export default Programs;
