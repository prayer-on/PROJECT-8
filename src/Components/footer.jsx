import emailjs from '@emailjs/browser';
import {useState, useRef} from "react" 
import ContactMessage  from "../Components/cntmessage.jsx";


function Footer () {
    
    const [isSent, setIsSent] = useState(false)
    const formRef = useRef();


    const messageDisplay = (e) => {
    e.preventDefault();
    emailjs.sendForm(
    import.meta.env.VITE_SERVICE_ID,       
    import.meta.env.VITE_TEMPLATE_ID,   
    formRef.current,               
    import.meta.env.VITE_PUBLIC_KEY     
    )
    .then(() => {
    setIsSent(true);
     })
    .catch((error) => { 
    console.log (error);
    });
    }

         return(
        <footer id="contact">
            {isSent ? (<ContactMessage />) 
            : 
            (<>
            <h2>CONTACT ME</h2>
            <form ref={formRef} onSubmit={messageDisplay}>
                <label htmlFor= "email-address">Email-address:</label>
                <input type="email" id="email-address" name="email_contact" placeholder="john.wern@gmail.com" required/>
                <label htmlFor="text-area">Message:</label>
                <textarea id="text-area" name="text_message" placeholder="Write here..." required></textarea>
                <button type="submit">SEND</button>
            </form>
            </>)}
        </footer>
    );
    }

export default Footer

