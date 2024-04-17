import React, { useState } from "react";

const LoginForm = () => {
  // State for form data and errors
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update form data based on input changes
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form fields
  const validateForm = () => {
    const errors = {};
    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Form is valid, proceed with login
      console.log("Form data:", formData);
    } else {
      // Form has errors, display them
      setErrors(errors);
    }
  };

  return (
    <div>
      {/* Login form */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {/* Display error message if username is empty */}
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {/* Display error message if password is empty */}
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        {/* Submit button */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
