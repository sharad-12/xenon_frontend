// import React, { useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";
// // import OAuth from '../components/OAuth';
// import { toast } from 'react-toastify';

// const SignUp = () => {

//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({});
//   const [loading, setLoading] = useState(false);

//   const changeHandler = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.id]: event.target.value,
//     });
//   };

//   const submitHandler = async (event) => {
//     event.preventDefault();

//     try {
//       setLoading(true);

//       const res = await fetch('/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (data.success === false) {
//         toast.error(data.message);
//         setLoading(false);
//         return;
//       }

//       toast.success("Sign up successful!");
//       setLoading(false);
//       navigate('/')
//     } catch (error) {
//       toast.error("User already exists....");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className='text-white bg-white fixed h-screen overflow-hidden w-screen flex justify-center  bg-cover bg-no-repeat py-12'
//     style={{backgroundImage: 'url(https://urban-homes.s3.ap-south-1.amazonaws.com/sign+bg.png)'}}>

//       <div className="bg-white border border-s1ate-400 rounded-md px-8 shadow-2xl backdrop-filter backdrop-blur-2xl bg-opacity-40 relative py-2 h-[520px]">

//         <div className='p-3 max-w-lg mx-auto'>
//           <h1 className='text-3xl text-black text-center font-semibold my-7'>Sign Up</h1>

//           <form onSubmit={submitHandler} className='flex flex-col gap-4 w-[450px]'>
//             <input type='text' placeholder='username' className='border p-3 rounded-lg text-black' id='username' onChange={changeHandler} />
//             <input type='email' placeholder='email' className='text-black border p-3 rounded-lg text-black' id='email' onChange={changeHandler} />
//             <input type='password' placeholder='password' className='text-black border p-3 rounded-lg text-black' id='password' onChange={changeHandler} />
//             <button className='bg-black font-bold text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
//              Sign Up
//             </button>
          
//           </form>

//           <div className='flex gap-2 mt-5'>
//             <p className='text-black'>Already Registered?</p>
//             <Link to="/sign-in">
//               <span className='text-blue-700 font-medium'>Sign in</span>
//             </Link>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default SignUp;







import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Footer from '../components/Footer';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        toast.error(data.message);
        return;
      }

      toast.success("Sign up successful!");
      navigate('/listing');
    } catch (error) {
      toast.error("An error occurred during signup.");
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
    padding: '1rem',
  };

  const formStyle = {
    background: 'rgba(255, 255, 255, 0.8)',
    border: '1px solid #cbd5e1',
    borderRadius: '0.5rem',
    padding: '1rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(10px)',
    width: '90%',
    maxWidth: '450px',
    boxSizing: 'border-box',
  };

  const headingStyle = {
    color: 'black',
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
  };

  const inputStyle = {
    border: '1px solid #e5e7eb',
    padding: '1rem',
    borderRadius: '0.5rem',
    marginBottom: '1rem',
    width: '100%',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '1rem',
    border: 'none',
    borderRadius: '0.5rem',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    width: '100%',
    cursor: 'pointer',
    transition: 'opacity 0.3s',
  };

  const buttonHoverStyle = {
    opacity: '0.95',
  };

  const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    marginTop: '1.5rem',
  };

  const footerTextStyle = {
    color: 'black',
  };

  const linkStyle = {
    color: '#1d4ed8', // Tailwind's blue-700 color
    fontWeight: '500',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <div style={{ padding: '1rem', maxWidth: '100%', margin: '0 auto', marginBottom:'40px' }}>
          <h1 style={headingStyle}>Sign Up</h1>

          <form onSubmit={submitHandler} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type='text'
              placeholder='Username'
              style={inputStyle}
              id='username'
              onChange={changeHandler}
            />
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
            <button
              style={buttonStyle}
              onMouseOver={(e) => e.currentTarget.style.opacity = buttonHoverStyle.opacity}
              onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
            >
              Sign Up
            </button>
          </form>

          <div style={footerStyle}>
            <p style={footerTextStyle}>Already Registered?</p>
            <Link to="/sign-in" style={linkStyle}>Sign In</Link>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SignUp;
