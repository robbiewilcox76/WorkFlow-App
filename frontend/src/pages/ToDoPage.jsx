// src/pages/ToDoPage.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';



function Notes() {
    const [error, setError] = useState('');
    const params = useParams();
    const id = params.id;

    const containerStyle = {
      backgroundColor: 'red',
      minWidth:'90vw',
      minHeight:'90vh',
      margin: '10vh auto',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #000000',
      overflow: 'hidden',
      paddingBottom: '6%',
      paddingTop: '1%',
      borderRadius : '20px',
    };

    let numWrappers = 10;
    let wrappers=[];
    for(let i=0; i<numWrappers; i++) {
      wrappers.push(
        <div className="element" style={{ backgroundColor: 'red' }} key={i}>
            To Do Title
            <div className="timeStamp-wrapper">
              Date
            </div>
        </div>
      )
    }

  return (
      <div>
        <div className="wrapper-container" style={containerStyle}>
          hi
        </div>
      </div>
  );
}

export default Notes;