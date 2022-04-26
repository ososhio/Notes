import { MdDeleteForever } from 'react-icons/md';
import { MdEdit, MdSave } from 'react-icons/md';
import { useState } from 'react';

const Note = ({ id, text, date, handleDeleteNote, handleAddNote, handleSaveNote  }) => {
    const [edit, setEdit] = useState(false);
	const [noteText, setNoteText] = useState('');
	const characterLimit = 200;
	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};
	const handleEdit = () => {
		setEdit(true);
		setNoteText(text);
	};
	
	const handleSaveClick = () => {
		setEdit(false);
		handleSaveNote(id,noteText);
			
	};
	
	if (!edit)
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer-main'>
			<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
				<MdEdit
					onClick={handleEdit}
					className='delete-icon'
					size='1.3em'	
				/>
			</div>
		</div>
	)
	else
	return (
	<div className='note new'>
		<textarea
			rows='8'
			cols='10'
			value={noteText}
			onChange={handleChange}
		></textarea>
		<div className='note-footer'>
			<small>
			{characterLimit - noteText.length}
			</small>
			<button className='save' onClick={handleSaveClick}>
				Сохранить
			</button>
		</div>
	</div>
	);

};

export default Note;
