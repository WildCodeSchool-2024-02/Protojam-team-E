import { useEffect, useState } from "react";
import Activity from "./Activity";

export default function ActivitiesList() {
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [category, setCategory] = useState("");

  const categories = [
    "Toutes les activités",
    "Loisirs",
    "Week-end déconnexion",
    "Parc",
    "Nuit insolite",
    "Randonnée"
  ];

  useEffect(() => {
    fetch('/src/data/data.json')
      .then((response) => response.json())
      .then((data) => {
        setActivities(data);
        setFilteredActivities(data); 
      });
  }, []);

  useEffect(() => {
    if (category === "Toutes les activités" || category === "") {
      setFilteredActivities(activities);
    } else {
      setFilteredActivities(
        activities.filter((activity) => activity.category === category)
      );
    }
  }, [category, activities]);

  return (
    <>
      <h1 className="text-center text-xl font-bold italic mb-6 mt-8"> Découvrez nos activités 🤩 </h1>

      <div className="flex justify-center mb-4">
        <select
          className="p-2 border rounded-md"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {filteredActivities.map((activity) => (
          <Activity key={activity.id} activity={activity} />
        ))}
      </div>
    </>
  );
}