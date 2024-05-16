import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();
  const [activity, setActivity] = useState();

  useEffect(() => {
    fetch('/src/data/data.json')
      .then((response) => response.json())
      .then((data) => {
        const activity = data.find(activity => activity.id === parseInt(id));
        setActivity(activity);
      });
  }, [id]);
  if (!activity) {
    return null;
  }

  const { image, name, rating, category, description } = activity;

  return (
    <>
      <h1 className="font-bold text-5xl text-center my-12">{name}</h1>
      <div className="flex justify-center">
        <div className="max-w-3xl rounded overflow-hidden shadow-lg">
          <img className="w-full h-96 object-cover" src={image} alt={`Image of ${name}`} />
          <div className="px-6 py-4">
            <div className="font-bold text-3xl mb-4">{name}</div>
            <p className="text-gray-700 text-lg mb-4">{description}</p>
            <p className="text-gray-700 text-lg font-semibold mb-4">Noté : {rating}/5 ⭐</p>
            <span className="inline-block bg-gradient-to-br from-green-500 via-green-300 to-yellow-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-4">
              #{category}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}