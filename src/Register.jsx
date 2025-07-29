import { useState } from "react";

export default function RegisterForm(){
    const [email, setEmail] = useState('');
    const [emailValidity,setEmailValidity] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    const handleSubmit =  (e) => {
        e.preventDefault();
        console.log("Logging in with:", username,password);
    }

    const handleEmailChange = (e) => {
        setEmailValidity(emailRegex.test(e.target.value));
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email: </label>
                <input type="text" value={email}
                onChange={(e)=> {
                    setEmail(e.target.value);
                    handleEmailChange();
                    }
                }
                style={{borderColor: emailValidity ? 'blue' : 'red'}}
                placeholder="Email"
                />

                {!emailValidity && email && <p style={{ color: 'red' }}>Invalid email format</p>}

            </div>
            <div>
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
            <div>
                <label>Password: </label>
                <input type="text" value={password}
                onChange={(e)=> {
                    setPassword(e.target.value);
                    console.log(password)
                    }
                }
                placeholder="Password"
                />
            </div>
        </form>
        
    )
}