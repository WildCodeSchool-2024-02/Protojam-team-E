export default function Activity({activity}) {
    return(
        <div className="w-80 max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-80 w-76 object-cover"  src={activity.image} alt={activity.name} />
            <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2"> {activity.name}</div>  
            <p className="text-gray-700 text-base"> Rating: {activity.rating} ⭐</p> </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gradient-to-br from-green-500 via-green-300 to-yellow-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-3 ">
            #{activity.category}
            </span>
            <span className=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold ">
            🕐 {activity.access}
            </span>
            </div>  
        </div>
    );
}