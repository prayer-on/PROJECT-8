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
                <label htmlFor= "email-address">EMAIL-ADDRESS:</label>
                <input type="email" id="email-address" name="email_contact" placeholder="william.otten@gmail.com" required/>
                <label htmlFor="text-area">MESSAGE:</label>
                <textarea id="text-area" name="text_message" placeholder="Message here..." required></textarea>
                <button type="submit">SEND</button>
            </form>
            </>)}
        </footer>
    );
    }

export default Footer

