import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function PersonEdit({ values, setValues, setNeedUpdate, isHidden, setIsHidden }) {


    const handleChange = (event) => {

        setValues(previous_values => {
            return ({
                ...previous_values,
                [event.target.name]: event.target.value
            });
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = '/api/people-of-interest/' + values.id + '/edit';
        const data = {
            name: values.name,
            occupation: values.occupation
        }


        const response = await axios.post(url, data);
        const response_data = response.data;

        setValues({
            name: '',
            occupation: '',
            id: ''
        });

        setIsHidden(true);

        setNeedUpdate(true);

    }

    return (
        <form className={isHidden ? "person-form hidden" : "person-form"} action="" method="post">
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
