import { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();
  const [activity, setActivity] = useState();

  useEffect(() => {
    fetch("/src/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        const activity = data.find((activity) => activity.id === parseInt(id));
        setActivity(activity);
      });
  }, [id]);
  if (!activity) {
    return null;
  }

  const { image, name, rating, category, description, infos, lien } = activity;
  const handleBack = () => {
    window.history.back();
  };
  return (
    <>
      <button type="button" onClick={handleBack}>
        Retour
      </button>
      <h1 className="font-bold text-5xl text-center my-12">{name}</h1>
      <div className="flex justify-center">
        <div className="max-w-3xl rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-96 object-cover"
            src={image}
            alt={`Image of ${name}`}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-3xl mb-4">{name}</div>
            <p className="text-gray-700 text-lg mb-4">{description}</p>
            <p className="text-gray-700 text-lg font-semibold mb-4">
              Noté : {rating}/5 ⭐
            </p>
            <p className="text-green-700 text-l font-semibold mb-4">
              {" "}
              💡 Informations pratiques :{" "}
            </p>
            <p className="text-gray-700 text-lg mb-4"> {infos} </p>
            <p>
              <a
                href={lien}
                className="text-blue-600 underline hover:text-blue-500 hover:scale-95 transition-transform text-lg  mr-2 mb-3 "
              >
                {" "}
                {lien}{" "}
              </a>
            </p>
            <span className="inline-block bg-gradient-to-br from-green-500 via-green-300 to-yellow-200 rounded-full px-3 py-1 text-sm font-semibold ml-2 mb-4">
              #{category}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold ml-2 mb-4">
              🕐 {activity.access}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
