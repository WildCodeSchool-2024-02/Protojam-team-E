export default function Activity({activity,}) {
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-80 w-76 object-cover"  src={activity.image} alt={activity.name} />
            <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"> {activity.name}   
            </div>  
            </div>  
        </div>
    );
}