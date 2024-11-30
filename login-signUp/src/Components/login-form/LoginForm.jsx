import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Loginform.css';

const LoginForm = () => {
    const navigate = useNavigate(); // Initialize the navigation hook
    const [formData, setFormData] = useState({
       
        mobile_Email: '',
        password: '',
        
    });

    const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
       

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                   
                    mobile_Email: formData.mobile_Email,
                    
                    password: formData.password
                })
            });

            if (response.ok) {
                // const result = await response.json();
                alert('Login Successful!');
                // Handle successful signup (e.g., redirect, clear form)
            } else {
                const errorData = await response.json();
                alert(`Login Failed: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Login Error:', error);
            alert('An error occurred during signup');
        }
    };

    return (
        <div className='login-container'>
            <div className='login-illustration-container'>
                <div>
                    <img src="/images/illustration.svg" alt="Sign Up Illustration" />
                </div>
            </div>
            <div className='login-form-container'>
                <form onSubmit={handleSubmit}>
                    <div className='login-header'>
                        <div className="login-text">
                            <h1>Login</h1>
                        </div>
                        <div className="login-underline"></div>
                    </div>
                    <div className="login-inputs">
                        <div className='login-input-fields'>
                            
                            <div className="login-input">
                                <input 
                                    type="tel" 
                                    name="mobile"
                                    placeholder='Mobile Number/Email'
                                    value={formData.mobile_Email}
                                    onChange={handleChange}
                                    pattern="[0-9]{10}"
                                    required 
                                />
                            </div>
                            
                           
                            <div className="login-input">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    name="password"
                                    placeholder='Enter Password'
                                    value={formData.password}
                                    onChange={handleChange}
                                    minLength="8"
                                    required 
                                />
                                <span
                                    className="toggle-password-icon"
                                    onClick={togglePasswordVisibility}
                                    role="button"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? "🙈" : "👁️"} {/* Replace with actual icons if preferred */}
                                </span>
                            </div>
                            
                        </div>
                    </div>
                    <div className="login-forgot-password">
                        Forgot password <span className='login-clickhere'>click here</span>
                        <div className='login-submit-outer'>
                        <button
                                type="button"
                                id='login-signUpbutton' 
                                className="login-submit"
                                onClick={() => navigate('/')} // Navigate to the Sign Up page
                            >
                                Sign Up
                            </button>

                            <button
                                type="submit"
                                className="login-submit"
                            >
                                Login
                            </button>
                            {/* <p className="login-submit">Login</p> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;

