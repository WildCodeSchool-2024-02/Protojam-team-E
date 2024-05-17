import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomeActivity() {
  const [filteredActivities, setFilteredActivities] = useState();

  useEffect(() => {
    fetch("/src/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        setFilteredActivities(data);
      });
  }, []);

  console.info(filteredActivities);

  return (
    <>
      <h2 className="text-center text-3xl font-bold mb-6 pt-6">
        Nos activités par catégories
      </h2>
      <div className="grid grid-cols-3 gap-y-20 gap-x-10 p-5 justify-items-center">
        <Link to={`Filter/Nuit insolite`}>
          <div className="w-80 max-w-sm rounded overflow-hidden shadow-lg hover:scale-95 transition-transform border bg-slate-50 border-green-700">
            <img
              className="border rounded-t-md w-full h-60 object-cover"
              src="https://www.smartbox.com/fr/blog/wp-content/uploads/2016/11/dormir-a-la-belle-etoile-scaled.jpg"
            />
            <h2 className="p-5 text-center">Nuit insolite</h2>
          </div>
        </Link>
        <Link to={`Filter/Loisirs`}>
          <div className="w-80 max-w-sm rounded overflow-hidden shadow-lg hover:scale-95 transition-transform border bg-slate-50 border-green-700">
            <img
              className="border rounded-t-md w-full h-60 object-cover"
              src="https://plus.unsplash.com/premium_photo-1664300099442-693ae7718393?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <h2 className="p-5 text-center">Loisirs</h2>
          </div>
        </Link>

        <Link to={`Filter/Week-end déconnexion`}>
          <div className="w-80 max-w-sm rounded overflow-hidden shadow-lg hover:scale-95 transition-transform border bg-slate-50 border-green-700">
            <img
              className="border rounded-t-md w-full h-60 object-cover"
              src="https://images.unsplash.com/photo-1559222830-f2620019146e?q=80&w=1736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <h2 className="p-5 text-center">Week-end déconnexion</h2>
          </div>
        </Link>
        <Link to={`Filter/Parc`}>
          <div className="w-80 maw-w-sm rounded overflow-hidden shadow-lg hover:scale-95 transition-transform border bg-slate-50 border-green-700">
            <img
              className="border rounded-t-md w-full h-60 object-cover"
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/11/3d/a6/visite-au-parc-de-sceaux.jpg?w=1200&h=-1&s=1"
            />
            <h2 className="p-5 text-center">Parc</h2>
          </div>
        </Link>
        <Link to={`Filter/Randonnée`}>
          <div className="w-80 max-w-sm rounded overflow-hidden shadow-lg hover:scale-95 transition-transform border bg-slate-50 border-green-700">
            <img
              className="border rounded-t-md w-full h-60 object-cover"
              src="https://www.rambouillet-tourisme.fr/wp-content/uploads/2022/03/Rando-Conseil-Cernay-@OTCV-17-1000x750.jpg"
            />
            <h2 className="p-5 text-center">Randonnée</h2>
          </div>
        </Link>
      </div>
    </>
  );
}
