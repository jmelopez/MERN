const { useState } = require("react")

const Forms = (props) => {
    const[username, setUsername] = useState("");
    const [email, setEmail] = ("");
    const [password, setPassword] = ("");

    const createUser = (e) => {

        //prevent default refresh of browser so state not reset
        e.preventDefault();

        const newUser = {
            username,
            email,
            password
        };
        console.log("Welcome", newUser);
        setUsername("");
        setEmail("");
        setPassword("");
    };

    return(
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label>
                <input type="text" onChange={ (e) => setUsername(e.target.value) } value={ username } />
            </div>

            <div>
                <label>Email: </label>
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value={ email }/>
            </div>

            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } value={ password } />
            </div>

            <div>
                <input type="submit" value="Create User" />
            </div>
        </form>
    );
};

export default Forms;