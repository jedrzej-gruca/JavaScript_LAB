// const note = {title: 'as', content: 'vsfs'}
//
// const notes = []
//
// notes.push(note)
//
// localStorage.setItem('notes', JSON.stringify(notes))

const addNoteButton = document.querySelector('#addNote');
const notes = document.querySelector('.notes');


const createNotes = () => {
    const note = document.createElement('textarea');
    note.classList.add('note');

    noteTitle = document.createElement('input');
    noteTitle.classList.add('note-title');

    noteText = document.createElement('input');
    noteText.classList.add('note-text');

    const noteSave = document.createElement('button');
    noteSave.classList.add('note-save');
    noteSave.innerHTML = 'save';

    noteSave.addEventListener('click', () => {
        const jsonNotes = localStorage.getItem('notes');
        const noteObject = {
            title: noteTitle.value;
            text: noteText.value;
        }

    })

}

notes.appendChild(note);
note.appendChild(noteTitle);
note.appendChild(noteText);
note.appendChild(noteSave);

