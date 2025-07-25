import React from 'react'

const CountryShimmer = () => {
    // new Array(10).fill(1).map(())

    return (
        <div className='container shimmer-wrapper'>
            {
                Array.from({ length: 20 }).map((_, i) => {
                    return <div key={i} className='container shimmer-card'>
                        <div className='shimmer-card shimmer-img'></div>
                        <div className='shimmer-card shimmer-h1'></div>
                        <div className='shimmer-card shimmer-p'></div>
                        <div className='shimmer-card shimmer-p'></div>
                        <div className='shimmer-card shimmer-p'></div>
                        <div className='shimmer-card shimmer-btn'></div>
                       
                    </div>
                })
            }
        </div>
    )
}

export default CountryShimmer