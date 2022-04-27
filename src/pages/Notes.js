import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import NoteCard from './../components/NoteCard';
import Masonry from 'react-masonry-css';

export default function Notes() {
    const [note, setNote] = useState([]);

    useEffect(() => {
        async function fetchData() {
            fetch(`http://localhost:8000/notes`)
            .then(res => res.json())
            .then(data => setNote(data))
        }
        fetchData();
    }, []);

    const deleteNote = async (id) => {
        await fetch(`http://localhost:8000/notes/${id}`,{
            method: 'DELETE',
        });
        const newNote = note.filter(selectedNote => id !== selectedNote.id);
        setNote(newNote);
    };
    const breakpoint = {
        default: 3,
        1100: 2,
        700: 1,
    };
    /** Masonry style */
    const myMasonryGrid = {
        display: 'flex',
        marginLeft: '-30px', /* gutter size offset */
        width: 'auto',
    }
    const myMasonryGridColumnDIVs = {
        marginBottom: '30px',
    }
    return (
        <Container>
            {/* <h2 style={{marginTop: '0px'}}>Notes page</h2> */}
            <Masonry
                breakpointCols={breakpoint}
                style={myMasonryGrid}
                className=""
                columnClassName="my-masonry-grid_column" // style for this class in index.css
            >
            {note && note.map(note => (
                <div key={note.id} style={myMasonryGridColumnDIVs}>
                    <NoteCard note={note} deleteNote={deleteNote} />
                </div>
            ))}
            </Masonry>
        </Container>
    )
}
