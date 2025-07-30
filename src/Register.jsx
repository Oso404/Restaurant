import { useState } from "react";
import './style/Register.css'

export default function RegisterForm(){
    const [email, setEmail] = useState('');
    const [emailValidity,setEmailValidity] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;


    const handleSubmit =  (e) => {
        e.preventDefault();
        // console.log("Logging in with:", username,password);
        if(!emailValidity){
            alert("Invalid email");
        }
    }

    // const handleEmailChange = (e) => {
    //     const value = e.target.value;
    //     setEmailValidity(emailRegex.test(value));
    // }

    return(
        <form onSubmit={handleSubmit} className="form">
            <div className="inner email">
                <label>Email: </label>
                <input type="text" value={email}
                onChange={(e)=> {
                    const value = e.target.value;
                    setEmail(value);
                    // handleEmailChange(e);
                    setEmailValidity(emailRegex.test(value));
                    // setEmail(e.target.value);
                    }
                }
                style={{borderColor: emailValidity ? 'blue' : 'red'}}
                placeholder="Email"
                />

                {!emailValidity && email && <p style={{ color: 'red' }}>Invalid email format</p>}

            </div>
            <div className="inner username">
                <label>Username: </label>
                <input type="text" value={username}
                onChange={(e)=> {
                    setUsername(e.target.value);
                    console.log(username)
                    }
                }
                placeholder="Username"
                />
            </div>
            <div className="inner password">
                <label>Password: </label>
                <input type="password" value={password}
                onChange={(e)=> {
                    setPassword(e.target.value);
                    console.log(password)
                    ///min 5 characters
                    ///at least one special character
                    }
                }
                placeholder="Password"
                />
                {/* <div className="requirements"> */}
                    {/* <ul className="requirements">
                        <li>Must be at least 5 characters</li>
                        <li>Must include one special character</li>
                    </ul> */}
                {/* </div> */}
            </div>
                    <ul className="requirements">
                        <li>Must be at least 5 characters</li>
                        <li>Must include one special character</li>
                    </ul>
            <div className="submit-button">
                <button type="submit">Submit</button>
            </div>
        </form>
        
    )
}