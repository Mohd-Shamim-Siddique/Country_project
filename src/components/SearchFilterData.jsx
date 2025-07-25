import React from 'react'

const SearchFilterData = ({ search, setSearch, filter, setFilter, countries, setCountries }) => {
    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }
    const handleFilter = (e) => {
        e.preventDefault()
        setFilter(e.target.value)
    }

    const sortCountries = (value) => {
        const sortCountry = [...countries].sort((a, b) => {
            return value === 'asc' ?
                a.name.common.localeCompare(b.name.common) :
                b.name.common.localeCompare(a.name.common)
        })
        setCountries(sortCountry)
    }
    return (
        <div className='container search-container flex'>
            <input type="text" value={search} onChange={handleSearch} autoComplete='off' placeholder='Search your country' className='search' />
            <button className='btn' onClick={() => sortCountries('asc')}>Asc</button>
            <button className='btn' onClick={() => sortCountries('dsc')}>Dsc</button>
            <select value={filter} onChange={handleFilter} className='filter'>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Americas">Americas</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}

export default SearchFilterData