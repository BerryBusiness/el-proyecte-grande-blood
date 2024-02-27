import React, {useState} from "react";
import Button from "./Button.jsx";
import Header from "./Header.jsx";


const LoginForm = ({onSave, disabled, onCancel}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        const regexPattern = /[\w.]+@\w+\.\w{2,4}[a-z.]{0,3}/g;
        if (!regexPattern.test(email)) {
            return alert("The given E-mail format is not valid!");
        }

        return onSave({
            email,
            password
        });
    };

    return (
        <>

            <form>
                <div class="mb-3">
                    <label for="userEmail">Email address</label>
                    <input type="email" class="form-control" id="userEmail" placeholder="Enter email"/>

                </div>
                <div className="mb-3">
                    <label form="userPassword">Password</label>
                    <input type="password" className="form-control" id="userPassword" aria-describedby="pwHelp"
                           placeholder="name@example.com"/>
                    <small id="pwHelp" className="form-text text-muted">Must be 8-20 characters long.</small>
                </div>
                <Button text='Sign in' onClick={onSave}></Button>
            </form>
        </>
    )
};

export default LoginForm;
