import Carrousel from "../components/Carrousel";
import HomeActivity from "../components/HomeActivity";

export default function HomePage() {
  return (
    <>
      <p className="py-10 px-10 text-justify md:mx-40">
        Avec CheminVert, nous vous proposons une expérience complète dans la
        nature, pour rééquilibrer votre énergie intérieure. Nous offrons une
        sélection d'activités pour répondre à vos besoins et aspirations, que
        vous cherchiez l'aventure, la contemplation ou le calme.
      </p>
      <p className="pb-10 px-10 text-justify md:mx-40">
        Nous vous guidons à travers des escapades en pleine nature, pour nourrir
        votre bien-être physique et mental. Nous vous fournissions toutes les
        informations nécessaires pour que votre expérience soit enrichissante,
        sécurisée et respectueuse de l'environnement.
      </p>
      <p className="pb-10 px-10 text-justify md:mx-40">
        Venez explorer avec nous les trésors naturels aux portes de Paris et
        découvrez un monde de sérénité et de découverte.
      </p>
      <div className="hidden md:block">
        <HomeActivity />
      </div>
        <h1 className="text-center text-3xl font-bold mb-6 pt-6">
          Activités en vedettes
        </h1>
        <Carrousel />
    </>
  );
}
