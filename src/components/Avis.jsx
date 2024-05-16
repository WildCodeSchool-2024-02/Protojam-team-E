import avis from "../data/avis";
import "../css/Avis.css";

function avisRandom(avis) {
  const randomIndex = Math.floor(Math.random() * avis.length);
  return avis[randomIndex];
}

export default function Avis() {
  const randomAvis = avisRandom(avis);

  return (
    <div className="container-avis">
      <p>{randomAvis.title}</p>
      <p>Utilisateur : {randomAvis.name}</p>
      <p>{randomAvis.rating}</p>
      <p>{randomAvis.description}</p>
    </div>
  );
}
