import checkSvg from '../assets/check.svg'

function ContactMessage () {
    return(
<footer className='wrapper-check'>
     <img src={checkSvg} className='check' /> 
    <span className='check-text'>Your email was sent successfully!</span>
</footer>

    );
}

export default ContactMessage