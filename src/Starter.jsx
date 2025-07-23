import './style/Starter.css'
import logo from "./assets/couple2.png"

let isSignedIn = false;

function StarterCard(){
    return (
        <div className = "outer-body">
            <div className = "outer-card">
                <div className = "inner-card-left">
                    <div className = "logo-wrapper">
                        <p id = "logo-top-text">Welcome Back</p>
                        <p id = "logo-bottom-text">Sign in to access your personalized homepage, follow restaurants
                            and foods you love, and clap for stories that matter to you.</p>
                        <img src={logo} alt='logo'/>
                    </div>
                </div>
                <div className = "inner-card-right">
                    <p>Right Card</p>
                </div>
            </div>

        </div>
    );
}


export default StarterCard;