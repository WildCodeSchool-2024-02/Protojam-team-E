import avis from "../data/avis";
import "../css/Avis.css";
import { useState } from "react";

function avisRandom(avis) {
  const randomIndex = Math.floor(Math.random() * avis.length);
  return avis[randomIndex];
}

export default function Avis() {
  const [showAllAvis, setShowAllAvis] = useState(false);
  const randomAvis = avisRandom(avis);

  const toggleAvis = () => {
    setShowAllAvis(!showAllAvis);
  };

  const renderAvis = () => {
    if (showAllAvis) {
      return avis.map((avis) => (
        <div key={avis.id} className="container-avis">
          <p>{avis.title}</p>
          <p>Utilisateur : {avis.name}</p>
          <p>{avis.rating}</p>
          <p>{avis.description}</p>
        </div>
      ));
    } else {
      return (
        <div className="avis">
          <h2>Les avis de nos utilisateurs</h2>
          <div className="container-avis">
            <p>{randomAvis.title}</p>
            <p>Utilisateur : {randomAvis.name}</p>
            <p>{randomAvis.rating}</p>
            <p>{randomAvis.description}</p>
          </div>
        </div>
      );
    }
  };
  
  return (
    <div className="button">
      {renderAvis()}
      <button onClick={toggleAvis}>
        {showAllAvis ? "Moins d'avis" : "Tous les avis"}
      </button>
    </div>
  );
}
