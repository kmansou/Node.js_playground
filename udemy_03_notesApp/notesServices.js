const fs = require('fs');

const notesFile = 'notes-data.json';

var fetchAllNotes = () => {
    var notes = [];
    if (fs.existsSync(notesFile)) {
        var fileContentString = fs.readFileSync(notesFile);

        try {
            notes = JSON.parse(fileContentString);
        } catch (e) {
            console.log('error', e);
        }
    }

    return notes;
};

var getNoteByTitle = (notes, noteTitle) => {
    var filtered = notes.filter((note) => note.title === noteTitle);
    if (filtered.length > 0) {
        return filtered[0];
    }
}

var saveNotesToFile = (notes) => {
    fs.writeFileSync(notesFile, JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchAllNotes();
    var note = getNoteByTitle(notes, title);
    if (!note) {
        note = {
            title,
            body
        };

        notes.push(note);

        saveNotesToFile(notes);

        return note;
    }
};

var removeNote = (title) => {
    var notes = fetchAllNotes();
    var filtered = notes.filter((note) => note.title !== title);

    if (notes.length !== filtered.length) {
        saveNotesToFile(filtered);
        return true;
    }

    return false;
};

var listAllNotes = () => {
    return fetchAllNotes();
};

var readNote = (title) => {
    var notes = fetchAllNotes();
    return getNoteByTitle(notes, title);
};


var logNoteToConsole = (note) => {
    if (note) {
        console.log('--');
        console.log('Title:', note.title);
        console.log('Body:', note.body);
    }
};

module.exports = {
    addNote,
    removeNote,
    listAllNotes,
    readNote,
    logNoteToConsole
};