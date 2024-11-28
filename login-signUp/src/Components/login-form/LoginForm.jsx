import  { useState } from 'react';
import './LoginForm.css';

const LoginSignUp = () => {
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
                                    pattern="[0-9]{10}"
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
                                    minLength="8"
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
                                    minLength="8"
                                    required 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="login-forgot-password">
                        Forgot password <span className='login-clickhere'>click here</span>
                        <div className='login-submit-outer'>
                            <button 
                                type="submit" 
                                id='login-signUpbutton' 
                                className="login-submit"
                            >
                                Sign Up
                            </button>
                            <p className="login-submit">Login</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginSignUp;



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