import { NavLink } from "react-router-dom";

export default function Activity({ activity }) {
  return (
    <NavLink
      to={`/activities/${activity.id}`}
      className="w-80 max-w-sm rounded overflow-hidden shadow-lg hover:scale-125 transition-transform border bg-slate-50 border-green-700"
    >
      <div className="w-full h-80 max-h-80 w-76 object-cover">
        <img
          className="w-full h-full object-cover"
          src={activity.image}
          alt={activity.name}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{activity.name}</div>
        <p className="text-gray-700 text-base">Noté : {activity.rating} /5 ⭐</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gradient-to-br from-green-500 via-green-300 to-yellow-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-3">
          #{activity.category}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold">
          🕐 {activity.access}
        </span>
      </div>
    </NavLink>
  );
}