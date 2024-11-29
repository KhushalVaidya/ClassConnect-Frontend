import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useState } from 'react';
import './SignUpForm.css';

const SignUpForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        address: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic validation
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    mobile: formData.mobile,
                    address: formData.address,
                    email: formData.email,
                    password: formData.password
                })
            });

            if (response.ok) {
                // const result = await response.json();
                alert('Sign Up Successful!');
                // Handle successful signup (e.g., redirect, clear form)
            } else {
                const errorData = await response.json();
                alert(`Signup Failed: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Signup Error:', error);
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
                            <h1>Sign Up</h1>
                        </div>
                        <div className="login-underline"></div>
                    </div>
                    <div className="login-inputs">
                    <div className='login-input-fields'>
                     <div className="login-input">
                         <input 
                            type="text" 
                            name="name"
                            placeholder='Enter Your Name'
                            value={formData.name}
                            onChange={handleChange}
                            pattern="^[a-zA-Z\s]{3,}+$"  // Allows only alphabets and spaces
                            title="Name should only contain alphabets and spaces."
                            required 
                        />
                        </div>
                            <div className="login-input">
                        <input  
                            type="tel" 
                            name="mobile"
                            placeholder='Enter Your Mobile Number'
                            value={formData.mobile}
                            onChange={handleChange}
                            pattern="^[0-9]{10}$"  // Ensures exactly 10 digits
                            title="Mobile number must be 10 digits."
                            required 
                        />
                        </div>
                    <div className="login-input">
                        <input 
                            type="text" 
                            name="address"
                            placeholder='Enter Your Address'
                            value={formData.address}
                            onChange={handleChange}
                            pattern="^.{5,}$"  // Minimum 5 characters
                            title="Address should be at least 5 characters long."
                            required 
                        />
                    </div>
                    <div className="login-input">
                        <input 
                            type="email" 
                            name="email"
                            placeholder='Enter Email'
                            value={formData.email}
                            onChange={handleChange}
                            title="Please enter a valid email address."
                            required 
                        />
                    </div>
                    <div className="login-input">
                        <input 
                            type="password" 
                            name="password"
                            placeholder='Enter New Password'
                            value={formData.password}
                            onChange={handleChange}
                            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"  // Minimum 8 characters, at least one letter and one number
                            title="Password must be at least 8 characters long and include at least one letter and one number."
                            required 
                        />
                    </div>
                    <div className="login-input">
                        <input 
                            type="password" 
                            name="confirmPassword"
                            placeholder='Re-enter Password'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"  // Same pattern as the password
                            title="Passwords must match and meet the same requirements as above."
                            required 
                        />
                    </div>
                </div>

                    </div>
                    <div className="login-forgot-password">
                        {/* Forgot password <span className='login-clickhere'>click here</span> */}
                        <div className='login-submit-outer'>
                            <button 
                                type="submit" 
                                id='login-signUpbutton' 
                                className="login-submit"
                            >
                                Sign Up
                            </button>

                            <button
                                type="button" // Change type to button to avoid form submission
                                className="login-submit"
                                onClick={() => navigate('/login')} // Navigate to the login page
                            >
                                Login
                            </button>


                            {/* <button 
                                type="button"   
                                // id='login-signUpbutton' 
                                className="login-submit"   
                            >
                                Login
                            </button> */}
                            {/* <p className="login-submit">Login</p> */}
                        </div>
                    </div> 
                </form>
            </div>
        </div>
    );
}

export default SignUpForm;



// import './LoginForm.css';

// const LoginSignUp=()=>{
//     return(
//         <div className='Container'>
//             <div className='Container-1'>
//                 <div>

//                 <img src="/images/illustration.svg" alt="" />
//                 </div>
//             </div>
//             <div className='Container-2'>
//             <div>

            
//             <div className='header'>
//                 <div className="text"> <h1>
//                     Sign Up</h1>
//                 </div>
//                 <div className="underline"></div>
//             </div>
//             <div className="inputs">
//                 <div className='input-fields'>

               
//                 <div className="input">
//                     <input type="text" placeholder='Enter Your Name'/>
//                 </div>

//                 <div className="input">
               
//                <input type="text"  placeholder='Enter Your Mobile Number'/>
//            </div>

//            <div className="input">
               
//                <input type="text"  placeholder='Enter Your Address'/>
//            </div>

//                 <div className="input">
               
//                     <input type="email"  placeholder='Enter Email'/>
//                 </div>

//                 <div className="input">
                
//                     <input type="password" placeholder='Enter New Password' />
//                 </div>

//                 <div className="input">
                
//                     <input type="password" placeholder='Re-enter Password' />
//                 </div>

                
//                 </div>
//             </div>
//             <div className="forgot-password">forgot password <span className='clickhere'>click here</span>
//             <div className='submit-outer'>

//                 <button id='signUpbutton' className="submit">Sign Up </button>
//                 <p className="submit">Login</p>
//             </div>
//             </div>
            
//             </div>
//             </div>
//         </div>
//     )
// }
// export default LoginSignUp;