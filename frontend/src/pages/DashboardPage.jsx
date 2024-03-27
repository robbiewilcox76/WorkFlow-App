// src/pages/DashboardPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {

    return (
        <div>
            <h2>Dashboard Page</h2>
            <p>Welcome to the Dashboard</p>
            <p>{id}</p>
        </div>
    );
    }

export default Dashboard;