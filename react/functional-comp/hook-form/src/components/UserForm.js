const { useState } = require("react")

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassError, setConfirmPassError] = useState("");

    const createUser = (e) => {
        const newUser = {
            firstName,
            lastName,
            email,
            password,
            confirmPass
        };
    };

    const validateFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length > 0) {
            setFirstNameError("First name must be at least two characters long.");
        } else {
            setFirstNameError("");
        }
    }

    const validateLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length > 0) {
            setLastNameError("Last name must be at least two characters long.");
        } else {
            setLastNameError("");
        }
    }

    const validateEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5 && e.target.value.length > 0) {
            setEmailError("Email address must be at least 5 characters long.");
        } else {
            setEmailError("");
        }
    }

    const validatePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8 && e.target.value.length > 0) {
            setPasswordError("Password must be at least 8 characters long.");
        } else {
            setPasswordError("");
        }
    }

    const validateConfirmPass = (e) => {
        setConfirmPass(e.target.value);
        if(e.target.value.length < 8 && e.target.value.length > 0) {
            setConfirmPassError("Password must be at least 8 characters long.");
        } else {
            setConfirmPassError("");
        }
    }
    return(
        <>
        <form onChange={ createUser }>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ validateFirstName } />
                {
                    firstNameError ?
                    <p> { firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ validateLastName } />
                {
                    lastNameError ?
                    <p> { lastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="email" onChange={ validateEmail } />
                {
                    emailError ?
                    <p> { emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ validatePassword} />
                {
                    passwordError ?
                    <p> { passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ validateConfirmPass} />
                {
                    confirmPassError ?
                    <p> { confirmPassError }</p> :
                    ''
                }
            </div>
        </form>

        <div>
            <h2>Your Form Data</h2>
            <p>First Name: { firstName }</p>
            <p>Last Name: { lastName }</p>
            <p>Email: { email }</p>
            <p>Password: { password }</p>
            <p>Confirm Password: { confirmPass } </p>
        </div>
        </>
    )
}

export default UserForm;
