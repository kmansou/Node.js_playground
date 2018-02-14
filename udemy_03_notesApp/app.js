const _ = require('lodash');
const yargs = require('yargs');

const _notesServices = require('./notesServices.js');

const titleCommandOptions = {
    describe: 'Title of a note.',
    demand: true,
    alias: 't'
};

const bodyCommandOptions = {
    describe: 'Body of a note.',
    demand: true,
    alias: 'b'
};

var arguments = yargs
    .command('add', 'Adds a new note', {
        title: titleCommandOptions,
        body:  bodyCommandOptions
    })
    .command('remove', 'Removes a note by title', { title: titleCommandOptions })
    .command('list', 'List all notes')
    .command('read', 'Reads a note by its title', { title: titleCommandOptions })
    .help()
    .argv;

if (!_.isEmpty(arguments._) && arguments._.length === 1) {
    var command = arguments._[0].toLowerCase();
    var message = '';
    var notes = [];
    switch (command) {
        case 'add':
            var note = _notesServices.addNote(arguments.title, arguments.body);
            if (note) {
                notes.push(note);
                message = 'Note added';
            } else {
                message = `File has already note with the same title: ${arguments.title}`;
            }
            break;
        case 'remove':
            var isNoteRemoved = _notesServices.removeNote(arguments.title);
            message = isNoteRemoved ? 'Note removed' : 'Note not found';
            break;
        case 'list':
            notes = _notesServices.listAllNotes();
            message = notes.length > 0 ? 'Notes: ' : 'No note found';
            break;
        case 'read':
            var note = _notesServices.readNote(arguments.title);
            if (note) {
                notes.push(note);
                message = 'Note found';
            } else {
                message = 'Note not found';
            }
            break;
    }

    console.log(message);
    if (!_.isEmpty(notes)) {
        notes.forEach(note => _notesServices.logNoteToConsole(note));
    }
} else {
    console.log('cannot detect the given command, please use one of the following (add, remove, read, list)');
}
