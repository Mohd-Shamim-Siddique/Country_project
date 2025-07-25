import React, { useEffect, useState, useTransition } from 'react'
import { getCountry } from '../Api/CountryApi'
import Loader from './Loader'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SearchFilterData from './SearchFilterData'
import CountryShimmer from './CountryShimmer'

const Country = () => {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const handleCountries = async () => {
    const res = await getCountry()
    setCountries(res.data)
    setIsLoading(false)
  }

  useEffect(() => {
    handleCountries()
  }, [])

  if (isLoading) return <CountryShimmer />

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return country
  }

  const filterRegion = (country) => {
    if (filter === 'all') return country;
    return country.region === filter
  }

  const filterCountries = countries.filter((country) => searchCountry(country) && filterRegion(country))

  return (
    <>
      <SearchFilterData
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries} />
      <div className='container country-card '>
        {
          filterCountries?.map((country, index) => (
            <li key={index} className='country-list'>
              <img className='flags' src={country.flags.svg} alt="" />
              <h2>{country.name.common}</h2>
              <p style={{ marginTop: '5px', color: 'purple' }}>Capital: <span>{country.capital[0]}</span> </p>
              <p style={{ marginTop: '5px', color: 'purple' }}>Population: <span>{country.population.toLocaleString()}</span></p>
              <p style={{ marginTop: '5px', lineHeight: '22px', color: 'purple' }}>Region: <span>{country.region}</span></p>
              <Link to={`/country/${country.name.common}`}>
                <button className='flex button'>
                  Read More <FaLongArrowAltRight />
                </button>
              </Link>
            </li>
          ))
        }
      </div>
    </>
  )
}

export default Country