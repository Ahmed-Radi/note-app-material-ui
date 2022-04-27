import React from 'react'
import { IconButton, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { DeleteOutline } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import { red, blue, green, yellow } from '@mui/material/colors';

function NoteCard({ note, deleteNote }) {
    // const addBorder = {
    //     border: `1px solid ${note.category === 'money' ? 'red'
    //     : note.category === 'work' ? 'blue'
    //     : note.category === 'todo' ? 'green'
    //     : 'yellow' }`
    // }
    const avatar = {
        background: `${note.category === 'money' ? red[700]
        : note.category === 'work' ? blue[700]
        : note.category === 'todo' ? green[700]
        : yellow[700] }`
    }
    return (
        <div>
            <Card
                elevation={4}
                // style={addBorder}
            >
            <CardHeader
                    avatar= {
                        <Avatar style={avatar}>{note.category[0].toUpperCase()}</Avatar>
                    }
                    action={
                        <IconButton onClick={() => deleteNote(note.id)}>
                            <DeleteOutline />
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category.charAt(0).toUpperCase() + note.category.slice(1)}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" sx={{ overflowWrap: 'break-word' }}>
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default NoteCard