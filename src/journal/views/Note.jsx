import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { useForm } from '../../hooks/useForm'
import { ImageGallery } from '../components'
import { setActiveNote } from '../../store/journal/journalSlice';
import { startDeletingNote, startSaveNote, startUploadingFiles } from '../../store/journal';


export const Note = () => {

    const dispatch = useDispatch();

    const { active:note, messageSaved, isSaving } = useSelector( state => state.journal);

    const { body, date, title, onInputChange, formState } = useForm( note );

    const dateString = useMemo(() => {
        const newDate = new Date( date ).toUTCString();

        return newDate;
    }, [date]);

    const fileInputRef = useRef();


    useEffect(() => {
      dispatch( setActiveNote(formState) )
    
    }, [formState]);

    useEffect(() => {
      if( messageSaved.length > 0) {
        Swal.fire('Nota actualizada', messageSaved, 'success');
      }

    }, [messageSaved])
    
    const onDelete = () => {
        dispatch( startDeletingNote() );
    }

    const onSaveNote = () => {
        dispatch( startSaveNote() );
    }

    const onFileInputChange = ({target}) => {
        if( target.files === 0 ) return;
        dispatch( startUploadingFiles ( target.files ));
    }

  return (
        <Grid 
            alignItems='center' 
            className='animate__animated animate__fadeIn animate__faster'  
            container 
            direction='row' 
            justifyContent= 'space-between' 
            sx={{ mb:1}}
            >
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid>

            <Grid item>

                <input 
                    ref= { fileInputRef }
                    type='file' 
                    multiple
                    onChange={ onFileInputChange }
                    style={{ display: 'none' }}
                />

                <IconButton 
                    color='primary' 
                    disabled= { isSaving }
                    onClick={ () => fileInputRef.current.click() }
                >
                    <UploadOutlined />
                </IconButton>

                <Button 
                    disabled={isSaving}
                    onClick={onSaveNote}
                    color='primary' 
                    sx={{padding: 2}}
                >
                    <SaveOutlined sx={{fontSize: 30, mr: 1}} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField 
                    fullWidth
                    label='Título'
                    multiline
                    name='title'
                    onChange = {onInputChange}
                    placeholder='Ingrese su título'
                    sx={{ border: 'none', mb: 1}}
                    type='text'
                    value= {title}
                    variant='filled'
                /> 
            </Grid>

            <Grid container>
                <TextField 
                    fullWidth
                    minRows={5}
                    multiline
                    name='body'
                    onChange = {onInputChange}
                    placeholder='¿Qué sucedió hoy?'
                    type='text'
                    value= {body}
                    variant='filled'
                /> 
            </Grid>

            <Grid container justifyContent='end'>
                <Button 
                    onClick={ onDelete }
                    sx={{mt:2}}
                    color='error'
                >
                    <DeleteOutline />
                    Borrar
                </Button>
            </Grid>
            

            <ImageGallery images={ note.imageUrls }/>

        </Grid>
  )
}
