 import './styles.scss'

function TopHeader() {
    return(
        <nav className='white_header'>
            <a href="tel:+13852440355"><img src="img-icon-Phone.svg"/> (385)-244-0355 </a>
            <a href="mailto:youremail@example.com"><img src="img-icon-Envelope.svg"/> Send Message </a>
            <a href="https://www.google.com/maps/search/?api=1&query=SPARROW+ELECTRIC"> Find a Location </a>
            <a href=""> Contact Us </a>
        </nav>  
    )
} 
export default TopHeader