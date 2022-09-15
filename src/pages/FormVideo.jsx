import React, { useState } from "react";
import * as PATHS from "../utils/paths";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormVideo() {
    const [data, setData] = useState({
        name_course:'',
        name_videos: '',
        videos_files: ''
    });
    const { name_course,name_videos } = data;
    function handleInputChange(event) {
        const { name, value } = event.target;
        return setData({ ...data, [name]: value });
    }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </div>
      <div>
        <TextField
          error
          id="filled-error"
          label="Error"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          error
          id="filled-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="filled"
        />
      </div>
      <div>
        <TextField
          error
          id="standard-error"
          label="Error"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="standard"
        />
      </div>
    </Box>
  );
}


    /* return (
        <div>
            <form>
                <lavel>Nombre del curso: </lavel>
                <input name='' value={name_course} onChange={handleInputChange} />
                <lavel>Nombre de video: </lavel>
                <input  name='' value={name_videos}/>
                <label>Carga tu video: </label>
                
                <button type='submit'>Cargar</button>
            </form>
        </div>
    ) */
