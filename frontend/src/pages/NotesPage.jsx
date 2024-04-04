// src/pages/NotesPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Notes({ id }) {
    console.log("id: " + id);
    return (
        <div>
            <h2>Notes Page</h2>
            <p>Welcome to the Notes</p>
            <p></p>
        </div>
    );
}

export default Notes;