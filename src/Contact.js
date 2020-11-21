import react from "react";

const Contact = ()=>{
    return(
        <>
            <h1>Contact Us</h1>
            <label>Name :</label>
            <input type="text" placeholder="Enter your name"></input>
            <label>Email :</label>
            <input type="text" placeholder="Enter your Email"></input>
            <label>Message :</label>
            <textarea type="text" placeholder="Write Messages..."></textarea>
            <button>Send</button>
        </>
    )
}
export default Contact;