import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import PersonEditForm from "./PersonEditForm";

export default function PeopleList({ selected_status }) {

    const [data, setData] = useState(null);
    const [values, setValues] = useState({
        name: '',
        occupation: '',
        id: ''
    });

    const [isHidden, setIsHidden] = useState(true);

    const [needUpdate, setNeedUpdate] = useState(false);


    const loadPeople = async () => {
        try {
            const response = await axios.get('api/people-of-interest' + '?status=' + encodeURIComponent(selected_status));
            console.log(response.data);
            setData(response.data);
            setNeedUpdate(false);

        } catch (error) {
            console.log(error); // information about the error
            console.log(error.response); // the response object from the failed request
        }
    };

    //console.log(selected_status);

    useEffect(() => {
        loadPeople();
    }, [selected_status, needUpdate]);

    const handleClick = (e) => {


        setValues(
            {
                name: e.target.getAttribute("personName"),
                occupation: e.target.getAttribute("personOccupation"),
                id: e.target.getAttribute("personId")
            });

        setIsHidden(false);

    }

    return data == null ? (
        <h1>Loading...</h1>
    ) : (

        <div style={{ margin: "3em" }}>
            <PersonEditForm
                values={values}
                setValues={setValues}
                setNeedUpdate={setNeedUpdate}
                isHidden={isHidden}
                setIsHidden={setIsHidden}
            />
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
                        <button personName={person.name} personOccupation={person.occupation} isHidden={false} personId={person.id}
                            onClick={(e) => {
                                handleClick(e)
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
