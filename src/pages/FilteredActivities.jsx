import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
      <div>
        <h2> Activités {category.replace("-", " ")}</h2>
        <div>
          {filteredActivitiesData.map((activity) => (
            <>
              <div
                className="w-full h-80 max-h-80 w-76 object-cover"
                key={activity.id}
              >
                <img
                  className="w-full h-full object-cover"
                  src={activity.image}
                  alt={activity.name}
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">{activity.name}</div>
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
            </>
          ))}
        </div>
      </div>
    </>
  );
}
