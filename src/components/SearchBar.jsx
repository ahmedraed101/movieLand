import { useState } from 'react'
import SearchIcon from './../images/icons/search.svg'

const SearchBar = ({ searchMovies }) => {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div className='search fade-in'>
            <input
                type='text'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder='Search for movies'
            />
            <img
                src={SearchIcon}
                alt='search'
                onClick={() => {
                    searchMovies(searchTerm)
                }}
            />
        </div>
    )
}

export default SearchBar
