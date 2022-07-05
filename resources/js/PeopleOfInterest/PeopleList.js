import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import PersonEdit from "./PersonEdit";

export default function PeopleList({ selected_status }) {
    const [data, setData] = useState(null);

    const [values, setValues] = useState({
        name: '',
        occupation: '',
        hidden: true,
        id: ''
    });

    const [updated, setUpdated] = useState(0);

    const loadPeople = async () => {
        try {
            const response = await axios.get('api/people-of-interest' + '?status=' + encodeURIComponent(selected_status));
            console.log(response.data);
            setData(response.data);

        } catch (error) {
            console.log(error); // information about the error
            console.log(error.response); // the response object from the failed request
        }
    };

    //console.log(selected_status);

    useEffect(() => {
        loadPeople();
    }, [selected_status, updated]);

    const handleClick = (e) => {

        //console.log(e);
        setValues(e);

    }

    return data == null ? (
        <h1>Loading...</h1>
    ) : (

        <div style={{ margin: "3em" }}>
            <PersonEdit values={values} setValues={setValues} updated={updated} setUpdated={setUpdated} />
            {data.map((person) => {
                return (
                    <>

                        <p key={person.id}>
                            {person.name} is {person.occupation}
                        </p>
                        <p>Known aliases:</p>
                        <ul>
                            {person.aliases.map((alias) => {
                                return <li key={alias.id}>{alias.alias}</li>;
                                //form - value={person.name}
                            })}
                        </ul>
                        <button
                            onClick={(e) => {
                                handleClick({
                                    name: person.name,
                                    occupation: person.occupation,
                                    hidden: false,
                                    id: person.id
                                })
                            }}
                        >Edit</button>
                        {/* {console.log(person)} */}

                        {/* <PersonEdit value={values} /> */}
                    </>
                );
            })}
        </div>
    );
}
