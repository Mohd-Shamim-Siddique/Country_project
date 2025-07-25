import React from 'react'
import countryFacts from '../../Data.json'

const About = () => {

  return (
    <div className='card-header flex container'>
      <div className='about-heading' style={{ textAlign: 'center' }}>
        <h1>Here are the Interesting Facts
          <br />
          we're proud of</h1>
      </div>
      <div className='Card flex'>
        {countryFacts?.map((country) => (
          < li key={country.id} className='card-list' >
            <h2>{country.country}</h2>
            <p style={{ marginTop: '5px', color: 'purple' }}>Capital: <span>{country.capital}</span> </p>
            <p style={{ marginTop: '5px', color: 'purple' }}>Population: <span>{country.population}</span></p>
            <p style={{ marginTop: '5px', lineHeight: '22px', color: 'purple' }}>Interesting-Fact: <span>{country.fact}</span></p>
          </li>
        ))
        }
      </div>

    </div >
  )
}

export default About