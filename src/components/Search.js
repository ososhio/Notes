import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			<MdSearch className='search-icons' size='1.3em' color='black'/>
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value.toLowerCase())
				}
				type='text'
				placeholder='Поиск'
				
			/>
		</div>
	);
};

export default Search;
