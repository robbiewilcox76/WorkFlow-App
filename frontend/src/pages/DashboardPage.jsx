// src/pages/DashboardPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams} from 'react-router-dom';


function Dashboard() {
    const id = useParams();
    console.log(id)
    return (
        <div>
            <h2>Dashboard Page</h2>
            <p>Welcome to the Dashboard</p>
            <p></p>
        </div>
    );
    }

export default Dashboard;