import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeNavbar from './HomeNavbar';
import HomeFooter from './HomeFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';

function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showCPassword, setShowCPassword] = useState(false);
    const [inptdata, setInptdata] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: ''
    });
    const [err, setErr] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInptdata({ ...inptdata, [name]: value });
    }

    const handleSignUp = async () => {
        let newErrors = { ...err };
        let isValid = true;

        // Validation checks
        if (!inptdata.name || inptdata.name.trim().length === 0) {
            newErrors.name = "Name can't be blank";
            isValid = false;
        } else if (inptdata.name.length <= 2) {
            newErrors.name = "Name must have at least 3 characters";
            isValid = false;
        } else {
            newErrors.name = "";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inptdata.email)) {
            newErrors.email = "Email is not valid";
            isValid = false;
        } else {
            newErrors.email = "";
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(inptdata.password)) {
            newErrors.password = "Password must be strong";
            isValid = false;
        } else {
            newErrors.password = "";
        }

        if (inptdata.password.length <= 5 || inptdata.password !== inptdata.cpassword) {
            newErrors.cpassword = "Passwords do not match";
            isValid = false;
        } else {
            newErrors.cpassword = "";
        }

        setErr(newErrors);

        if (isValid) {
            try {
                const response = await fetch('http://localhost:1300/api/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(inptdata)
                });

                if (!response.ok) {
                    const responseData = await response.json();
                    if (responseData.error === 'User already exists') {
                        toast.error("User already exists. Please login or use a different email.");
                        setInptdata({ name: '', email: '', password: '', cpassword: '' })

                    } else {
                        throw new Error('Sign up failed');
                    }
                    return;
                }

                // alert("Sign up successful");
                toast.success("Sign Up Successful")
                setInptdata({ name: '', email: '', password: '', cpassword: '' })
            } catch (error) {
                console.error('Error signing up:', error);
                // alert("Error signing up. Please try again.");
                toast.error("Error signing up. Please try again")
            }
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const togglePasswordVisibility1 = () => {
        setShowCPassword(!showCPassword);
    };

    return (
        <>
            <HomeNavbar />
            <div className='container-fluid SignUpbody'>
                <div className="wrapper2">
                    <form>
                        <h1>Sign Up</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Name" name='name' onChange={handleChange} value={inptdata.name} />
                            <div style={{ color: 'red' }}>{err.name}</div>
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder="E-mail" name='email' onChange={handleChange} value={inptdata.email} />
                            <div style={{ color: 'red' }}>{err.email}</div>
                        </div>
                        <div className="input-box posrel">
                            <input type={showPassword ? 'text' : 'password'} placeholder="Password" name='password' onChange={handleChange} value={inptdata.password} />
                            <span onClick={togglePasswordVisibility}> {showPassword ? <FontAwesomeIcon icon="fa-regular fa-eye " className='fs-5 text-white posab' /> : <FontAwesomeIcon icon="fa-regular fa-eye-slash" className='fs-5 text-white posab' />}</span>
                            <div style={{ color: 'red' }}>{err.password}</div>
                        </div>
                        <div className="input-box posrel">
                            <input type={showCPassword ? 'text' : 'password'} placeholder="Confirm Password" name='cpassword' onChange={handleChange} value={inptdata.cpassword} />
                            <span onClick={togglePasswordVisibility1}> {showCPassword ? <FontAwesomeIcon icon="fa-regular fa-eye " className='fs-5 text-white posab' /> : <FontAwesomeIcon icon="fa-regular fa-eye-slash" className='fs-5 text-white posab' />}</span>
                            <div style={{ color: 'red' }}>{err.cpassword}</div>
                        </div>

                        <button type="button" className="btn btn_hover_work text-black" onClick={handleSignUp}>Sign Up</button>

                        <div className="register-link">
                            <p>Already have an account?<Link to='/login'><a href="#"> Login</a></Link></p>
                        </div>
                    </form>
                </div>
            </div>
            <HomeFooter />
            <ToastContainer />
        </>
    );
}

export default SignUp;
