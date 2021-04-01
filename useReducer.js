import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'firstName': {
            return { ...state, firstName: action.value };
            }
        case 'lastName': {
            return { ...state, lastName: action.value };
            }
        case 'email': {
            return { ...state, email: action.value };
            }
        case 'password': {
            return { ...state, password: action.value };
            }
        case 'confirmPassword': {
            return { ...state, confirmPassword: action.value };
            }
        default: {
            return state;
        }
    }
};

function SignupForm() {
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
    const [formElements, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <input placeholder="First Name" value={ formElements.firstName} onChange={(e) => dispatch({ type: firstName, value: e.target.value }) } />
                    <input placeholder="Last Name" value={ formElements.lastName} onChange={(e) => dispatch({ type: lastName, value: e.target.value }) } />
                    <input placeholder="Email" value={ formElements.email} onChange={(e) => dispatch({ type: email, value: e.target.value }) } />
                    <input placeholder="Password" value={ formElements.password} onChange={(e) => dispatch({ type: password, value: e.target.value }) } />
                    <input placeholder="Confirm Password" value={ formElements.confirmPassword} onChange={(e) => dispatch({ type: confirmPassword, value: e.target.value }) } />
                </div>
            </header>
        </div>
    );
}

export default useReducer;
