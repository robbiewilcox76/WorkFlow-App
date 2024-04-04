// src/pages/NotesPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";

function Notes() {
    const id = useParams();

    const wrapperStyle = {
        width: '30vw',
        height: '30vh',
        padding: '20px 20px',
        margin: '20px',
        position: 'relative',
        top: '35px'
      };

    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: 'transparent',
        width: '90%', // Adjust the width as needed
        margin: '0 20vh'
      };

      const buttonStyle = { 
        backgroundColor: 'rgb(0, 98, 255)',
        borderColor: 'rgb(0, 98, 255)',
        width: '3.3vw',
        borderRadius: '100px'
      };

      const buttonWrapperStyle = {
        backgroundColor: 'red',
        width: '8vh'
      }

    console.log("id: " + id);
    return (
        <div>
            <div className="wrapper-container" style={containerStyle}>
                <div className="wrapper" style={wrapperStyle}>wrapper
                    <div className="button-wrapper" style={buttonWrapperStyle}>
                        <button type="submit" style={buttonStyle}><FaEdit /></button>
                    </div>
                
                </div>
                <div className="wrapper" style={wrapperStyle}>wrapper</div>
                <div className="wrapper" style={wrapperStyle}>wrapper</div>
                <div className="wrapper" style={wrapperStyle}>wrapper</div>
                <div className="wrapper" style={wrapperStyle}>wrapper</div>
                <div className="wrapper" style={wrapperStyle}>wrapper</div>
                <div className="wrapper" style={wrapperStyle}>wrapper</div>
                <div className="wrapper" style={wrapperStyle}>wrapper</div>
            </div>
        </div>
    );
}

export default Notes;