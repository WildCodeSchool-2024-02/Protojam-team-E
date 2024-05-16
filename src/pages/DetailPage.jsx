import { useLoaderData } from "react-router-dom";
export default function DetailPage() {
  const activity = useLoaderData();

  const {  image, name } = activity;
    return (
    <>
    <h1 className="font-bold text-5xl text-center my-12"> {name}  </h1>
    <div className="flex justify-center mb-8">
          <img src={image} alt={`Image of ${name}`} className="w-2/4" />
        </div>
        <h2>Protojam</h2>
    </>
    )
  }