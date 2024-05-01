import React from 'react'
import './styles.scss'

const LowerHeader = () => {
    return(
        <nav className='lowerNav'>
            <nav className='lowerHeader'>
                <img src='public/Icons - Images/img-SparrowElectric-Logo-White.svg'/>
            <a > How We Help </a>
            <a > What We Offer </a>
            <a > Financial Help Center </a>
            <a > Why Sparrow Solar </a>
            <button className='quoteBtn'>Request a Quote</button>
            <p>Give us a call today and we will waive all financing fees.</p>
            <a > See Details </a>
            <h1>Are You Ready To Cut Your Energy Bill?</h1>
            <p>Sparrow Electric helps homeowners from coast to coast with the best solar financing options.</p>
            </nav>
        </nav>
    )
}

export default LowerHeader