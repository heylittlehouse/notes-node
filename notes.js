console.log('Starting notes.js');

module.exports.addNote = () => {
	console.log('addnote');
	return 'New note';
};

module.exports.add = (a, b) => {
	return a + b;
}