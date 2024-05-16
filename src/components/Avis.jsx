import avis from "../data/avis";

function avisRandom(avis) {
  const randomIndex = Math.floor(Math.random() * avis.length);
  return avis[randomIndex];
}

export default function Avis() {
  const randomAvis = avisRandom(avis);

  return (
    <div>
      <p>{randomAvis.name}</p>
      <p>{randomAvis.rating}</p>
      <h2>{randomAvis.title}</h2>
      <p>{randomAvis.description}</p>
    </div>
  );
}
