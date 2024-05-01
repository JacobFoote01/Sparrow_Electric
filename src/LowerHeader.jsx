import React from 'react'
import './styles.scss'

const LowerHeader = () => {
    return(
        <nav className='lowerNav'>
            <nav className='lowerHeader'>
                <img className='logo' alt='White Sparrow Logo' src='public/Icons - Images/img-SparrowElectric-Logo-White.svg'/>
            <a > How We Help </a>
            <a > What We Offer </a>
            <a > Financial Help Center </a>
            <a > Why Sparrow Solar </a>
            <button className='quoteBtn'>Request a Quote
                <img src='/Icons - Images/img-icon-ArrowRight.svg'/>
            </button>
            <div className='popup'>
            <img src='/Icons - Images/img-icon-Lightning.svg'/>
            <p>Give us a call today and we will waive all financing fees.</p>
            <a > See Details </a>
            </div>
            <h1>Are You Ready To Cut Your Energy Bill?</h1>
            <p>Sparrow Electric helps homeowners from coast to coast with the best solar financing options.</p>
            </nav>
        </nav>
    )
}

export default LowerHeader