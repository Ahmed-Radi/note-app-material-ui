import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import NoteCard from './../components/NoteCard';
import Masonry from 'react-masonry-css';

export default function Notes() {
    const [note, setNote] = useState([]);

    useEffect(() => {
        async function fetchData() {
            fetch(`https://ahmed-radi-note-app.herokuapp.com/note`)
            .then(res => res.json())
            .then(data => {
                setNote(data)
            })
        }
        fetchData();
    }, [note.length]);

    const deleteNote = async (id) => {
        await fetch(`https://ahmed-radi-note-app.herokuapp.com/note/${id}`,{
            method: 'DELETE',
        }).then(res => res.json())
        .then(_ => setNote(note.filter(selectedNote => id !== selectedNote._id)))
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
                <div key={note._id} style={myMasonryGridColumnDIVs}>
                    <NoteCard note={note} deleteNote={deleteNote} />
                </div>
            ))}
            </Masonry>
        </Container>
    )
}
