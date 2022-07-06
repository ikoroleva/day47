import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import MissionList from "./MissionList";
import MissionEditForm from "./MissionEditForm";
import Register from "./Register";


export default function App() {

    return (
        <BrowserRouter>
            <h1>Mission app</h1>
            <p>This is Missions react app</p>

            <nav>
                <Link to="/missions">List of missions</Link>
                <Link to="/missions/create">Create a new mission</Link>
                <Link to="/missions/register">Register</Link>
            </nav>

            <Routes>
                <Route exact path="/missions" element={<MissionList />} />
                <Route exact path="/missions/create" element={<MissionEditForm />} />
                <Route exact path="/missions/register" element={<Register />} />

            </Routes>
        </BrowserRouter>
    )
}