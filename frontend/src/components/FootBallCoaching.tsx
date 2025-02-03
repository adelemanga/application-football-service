import Link from "next/link";
import React from "react";

const FootballCoaching = () => {
  return (
    <div>
      {/* Section Tarifs & Packs */}
      <Pricing />
    </div>
  );
};

// Composant Pricing inclus dans FootballCoaching
const Pricing = () => {
  return (
    <div className="pricing-container">
      <h1 className="pricing-title">TARIFS & PACKS</h1>

      {/* Section Tarifs à la séance */}
      <section className="pricing-section">
        <h2>À LA SÉANCE</h2>
        <div className="pricing-box">
          <p className="session-name">SÉANCE TEST</p>
          <p className="session-time">1H - 40€</p>
          <button className="reserve-btn">
            <Link href="/contact">RÉSERVER</Link>
          </button>
        </div>
        <div className="pricing-box">
          <p className="session-name">LA SÉANCE</p>
          <p className="session-time">1H - 90€</p>
          <button className="reserve-btn">
            <Link href="/contact">RÉSERVER</Link>
          </button>
        </div>
        <div className="pricing-box">
          <p className="session-name">PERSONNE SUPPLÉMENTAIRE</p>
          <p className="session-time">25€</p>
          <button className="reserve-btn">
            <Link href="/contact">RÉSERVER</Link>
          </button>
        </div>
      </section>

      {/* Section Packs */}
      <section className="pricing-section">
        <h2>LES PACKS</h2>

        <div className="pricing-box bronze">
          <h3>PACK BRONZE</h3>
          <p>10 SÉANCES</p>
          <p className="session-price">80€ / UNITÉ</p>
          <p className="total-price">SOIT 800€</p>
          <button className="reserve-btn">
            <Link href="/contact">RÉSERVER</Link>
          </button>
        </div>

        <div className="pricing-box silver">
          <h3>PACK SILVER</h3>
          <p>20 SÉANCES</p>
          <p className="session-price">70€ / UNITÉ</p>
          <p className="total-price">SOIT 1400€</p>
          <button className="reserve-btn">
            <Link href="/contact">RÉSERVER</Link>
          </button>
        </div>

        <div className="pricing-box gold">
          <h3>PACK GOLD</h3>
          <p>40 SÉANCES</p>
          <p className="session-price">65€ / UNITÉ</p>
          <p className="total-price">SOIT 2600€</p>
          <button className="reserve-btn">
            <Link href="/contact">RÉSERVER</Link>
          </button>
        </div>
      </section>

      {/* Section Coaching à distance */}
      <section className="pricing-section">
        <h2>À DISTANCE / EN VISIO</h2>

        <div className="pricing-box">
          <p className="session-name">LA SÉANCE</p>
          <p className="session-time">1H - 60€</p>
          <button className="reserve-btn">
            <Link href="/contact">RÉSERVER</Link>
          </button>
        </div>

        <div className="pricing-box">
          <p className="session-name">À PARTIR DE 2 SÉANCES / SEMAINE</p>
          <p className="session-time">50€</p>
          <ul className="session-benefits">
            <li>✅ 1h de séance visio personnalisée</li>
            <li>✅ Mouvements expliqués et démontrés</li>
            <li>✅ Dépassement et motivation accrue</li>
            <li>✅ Adaptation basée sur les résultats</li>
          </ul>
          <button className="reserve-btn">
            <Link href="/contact">RÉSERVER</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default FootballCoaching;
