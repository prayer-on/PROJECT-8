

function Footer () {
    return(
        <footer id="contact">
            <h2>CONTACT ME</h2>
            <form>
                <label for= "email-adress">Email-address:</label>
                <input type="email" id="email-adress" name="email_contact" placeholder="john.wern@gmail.com" required/>
                <label for="text-area">Message:</label>
                <textarea id="text-area" name="text_message" placeholder="Write here..."></textarea>
                <button type="submit">SEND</button>
            </form>
        </footer>
    );
}

export default Footer