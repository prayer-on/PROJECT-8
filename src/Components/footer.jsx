

function Footer () {
    return(
        <footer>
            <h1>Contact me</h1>
            <form>
                <label for= "email-adress">Email-Address:</label>
                <input type="email" id="email-adress" name="email_contact" placeholder="frank.mult@gmail.com" required/>
                <label for="text-area">Message:</label>
                <textarea id="text-area" name="text_message" placeholder="Write here..."></textarea>
                <button type="submit">Send</button>
            </form>
        </footer>
    );
}

export default Footer