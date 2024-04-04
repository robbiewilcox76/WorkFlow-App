// src/pages/NewNoteModal.js
import '../styles/Modal.css';
import { React, useState } from "react";

export default function Modal() {
    const [modal, setModal] = useState(false);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteContent, setNoteContent] = useState('');

    const toggleModal = () => {
        setModal(!modal);
    }

    const buttonStyle = {
        marginTop: '10%',
        width: '550px',
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

    const inputStyle = {
        height:'10%',
        width:'100%',
        padding:'1px',
    }

    const handleConfirm = () => {
        // Here you can handle the confirmation action, e.g., submitting the note
        console.log('Note Title:', noteTitle);
        console.log('Note Content:', noteContent);
        // Reset input fields
        setNoteTitle('');
        setNoteContent('');
        // Close the modal
        toggleModal();
    }
    
    return (
        <div>
            <button 
                onClick={toggleModal}
                className="btn-modal"
                style={buttonStyle}
            >
                Add a new note
            </button>
            {modal && (
                <div className="modal-container">
                    <div className="overlay" onClick={toggleModal}></div>
                    <div className="modal-content">
                        <div className="modal-text-box">
                            <div className="title-submit-wrapper">
                                <div className="input-box" style={inputStyle}>
                                    <input
                                        type="text"
                                        id="noteTitle"
                                        placeholder="Title"
                                        value={noteTitle}
                                        onChange={(e) => setNoteTitle(e.target.value)}
                                    />
                                </div>
                                <textarea
                                    rows={10} 
                                    cols={60}
                                    placeholder="Add your note"
                                    style={{marginTop:'3%', borderRadius: '10px', backgroundColor: 'transparent', padding: '5px', width:'100%', height:'75%'}}
                                    value={noteContent}
                                    onChange={(e) => setNoteContent(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        className="confirm-button"
                        style={{...buttonStyle, position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)'}} // Adjust bottom as needed
                        onClick={handleConfirm}
                    >
                        Confirm
                    </button>
                </div>
            )}
        </div>
    );
}
