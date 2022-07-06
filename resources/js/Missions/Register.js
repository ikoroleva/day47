import React, { useState, useEffect } from 'react';

export default function Register(props) {

    const [values, setValues] = useState({
        email: '',
        name: '',
        password: '',
        password_confirmation: ''
    })

    const handleSubmit = async (event) => {

        event.preventDefault();

        const response = await fetch('/register', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });
        const response_data = await response.json();

        // with axios
        // const response = await axios.post('/register', values);
        // const response_data = response.data;
    }

    const handleChange = (event) => {
        setValues(previous_values => {
            return ({
                ...previous_values,
                [event.target.name]: event.target.value
            });
        });
    }

    return (
        <form action="/register" method="post" onSubmit={handleSubmit}>

            <input type="text" name="name" value={values.name} onChange={handleChange} />

            <input type="email" name="email" value={values.email} onChange={handleChange} />

            <input type="password" name="password" value={values.password} onChange={handleChange} />

            <input type="password" name="password_confirmation" value={values.password_confirmation} onChange={handleChange} />

            <button>Register</button>

        </form>
    );
}