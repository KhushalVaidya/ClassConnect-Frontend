import './LoginForm.css';


const LoginSignUp=()=>{
    return(
        <div className='Container'>
            <div className='header'>
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    {/* <img src={} alt="" /> */}
                    <input type="text" />
                </div>

                <div className="input">
                    {/* <img src="" alt="" /> */}
                    <input type="email" />
                </div>

                <div className="input">
                    {/* <img src="" alt="" /> */}
                    <input type="password" />
                </div>
            </div>
            <div className="forgot-password">forgot password <span>click here</span></div>
            <div className="sublit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
            </div>

        </div>
    )
}
export default LoginSignUp;