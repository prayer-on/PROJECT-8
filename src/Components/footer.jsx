import emailjs from '@emailjs/browser';
import {useState} from "react" 
import ContactMessage  from "../Components/cntmessage.jsx";


function Footer () {
    
    const [isSent, setIsSent] = useState(false)

    const messageDisplay = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,       
       import.meta.env.VITE_TEMPLATE_ID,   
      e.target,                
       import.meta.env.VITE_PUBLIC_KEY     
    )
     .then(() => {
    setIsSent(true);
     })

    .catch((error) => { console.log (error)})
    }

         return(
        <footer id="contact">
            {isSent ? (<ContactMessage />) 
            : 
            (<>
            <h2>CONTACT ME</h2>
            <form onSubmit={messageDisplay}>
                <label for= "email-adress">Email-address:</label>
                <input type="email" id="email-adress" name="email_contact" placeholder="john.wern@gmail.com" required/>
                <label for="text-area">Message:</label>
                <textarea id="text-area" name="text_message" placeholder="Write here..." required></textarea>
                <button type="submit">SEND</button>
            </form>
            </>)}
        </footer>
    );
    }

export default Footer

