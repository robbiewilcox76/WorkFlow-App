// src/pages/NotesPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import Modal from './NewNoteModal'

function Notes() {
    const [error, setError] = useState('');
    const [notes, setNotes] = useState([]);
    const [count, setCount] = useState(0);
    const params = useParams();
    const id = params.id;

    const wrapperStyle = {
        width: '46%',
        minWidth: '46%',
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
        textAlign: 'left',
      };

    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: 'transparent',
        width: '90%',
        minWidth:'90%',
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
      fontWeight: 'normal'
    }

    const buttonStyle = {
      marginTop: '5%',
      marginRight: '40%',
      width: '10%',
      height: '45px',
      background: 'transparent',
      outline: 'none',
      border: 'none',
      borderRadius: '40px',
      color: '#fff',
      cursor: 'pointer',
      fontSize: '16px',
    }

    const deleteNote = async (id) => {
      console.log(id)
      try {
        const url = `http://localhost:3000/api/notes/delete-note?id=${id}`;
        console.log(url);
        const response = await axios.delete(url);
        if (!response.data.success) {
          setError('Error uploading note');
        }
        setCount(count+1);
        return response.data.notes;
      } catch (error) {
        console.error('Error deleting note:', error);
        setError('An error occurred while adding the note');
        return null;
      }
    };

    const getNotes = async () => {
      try {
        const url = `http://localhost:3000/api/notes/get-notes?id=${id}`;
        const response = await axios.get(url);
        if (!response.data.success) {
          setError('Error uploading note');
        }
        return response.data.notes;
      } catch (error) {
        console.error('Error uploading note:', error);
        setError('An error occurred while adding the note');
        return null;
      }
    };

    useEffect(() => {
      const fetchData = async () => {
        const userNotes = await getNotes();
        if (userNotes) {
          setNotes(userNotes);
        }
      };
      fetchData();
    }, [count]);

    console.log(notes)
    

    let numWrappers = notes.length;
    let wrappers = []
    let colors = ['RGB(24, 163, 223)', 'RGB(255, 107, 107)', 'RGB(255, 196, 102)', 'RGB(0, 184, 148)', 'RGB(255, 138, 96)', 'RGB(123, 104, 238)']
    for(let i=0; i<numWrappers; i++) {
      const color = colors[i%6];
      wrappers.push(
        <div className="wrapper" style={{ ...wrapperStyle, backgroundColor: color }} key={i} id={notes[i]._id}>
            {notes[i].noteTitle}
            <div className="note-wrapper" style={noteStyle}> 
              {notes[i].noteContent}
            </div>
            <div className="timeStamp-wrapper" style={timeStampWrapperStyle}>
              <button onClick={() => deleteNote(notes[i]._id)} className="btn-modal" style={buttonStyle}>Delete</button>
              {notes[i].date}
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