import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HomeNavbar from './HomeNavbar'
import HomeFooter from './HomeFooter'
import { ToastContainer, toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Login() {
    const navigate = useNavigate(); // Access the history object
    const [showPassword, setShowPassword] = useState(false)

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const handlechange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const handlesubmit = async (e) => {
        e.preventDefault();

        let newErrors = { ...errors };
        let isValid = true;
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            newErrors.email = "Email is not valid";
            isValid = false;
        } else {
            newErrors.email = "";
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(data.password)) {
            newErrors.password = "Password must be strong";
            isValid = false;
        } else {
            newErrors.password = "";
        }
        setErrors(newErrors);
        if (data.email === 'admin1234@gmail.com' && data.password === 'Admin@1234') {
            toast.success("Login Successfully !");  
            navigate('/admin');
        } 

        if (isValid) {
            try {
                const response = await fetch('http://localhost:1300/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
    
                if (!response.ok) {
                    throw new Error('Login failed');
                }
    
                const responseData = await response.json();
                let obj={
                    loginornot:'true',
                    value:data.email.slice(0,1)
                }
                
                if (responseData.success) {
                    toast.success("Login Successfully !");

                    sessionStorage.setItem('islogin',JSON.stringify(obj))
                    setData({ email: '', password: '' });
                    navigate("/")
                } else {
                    toast.error("Invalid username or password");
                }
            } catch (error) {
                console.error('Error logging in:', error);
                toast.error("Error logging in. Please try again.");
            }
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <HomeNavbar />
            <div className='container-fluid loginbody'>
                <div className="wrapper1 my-4 my-sm-0">
                    <form>
                        <h1>Login </h1>
                        <div className="input-box">
                            <input type="email" placeholder="Enter the Email" name='email' onChange={handlechange} value={data.email} />
                            <div style={{ color: 'red' }}>{errors.email}</div>
                        </div>
                        <div className="input-box posrel">
                            <input type={showPassword ? 'text' : 'password'} placeholder="Password" name='password' onChange={handlechange} value={data.password}/>
                            <span onClick={togglePasswordVisibility}> {showPassword ? <FontAwesomeIcon icon="fa-regular fa-eye " className='fs-5 text-white posab' /> : <FontAwesomeIcon icon="fa-regular fa-eye-slash" className='fs-5 text-white posab' />}</span>
                            <div style={{ color: 'red' }}>{errors.password}</div>
                        </div>
                        <div className="remember-forgot text-white">
                            <label className='text-white'>
                                <input type="checkbox" />Remember me
                            </label>
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit" className="btn btn_hover_work text-black" onClick={handlesubmit}>Login</button>

                        <div className="register-link">
                            <p>Don't have an account?<Link to='/signup'><a href="#"> Sign Up</a></Link></p>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
            <HomeFooter />
        </>
    )
}

export default Login
