import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';


const StatusFilter = ({ selected_status, setSelectedStatus }) => {

    const [statuses, setStatuses] = useState([]);


    //console.log(selected_status);

    const loadStatuses = async () => {
        try {
            const response = await axios.get('api/statuses');
            console.log(response.data);
            setStatuses(response.data);
        } catch (error) {
            console.log(error); // information about the error
            console.log(error.response); // the response object from the failed request
        }
    };

    const handleClick = (e) => {

        e.preventDefault();
        setSelectedStatus(e.target.getAttribute("data-status"));

    }

    useEffect(() => {
        loadStatuses();
    }, []);

    return (
        <div className={"status-filter__status"}>
            {statuses.map((status) => {
                return (
                    <button className={
                        "status-filter__status" +
                        (selected_status == status.id
                            ? "status-filter__status-selected"
                            : "")
                    }
                        key={status.id}
                        data-status={status.id}
                        onClick={(e) => { handleClick(e) }}>{status.name}</button>
                );
            })}
        </div>
    );
}

export default StatusFilter;