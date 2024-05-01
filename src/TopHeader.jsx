 import './styles.scss'

function TopHeader() {
    return(
        <nav className='white_header'>
            <div className='leftSide'>
            <div>
            <img src="/Icons - Images/img-icon-Phone.svg"/> 
            <a href="tel:+13852440355"> (385)-244-0355 </a>
            </div>
            <div>
            <img src="/Icons - Images/img-icon-Envelope.svg"/> 
            <a href="mailto:youremail@example.com">Send Message </a>
            </div>
            </div>
            <div className='rightSide'>
            <a href="https://www.google.com/maps/search/?api=1&query=SPARROW+ELECTRIC"> Find a Location </a>
            <a> Contact Us </a>
            </div>
        </nav>  
    )
} 
export default TopHeader