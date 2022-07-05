import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function PersonEdit({ values, setValues, updated, setUpdated }) {


    // const [newValues, setNewValues] = useState({
    //     name: values.name,
    //     occupation: values.occupation
    // });

    const handleChange = (event) => {

        // event.preventDefault();

        setValues(previous_values => {
            return ({
                ...previous_values,
                [event.target.name]: event.target.value
            });
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        //console.log(newValues);

        const url = '/api/people-of-interest/' + values.id + '/edit';
        const data = {
            // name: newValues.name === '' ? values.name : newValues.name,
            // occupation: newValues.occupation === '' ? values.occupation : newValues.occupation
            name: values.name,
            occupation: values.occupation
        }

        //console.log(url);
        console.log(data);

        axios.post(url, data);

        setValues({
            name: '',
            occupation: '',
            hidden: true,
            id: ''
        });

        setUpdated(updated + 1);


        // do something else instead ...
    }

    return (
        <form className={values.hidden ? "person-form hidden" : "person-form"} action="" method="post">
            <label>Name:</label>
            <input type="text"
                name="name"
                value={values.name}
                onChange={(e) => { handleChange(e) }}
            />
            <br />

            <label>Occupation:</label>
            <input type="text"
                name="occupation"
                value={values.occupation}
                onChange={(e) => { handleChange(e) }}
            />

            <button onClick={(e) => {
                handleSubmit(e)
            }}>Save</button>

        </form>
    )
}
