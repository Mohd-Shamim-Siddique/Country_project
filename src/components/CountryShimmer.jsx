import React from 'react'

const CountryShimmer = () => {
    // new Array(10).fill(1).map(())

    return (
        <div className='container shimmer-wrapper'>
            {
                Array.from({ length: 20 }).map((_, i) => {
                    return <div key={i} className='container shimmer-card'></div>
                })
            }
        </div>
    )
}

export default CountryShimmer