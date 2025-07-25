import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import IndvShimmer from './IndvShimmer'
import { indvCountryData } from '../Api/CountryApi'

const CountryDetails = () => {
    const [country, setCountry] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { name } = useParams()
    const navigate = useNavigate()

    const handleIndvCountry = async () => {
        const data = await indvCountryData(name)
        setCountry(data)
        setIsLoading(false)
    }
    useEffect(() => {
        handleIndvCountry()
    }, [])

    if (isLoading) return <IndvShimmer />

    return (
        <>


            {country?.map((countryData, i) => {
                return < div key={i} className='container indv-container flex' >
                    <div className='indvimg'>
                        <img src={countryData.flags.svg} alt="" />
                    </div>
                    <div style={{ lineHeight: '25px' }} className='indvText'>
                        <h1 style={{ marginBottom: '15px', height: '35px' }}>{countryData.name.common}</h1>
                        <p style={{ marginTop: '5px', color: 'purple' }}>Nativ Name: <span>
                            {Object.keys(countryData.name.nativeName)
                                .map((key) => countryData.name.nativeName[key].common)
                                .join(', ')
                            }</span> </p>
                        <p style={{ marginTop: '5px', color: 'purple' }}>Capital: <span>{countryData.capital[0]}</span> </p>
                        <p style={{ marginTop: '5px', color: 'purple' }}>Population: <span>{countryData.population.toLocaleString()}</span></p>
                        <p style={{ marginTop: '5px', color: 'purple' }}>Region: <span>{countryData.region}</span></p>
                        <p style={{ marginTop: '5px', color: 'purple' }}>SubRegion: <span>{countryData.subregion}</span></p>
                        <p style={{ marginTop: '5px', color: 'purple' }}>Top Level Domain: <span>{countryData.tld[0]}</span></p>
                        <p style={{ marginTop: '5px', color: 'purple' }}>Currencies: <span> {Object.keys(countryData.currencies)
                            .map((keys) => countryData.currencies[keys].name)
                            .join(', ')
                        }</span></p>
                        <p style={{ marginTop: '5px', color: 'purple' }}>Languages: <span>
                            {Object.keys(countryData.languages)
                                .map((keys) => countryData.languages[keys])
                                .join(', ')
                            }</span></p>
                        <p style={{ marginTop: '5px', color: 'purple' }}>Borders: <span>
                            {countryData.borders?.map((val) => val).join(', ')}</span></p>
                        <div className='backBtn'>
                            <button onClick={() => navigate('/country')}>Go Back</button>
                        </div>
                    </div>
                </div >
            })}
        </>

    )
}

export default CountryDetails

