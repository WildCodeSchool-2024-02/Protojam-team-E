import { useEffect, useState } from "react";
import Activity from "./Activity";

export default function ActivitiesList () {

        const [activity,setActivity] = useState ([]);

    
    useEffect (() => {
        fetch('/src/data/data.json')
        .then ((response)=> response.json())
        .then ((data)=> setActivity(data))
    },[]);

    return (
        <>
        <h1 className="text-center text-xl font-bold italic mb-6 mt-8">
  Accueil <span> ⭢ </span> <span className="text-green-600 px-2 rounded-md">Activités</span>
</h1>
        <div className="flex flex-wrap gap-4 justify-center">
            {activity && activity.map((a) => (
                <Activity  className="flex-1"   key= {a.id} activity={a} />
            ))}
        </div>
        </>
        
    );
}