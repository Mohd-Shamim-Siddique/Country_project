import React from 'react'

const IndvShimmer = () => {
    return (
        <div className='container shimmer-container'>
            {
                Array.from({ length: 2 }).map((_, i) => {
                    return <div key={i} className='container shimmerIndv'>
                        <div className='shimmerIndv shimmer-h1'></div>
                        <div className='shimmerIndv shimmer-p'></div>
                        <div className='shimmerIndv shimmer-p'></div>
                        <div className='shimmerIndv shimmer-p'></div>
                        <div className='shimmerIndv shimmer-p'></div>
                        <div className='shimmerIndv shimmer-p'></div>
                        <div className='shimmerIndv shimmer-p'></div>
                        <div className='shimmerIndv shimmer-p'></div>
                        <div className='shimmerIndv shimmer-p'></div>
                        <div className='shimmerIndv shimmer-button'></div>
                    </div>
                })
            }
        </div>
    )
}

export default IndvShimmer