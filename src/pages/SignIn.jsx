import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import { toast } from 'react-toastify';
import Footer from '../components/Footer';
import { API } from '../utils/API';
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [toastify, setToastify] = useState(false);

  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
  
    try {
      dispatch(signInStart());
  
      const res = await fetch(`${API}/api/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
  
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        toast.error("Invalid User");
        return;
      }
      setToastify(true);
      dispatch(signInSuccess(data));
      navigate('/listing');
    } catch (error) {
      dispatch(signInFailure(error.message));
      toast.error("Invalid User");
    }
  };

  const containerStyle = {
    textAlign: 'center',
    backgroundColor: 'white',
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '20px'
  };

  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(10px)',
    width: '100%',
    maxWidth: '450px',
    boxSizing: 'border-box'
  };

  const inputStyle = {
    border: '1px solid #d1d5db',
    padding: '12px',
    borderRadius: '8px',
    margin: '8px 0',
    width: '100%',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '12px',
    borderRadius: '8px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    cursor: 'pointer',
    border: 'none',
    width: '100%',
    boxSizing: 'border-box'
  };

  const linkStyle = {
    color: '#1d4ed8',
    fontWeight: '500',
    textDecoration: 'none'
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h1 style={{ fontSize: '24px', color: 'black', marginBottom: '16px' }}>Sign In</h1>

        <form onSubmit={submitHandler} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input
            type='email'
            placeholder='Email'
            style={inputStyle}
            id='email'
            onChange={changeHandler}
          />
          <input
            type='password'
            placeholder='Password'
            style={inputStyle}
            id='password'
            onChange={changeHandler}
          />
          <button style={buttonStyle}>Sign In</button>
        </form>

        <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
          <p style={{ color: 'black' }}>Register</p>
          <Link to="/sign-up" style={linkStyle}>Sign Up</Link>
        </div>

        {toastify && toast.success("Sign In successfully..")}
        {toastify && (
          <div>
            {toast.success("Sign In successfully..")}
            {setToastify(false)}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
