console.log('Starting notes.js');

const fs = require('fs');

//Fetches notes from json an converts to object if the file exists, else returns an empty array
//Empty array because if the file doesn't exist, it will be created with array on saveNotes
var fetchNotes = () => {
	try {
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch (e) {
		return [];
	}
};

//Accepts a notes object and overwrites or creates notes-data.json with a JSON string
var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	}
	//Checks if a note by same title exists
	var duplicateNotes = notes.filter( (note) => note.title === title);
	//If note with same title doesn't exist, it adds and saves the note
	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};

var getAll = () => {
	console.log('Getting all notes...');
};

var getNote = (title) => {
	var notes = fetchNotes();
	var note = notes.filter( (note) => note.title === title);
	return note[0];
};

var logNote = (note) => {
	console.log('---');
	console.log('Title:', note.title);
	console.log('Body:', note.body);
};

var removeNote = (title) => {
	var notes = fetchNotes();
	//Creates a new array with all notes except one with title to be deleted
	var filteredNotes = notes.filter( (note) => note.title !== title);
	saveNotes(filteredNotes);
	//If the lengths of notes before and after filtering differ, a note was deleted.
	return notes.length !== filteredNotes.length;
}

//exports functions to be used in other files where this one is required
module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
	logNote
};