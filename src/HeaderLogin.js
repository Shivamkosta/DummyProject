import react from "react";

const HeaderLogin = ()=>{
    return(
        <>
            <h1>Header Login</h1>
            <label>Email :</label>
            <input type="text" placeholder="Enter Email id :"></input>
            <label>Password :</label>
            <input type="password" placeholder="Enter Password :"></input>
            <button>Submit</button>
        </>
    )
}
export default HeaderLogin;