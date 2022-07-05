import React from "react";
import { useState, useEffect } from "react";
import PeopleList from "./PeopleList";
import StatusFilter from './StatusFilter';

export default function App() {
    //const [data, setData] = useState(null);
    const [selected_status, setSelectedStatus] = useState('');

    // const fetchData = async () => {
    //     const res = await fetch("/api/people-of-interest");
    //     const parsedResponse = await res.json();
    //     setData(parsedResponse);
    // };

    //console.log(selected_status);

    //useEffect(fetchData, [selected_status]);

    return (
        <div>
            <StatusFilter
                setSelectedStatus={setSelectedStatus}
                selected_status={selected_status} />
            <PeopleList
                selected_status={selected_status} />
        </div>

    );
}
