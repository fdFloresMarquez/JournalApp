
import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
   name: 'journal',
   initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 123456,
        //     imageUrls: []
        // }
   },
   reducers: {
      addNewEmptyNote: (state, action) => {
         state.notes.push(action.payload);
         state.isSaving = false;
      },
      savingNewNote: (state) => {
         state.isSaving = true;
      },
      setActiveNote: (state, action) => {
         state.active = action.payload;
      },
      setNotes: (state, action) => {
         state.notes = action.payload;
      },
      setSaving: (state) => {

      },
      updateNote: (state, action) => {

      },
      deleteNoteById: (state, action) => {

      },
      
    }
});


// Action creators are generated for each case reducer function
export const { 
    addNewEmptyNote,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
 } = journalSlice.actions;