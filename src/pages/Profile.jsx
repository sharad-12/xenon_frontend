import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../firebase';
import { updateUserStart, updateUserSuccess, updateUserFailure, deleteUserFailure, deleteUserStart, deleteUserSuccess, signInStart, signOutUserStart, signOutUserFailure, signOutUserSuccess } from '../redux/user/userSlice';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fileRef = useRef(null);
  const { currentUser, loading, error } = useSelector(state => state.user);
  const [file, setFile] = useState(undefined);
  const [filePercentage, setFilePercentage] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [FormData, setFormData] = useState({});
  const [userListings, setUserListings] = useState([]);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePercentage(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...FormData, avatar: downloadURL })
        );
      }
    );
  };

  const changeHandler = (event) => {
    setFormData({ ...FormData, [event.target.id]: event.target.value });
  };

  const containerStyle = {
    overflow: 'hidden',
    position: 'fixed',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  };

  const formStyle = {
    backgroundColor: 'white',
    border: '1px solid #cbd5e1',
    borderRadius: '0.5rem',
    padding: '2rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(10px)',
    width: '90%',
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '1rem',
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

  

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h1 style={titleStyle}>Profile</h1>
        <form className='flex flex-col gap-3 '>
         
          <input
            type='text'
            placeholder='username'
            id='username'
            defaultValue={currentUser.username}
            onChange={changeHandler}
            style={inputStyle}
          />
          <input
            type='email'
            placeholder='email'
            id='email'
            defaultValue={currentUser.email}
            onChange={changeHandler}
            style={inputStyle}
          />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
