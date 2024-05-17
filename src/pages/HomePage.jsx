import Carrousel from "../components/Carrousel";
import HomeActivity from "../components/HomeActivity";

export default function HomePage() {
  return (
    <>
      <p className="py-10 px-6 text-justify">
        Chez CheminVert, nous offrons des escapades en nature pour rééquilibrer
        votre énergie intérieur. Que vous cherchiez aventure, calme ou
        contemplation, nos activités répondent à os besoin. Chaque escapade est
        une occasion de renouer avec vous-même et la nature.
      </p>
      <p className="pb-10 px-6 text-justify">
        Nous vous guidons pour une expérience enrichissante, sécurisée et
        respectueuse de l'environnement. Découvrez les trésors naturels aux
        portes de Paris avec CheminVert.
      </p>
      <div className="block md:hidden">
      <h1 className="text-center text-3xl font-bold mb-6 pt-6">
        Activités en vedettes
      </h1>
      <Carrousel />
      </div>
      <div className="hidden md:block">
        <HomeActivity />
      </div>
    </>
  );
}
