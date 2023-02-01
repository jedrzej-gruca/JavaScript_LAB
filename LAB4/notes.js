// saving note in local storage and in array
function saveNote (note) {
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
}

// note
const notes = []

const note = {
    title: '',
    content: '',
    colour: '#ff1280',
    pinned: false,
    createDate: ''
}

let editedNote = null;

showNotes()
// modify the html structure after loading page or adding new note

function showNotes () {
    const notesFromLocalStorage = JSON.parse(localStorage.getItem('notes'));

    const mappedNotes = notesFromLocalStorage.map(note => {
        note.createDate = new Date(note.createDate);
        return note;
    })

    const notesContainer = document.querySelector('main');

    // removing old containers before loading new ones
    while (notesContainer.firstChild) {
        notesContainer.removeChild(notesContainer.lastChild);
    }

    // display note from local storage
    for (const note of mappedNotes) {
        const htmlNote = document.createElement('section');
        const htmlTitle = document.createElement('h1');
        const htmlContent = document.createElement('p');
        const htmlDate = document.createElement('h4');
        const htmlRemoveBtn = document.createElement('button');
        const htmlPinnedBtn = document.createElement('button');
        const htmlDiv = document.createElement('div');
        htmlDiv.id = 'contDiv';

        htmlTitle.innerHTML = note.title;
        htmlContent.innerHTML = note.content;
        htmlDate.innerHTML = note.createDate.toLocaleString();
        htmlRemoveBtn.innerHTML = 'usuń';
        if(note.pinned){
            htmlPinnedBtn.innerHTML = 'odepnij';
        }
        else{
            htmlPinnedBtn.innerHTML = 'przypnij';
        }

        htmlRemoveBtn.addEventListener('click', () => deleteNote(note));
        htmlPinnedBtn.addEventListener('click', pinNote);

        const editButton = document.createElement("button");
        editButton.innerHTML = `Edytuj`;
        editButton.addEventListener("click", () => editNote(note));

        htmlNote.classList.add('note');
        htmlNote.appendChild(htmlTitle);
        htmlNote.appendChild(htmlContent);
        htmlNote.appendChild(htmlDate);
        htmlNote.appendChild(htmlDiv);
        htmlDiv.appendChild(htmlRemoveBtn);
        htmlDiv.appendChild(htmlPinnedBtn);
        htmlDiv.appendChild(editButton);

        htmlNote.style.backgroundColor = note.colour;

        note.pinned ? notesContainer.prepend(htmlNote) : notesContainer.appendChild(htmlNote);
    }
}

//PIN
function pinNote (event) {
    const elementDate = event.target.parentNode.parentNode.querySelector('h4').innerHTML;
    const notesFromLocalStorage = JSON.parse(localStorage.getItem('notes'));
    let testDate;
    notes.length = 0;

    notesFromLocalStorage.map(note => {
        notes.push(note);
    })

    notes.forEach(note => {
        testDate = new Date(note.createDate).toLocaleString();

        if (elementDate === testDate) {
            note.pinned ? note.pinned = false : note.pinned = true;
        }
        localStorage.removeItem('notes');
        localStorage.setItem('notes', JSON.stringify(notes));
    })
    showNotes();
}

//EDIT
function editNote(note) {
    editedNote = note;
    console.log(editedNote);
    const titleInput = document.querySelector('#noteTitle').value;
    const contentInput = document.querySelector('#noteContent').value;
    const colourInput = document.querySelector('#Color').value;

    console.log(titleInput, contentInput, colourInput);

    titleInput.value = note.title;
    contentInput.value = note.content;
    colourInput.value = note.colour;
}

//DELETE
function deleteNote(note) {
    console.log(note);
    const elementDate = note.createDate.toLocaleString();
    const notesFromLocalStorage = JSON.parse(localStorage.getItem('notes'));

    let testDate;
    notes.length = 0;
    const newNotes = [];

    notesFromLocalStorage.map(note => {
        notes.push(note);
    })

    notes.forEach(note => {
        testDate = new Date(note.createDate).toLocaleString();

        if (elementDate !== testDate) {
            if (newNotes.includes(note) === false) {
                newNotes.push(note);
            }
        }
        localStorage.removeItem('notes');
        localStorage.setItem('notes', JSON.stringify(newNotes));
    })

    let noteIndex = notes.findIndex((note) => note.data !== notes.data);
         // removing note from list
        notes.splice(noteIndex, 1);
    console.log(notes);
    showNotes();
}

// retiving data from form and creating new note
document.querySelector('#noteAdd').addEventListener('click', onNewNote);
// create new note from data inputs
function onNewNote () {
    const title = document.querySelector('#noteTitle').value;
    const content = document.querySelector('#noteContent').value;
    const color = document.querySelector('#Color').value;
    if (editedNote !== null) {
        editedNote.title = title;
        editedNote.content = content;
        editedNote.colour = color;
        let noteIndex = notes.findIndex((note) => note.data === editedNote.data);
        notes.splice(noteIndex, 1);
        notes.push(editedNote);
        editedNote = null;
    } else {
        console.log(title, content);
        const newNote = Object.assign({}, note);
        newNote.title = title;
        newNote.content = content;
        newNote.createDate = new Date();
        newNote.colour = color;
        saveNote(newNote);
    }
    showNotes();
}