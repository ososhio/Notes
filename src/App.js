import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'Добавляйте новые заметки',
			date: '25.04.2022',
		}
	]);

	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = async (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		await setNotes(newNotes);
	};

	const deleteNote = async (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		await setNotes(newNotes);
	};
	const saveNote = (id,text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text+' (измененная заметка)',
			date: date.toLocaleDateString(),
		};
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
		const newNotes2 = [...notes, newNote];
		setNotes(newNotes2);
		
		
	};

	return (
			<div className='container'>
				<Header />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
					handleSaveNote={saveNote}
				/>
			</div>
	);
};

export default App;
