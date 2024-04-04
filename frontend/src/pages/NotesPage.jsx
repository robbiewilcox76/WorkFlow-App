// src/pages/NotesPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import Modal from './NewNoteModal'

function Notes() {
    const id = useParams();

    const wrapperStyle = {
        width: '46%',
        height: '40vh',
        padding: '15px 20px',
        margin: '20px',
        position: 'relative',
        top: '35px',
        border: 'none',
        paddingBottom: '6%',
        fontFamily: 'Avenir',
        fontSize: '25px',
        fontWeight: 'bold',
        textAlign: 'left'
      };

    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: 'transparent',
        width: '90%',
        margin: '0 auto',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #000000',
        overflow: 'hidden',
        paddingBottom: '6%',
        paddingTop: '1%',
        borderRadius : '20px',
      };

    const timeStampWrapperStyle = {
      backgroundColor: 'transparent',
      width: '100%',
      alignSelf: 'flex-end',
      position: 'absolute',
      bottom: '0',
      left: '-5%',
      right: '0',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: '20px',
      fontFamily: 'Avenir',
      textAlign: 'right'
    };

    const noteStyle = {
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent',
      fontSize: '18px',
      fontWeight: 'normal',
    }

    const buttonStyle = {
      marginTop: '5%',
      width: '55%',
      height: '45px',
      background: '#000000',
      border: 'none',
      outline: 'none',
      border: '2px solid rgba(0,0,0,1)',
      borderRadius: '40px',
      color: '#fff',
      cursor: 'pointer',
      fontSize: '16px',
    }

    let numWrappers = 10;
    let wrappers = []
    let colors = ['RGB(24, 163, 223)', 'RGB(255, 107, 107)', 'RGB(255, 196, 102)', 'RGB(0, 184, 148)', 'RGB(255, 138, 96)', 'RGB(123, 104, 238)']
    for(let i=0; i<numWrappers; i++) {
      const color = colors[i%6];
      wrappers.push(
        <div className="wrapper" style={{ ...wrapperStyle, backgroundColor: color }} key={i}>
            Wrapper
            <div className="note-wrapper" style={noteStyle}> 
              Hello there my name is Robbie Wilcox and I am a recent graduate of Rutgers University - New Brunswick.  
              I studied computer science and am looking for software engineering opportunities.  If there are any
              people you could possibly connect me with or any advice you may have to help my chances at getting an interview
              I would be immensely appreciative. 
            </div>
            <div className="timeStamp-wrapper" style={timeStampWrapperStyle}>
              April 4, 2024 1:42PM
            </div>
        </div>
      )
    }

  return (
      <div>
        <div className="wrapper-container" style={containerStyle}>
          <Modal/>
          {wrappers}
        </div>
      </div>
  );
}

export default Notes;