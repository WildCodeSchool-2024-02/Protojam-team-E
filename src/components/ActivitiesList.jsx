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
        <h1>Activities</h1>
        <div className="flex flex-wrap gap-4 justify-center">
            {activity && activity.map((a) => (
                <Activity key= {a.id} activity={a} />
            ))}
        </div>
        </>
        
    );
}