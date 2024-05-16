import Carrousel from "../components/Carrousel";

export default function HomePage() {
  return (
    <>
      <p className="py-16 px-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem maxime
        fugit ipsum hic neque molestiae laborum ratione totam, voluptatem
        expedita nisi culpa consectetur. Quia autem necessitatibus, eius
        quibusdam architecto eum?
      </p>
      <h1 className="text-center text-3xl font-bold mb-6 pt-6">
        Activités en vedettes
      </h1>
      <Carrousel />
    </>
  );
}
