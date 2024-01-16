import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { forgotPassword } from '../../Services/authServices'
import '../Login/ForgotPassword.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  const handleResetPassword = async () => {
    try {
      setLoading(true);

      // Call your backend API to handle the password reset
      const result = await forgotPassword(email);

      if (result.status === 200) {
        // Show a success message or redirect to a success page
        setResetSent(true);
      } else {
        // Show an error message
        console.error('Failed to send reset password email.');
      }
    } catch (error) {
      console.error('Error during password reset:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container d-flex justify-content-center align-items-center min-vh-100'>
      {!resetSent ? (
        <div  className='row border rounded-5 p-3 bg-white shadow box-area'>
          <div className="input-group mb-3">
            <FaUser className='icon' />
            <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Email" onChange={(e) => setEmail(e.target.value) }/>
          </div>
          <div className="input-group mb-3">
            <button onClick={handleResetPassword} className="btn btn-lg btn-primary w-100 fs-6" disabled={loading} >
              {loading ? 'Sending...' : 'Reset Password'}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p>Password reset email sent successfully. Check your email for further instructions.</p>
          <Link to="/login">Back to Login</Link>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
