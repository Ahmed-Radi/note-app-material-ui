import React, { useState } from 'react'
import { Typography, Button, Container, TextField, FormControlLabel, FormLabel, FormControl } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useNavigate } from 'react-router-dom';

export default function Create() {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [note, setNote] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [noteError, setNoteError] = useState(false)
    const [category, setCategory] = useState('')

    const HeadStyle = {
        marginBottom: '20px',
    }
    const TitleInputStyle = {
        marginTop: 2,
        marginBottom: 2,
        display: 'block',
    }
    const NoteInputStyle = {
        marginTop: 2,
        marginBottom: 2,
        display: 'block',
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        title === '' ? setTitleError(true) : setTitleError(false);
        note === '' ? setNoteError(true) : setNoteError(false);
        if(title && note && category) {
            fetch(`http://localhost:8000/notes`, {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({title, details: note, category,})
            }).then(_ => navigate('/'))
        }
    }

    return (
        <Container>
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
                sx={HeadStyle}
            >
                Create a New Note
            </Typography>
            <form noValidate autoComplete='off' onSubmit={e => handleSubmit(e)}>
                <TextField
                    label="Note Title"
                    variant="outlined"
                    fullWidth
                    required
                    error={titleError}
                    onChange={(e) => setTitle(e.target.value)}
                    sx={TitleInputStyle}
                />
                <TextField
                    label="Note Details"
                    variant="outlined"
                    fullWidth
                    required
                    multiline
                    rows={4}
                    error={noteError}
                    onChange={(e) => setNote(e.target.value)}
                    sx={NoteInputStyle}
                />
                <FormControl sx={{
                    display: 'block',
                    margin: '20px 0',
                }}>
                    <FormLabel>Note category</FormLabel>
                    <RadioGroup onChange={(e) => setCategory(e.target.value)}>
                        <FormControlLabel value="money" control={<Radio />}  label="money" />
                        <FormControlLabel value="todo" control={<Radio />}  label="todo" />
                        <FormControlLabel value="reminders" control={<Radio />}  label="reminders" />
                        <FormControlLabel value="work" control={<Radio />}  label="work" />
                    </RadioGroup>
                </FormControl>
                <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    endIcon={<KeyboardArrowRight />}
                    sx={{
                        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                        border: 0,
                        borderRadius: 35,
                        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                        height: 48,
                        padding: '0 30px',
                    }}
                >
                    Submit
                </Button>
            </form>
                {/*<div className="fl"
                style={{background: 'red', width: '500px', height: '480px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <span
                    style={{width: '20px', height: '20px', background: 'green', display: 'inline-block'}}>x</span>
                </div>*/}
        </Container>
    )
}
