import { useReducer } from "react";

const initialState = {
    firstName: {
        value: '',
        error: null
    },

    lastName: {
        value: '',
        error: null
    },

    email: {
        value: '',
        error: null
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_FIRST_NAME_VALUE":
            return {
                ...state,
                firstName: {
                    ...state.firstName,
                    value: action.payload
                }
            }
        case "SET_FIRST_NAME_ERROR":
            return {
                ...state,
                firstName: {
                    ...state.firstName.value,
                    error: action.payload
                }
            }
        case "SET_LAST_NAME_VALUE":
            return {
                ...state,
                lastName: {
                    ...state.lastName,
                    value: action.payload
                }
            }
        case "SET_LAST_NAME_ERROR":
            return {
                ...state,
                lastName: {
                    ...state.lastName.value,
                    error: action.payload
                }
            }
        case "SET_EMAIL_VALUE":
            return {
                ...state,
                email: {
                    ...state.email,
                    value: action.payload
                }
            }
        case "SET_EMAIL_ERROR":
            return {
                ...state,
                email: {
                    ...state.email.value,
                    error: action.payload
                }
            }
        default:
            return state;
    }
}

export default () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleFirstNameChange = (e) => {
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            dispatch({
                type: "SET_FIRST_NAME_ERROR",
                payload: "First name must be at least 2 characters long."
            });
        } else {
            dispatch({
                type: "SET_FIRST_NAME_ERROR",
                payload: ""
            });
        }

        dispatch({
            type: "SET_FIRST_NAME_VALUE",
            payload: e.target.value
        });
    }

    const handleLastNameChange = (e) => {
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            dispatch({
                type: "SET_LAST_NAME_ERROR",
                payload: "Last name must be at least 2 characters long."
            });
        } else {
            dispatch({
                type: "SET_LAST_NAME_ERROR",
                payload: ""
            });
        }

        dispatch({
            type: "SET_LAST_NAME_VALUE",
            payload: e.target.value
        });
    }

    const handleEmailChange = (e) => {
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value) != true) {
            dispatch({
                type: "SET_EMAIL_ERROR",
                payload: "Please enter a valid email address."
            });
        } else {
            dispatch({
                type: "SET_EMAIL_ERROR",
                payload: ""
            });
        }

        dispatch({
            type: "SET_EMAIL_VALUE",
            payload: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input
                    id="firstName"
                    value={state.firstName.value}
                    onChange={ (e) => handleFirstNameChange(e) } />
                {state.firstName.error !== null && (
                    <p className="error">{state.firstName.error}</p>
                )}
            </div>

            <div>
                <label htmlFor="lastName">Last Name: </label>
                <input
                    id="lastName"
                    value={state.lastName.value}
                    onChange={ (e) => handleLastNameChange(e) } />
                {state.lastName.error !== null && (
                    <p className="error">{state.lastName.error}</p>
                )}
            </div>
            <div>
                <label htmlFor="email">Email Address:</label>
                <input 
                    id="email"
                    value={state.email.value}
                    onChange={ (e) => handleEmailChange(e)} />
                {state.email.error !== null && (
                    <p className="error">{state.email.error}</p>
                )}
            </div>
            <div>
                <input type="submit" value="Submit"/>
            </div>
        </form>
    )
}