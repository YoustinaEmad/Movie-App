import React, { useState } from 'react';
import NavBar from './NavBar';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    nameError: '',
    emailError: '',
    usernameError: '',
    passwordError: '',
    confirmPasswordError: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [`${name}Error`]: '',
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, username, password, confirmPassword } = formData;
    const newErrors = {
      nameError: '',
      emailError: '',
      usernameError: '',
      passwordError: '',
      confirmPasswordError: '',
    };

    // Validate name
    if (name.trim() === '') {
      newErrors.nameError = 'Name is required.';
    }

    // Validate email
    if (email.trim() === '') {
      newErrors.emailError = 'Email address is required.';
    } else if (!isValidEmail(email)) {
      newErrors.emailError = 'Invalid email address.';
    }

    // Validate username
    if (username.trim() === '') {
      newErrors.usernameError = 'Username is required.';
    } else if (username.includes(' ')) {
      newErrors.usernameError = 'Username cannot contain spaces.';
    }

    // Validate password
    if (password.trim() === '') {
      newErrors.passwordError = 'Password is required.';
    } else if (!isValidPassword(password)) {
      newErrors.passwordError =
        'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.';
    }

    if (confirmPassword.trim() === '') {
      newErrors.confirmPasswordError = 'Confirm Password is required.';
    } else if (password !== confirmPassword) {
      newErrors.confirmPasswordError = 'Passwords do not match.';
    }

    setErrors(newErrors);
    if (Object.values(newErrors).every((error) => error === '')) {
      setIsSubmitted(true);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <>
      <style>
        {`
        .custom-form {
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group label {
          display: block;
          font-weight: bold;
        }
        .form-control {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .error {
          color: red;
          font-size: 12px;
          margin-top: 5px;
        }
        .btn-primary {
          padding: 10px 20px;
          font-size: 18px;
          color: #fff;
          background-color: #007bff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .btn-primary:hover {
          background-color: #0056b3;
        }
        `}
      </style>
      <NavBar/>
      <br />
      <br />
      {!isSubmitted ? (
        <form className="custom-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className={`form-control ${errors.nameError && 'is-invalid'}`}
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.nameError && <span className="error">{errors.nameError}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className={`form-control ${errors.emailError && 'is-invalid'}`}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.emailError && <span className="error">{errors.emailError}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className={`form-control ${errors.usernameError && 'is-invalid'}`}
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            {errors.usernameError && <span className="error">{errors.usernameError}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`form-control ${errors.passwordError && 'is-invalid'}`}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.passwordError && <span className="error">{errors.passwordError}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className={`form-control ${errors.confirmPasswordError && 'is-invalid'}`}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            {errors.confirmPasswordError && (
              <span className="error">{errors.confirmPasswordError}</span>
            )}
          </div>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      ) : (
        <div className="alert alert-success" role="alert">
          Thanks for registering! You have successfully registered.
        </div>
      )}
    </>
  );
}

export default Register;
