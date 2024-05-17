import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function FilteredActivities() {
  const [filteredActivitiesData, setFilteredActivitiesData] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch("/src/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter(
          (activity) => activity.category === category
        );
        setFilteredActivitiesData(filteredData);
      });
  }, [category]);

  console.info(filteredActivitiesData);

  return (
    <>
    <div className="mt-10 text-center">
      <Link
        to={`/`}
        className="border bg-slate-50 border-green-700 p-2"
      >
        Retour
      </Link>
    </div>
      <div className="flex gap-5 justify-center">
        <div>
          <h2 className="text-center text-xl font-bold mb-6 mt-8">
            Activités {category.replace("-", " ")}
          </h2>
          <div>
            {filteredActivitiesData.map((activity) => (
              <>
                <Link to={`/activities/${activity.id}`}>
                  <div className="w-80 m-5 max-w-sm rounded overflow-hidden shadow-lg hover:scale-95 transition-transform border bg-slate-50 border-green-700">
                    <div
                      className="w-full h-80 max-h-80 w-76 object-cover align-center"
                      key={activity.id}
                    >
                      <img
                        className="w-full h-full object-cover"
                        src={activity.image}
                        alt={activity.name}
                      />
                    </div>
                    <div className="px-6 py-4">
                      <div className="font-bold text-2xl mb-2">
                        {activity.name}
                      </div>
                      <p className="text-gray-700 text-base">
                        Noté : {activity.rating} /5 ⭐
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-gradient-to-br from-green-500 via-green-300 to-yellow-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-3">
                        #{activity.category}
                      </span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold">
                        🕐 {activity.access}
                      </span>
                    </div>
                  </div>
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
