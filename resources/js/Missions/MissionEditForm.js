import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MissionEditForm() {

    const [values, setValues] = useState({
        name: '',
        year: ''
    });

    const handleChange = (event) => {
        setValues(previous_values => {
            return ({
                ...previous_values,
                [event.target.name]: event.target.value
            });
        });
    }

    const handleSubmit = async (event) => {
        // prevent the default event behaviour
        event.preventDefault();

        const response = await axios.post('/api/missions/create', values);
        const response_data = response.data;
    }

    return (
        <form className="mission-form" action="" method="post" onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text"
                name="name"
                onChange={(e) => { handleChange(e) }}
            />
            <br />

            <label>Year:</label>
            <input type="text"
                name="year"
                onChange={(e) => { handleChange(e) }}
            />
            <button>Save</button>
        </form>

    )
}