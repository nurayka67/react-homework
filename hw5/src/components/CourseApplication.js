import React from 'react';
import { useFormik } from 'formik';
import './CourseApplication.css';

const CourseApplication = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      course: '',
      gender: '',
      dob: '',
      phone: '',
      education: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    },
    
    validate: values => {
      const errors = {};
      if (!values.fullName) errors.fullName = 'Full name is required';
      if (!values.email) errors.email = 'Email is required';
      if (!values.password) errors.password = 'Password is required';
      else if (values.password.length < 6) errors.password = 'Password must be at least 6 characters';
      if (!values.course) errors.course = 'Please select a course';
      if (!values.gender) errors.gender = 'Please select gender';
      if (!values.dob) errors.dob = 'Date of birth is required';
      if (!values.city) errors.city = 'City is required';
      if (!values.country) errors.country = 'Country is required';
      return errors;
    },
    
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className="form-container">
      <h1>Course Application</h1>
      <p>Join our courses and start your learning journey today!</p>
      
      <form onSubmit={formik.handleSubmit}>
        <div className="section">
          <h2>Personal Information</h2>
          
          <div className="input-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="fullName"
              onChange={formik.handleChange}
              value={formik.values.fullName}
            />
            {formik.errors.fullName && <div className="error">{formik.errors.fullName}</div>}
          </div>

          <div className="input-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && <div className="error">{formik.errors.email}</div>}
          </div>

          <div className="input-group">
            <label>Password *</label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && <div className="error">{formik.errors.password}</div>}
          </div>

          <div className="input-group">
            <label>Course Selection *</label>
            <div className="radio-group">
              <label><input type="radio" name="course" value="Course A" onChange={formik.handleChange} /> Course A</label>
              <label><input type="radio" name="course" value="Course B" onChange={formik.handleChange} /> Course B</label>
              <label><input type="radio" name="course" value="Course C" onChange={formik.handleChange} /> Course C</label>
            </div>
            {formik.errors.course && <div className="error">{formik.errors.course}</div>}
          </div>

          <div className="input-group">
            <label>Gender *</label>
            <div className="radio-group">
              <label><input type="radio" name="gender" value="Male" onChange={formik.handleChange} /> Male</label>
              <label><input type="radio" name="gender" value="Female" onChange={formik.handleChange} /> Female</label>
            </div>
            {formik.errors.gender && <div className="error">{formik.errors.gender}</div>}
          </div>
          <div className="input=group">
            <label>Date of Birth *</label>
            <input
                type="date"
                name="dob"
                onChange={formik.handleChange}
                value={formik.values.dob}
            />
            {formik.errors.dob && <div className="error">{formik.errors.dob}</div>}
          </div>
          </div>

        <div className="section">
          <h2>Contact Information</h2>
          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              onchange={formik.handleChange}
              value={formik.values.phone}
              />
          </div>
           <div className="input-group">
            <label>Education Level</label>
            <select name="education" onChange={formik.handleChange} value={formik.values.education}>
                <option value="" label="Select education level" />
                <option value="School" label="School" />
                <option value="College" label="College" />
                <option value="University" label="University" />
                </select>
          </div>
          <div className="input-group">
            <label>Address</label>
            <textarea
                name="address"
                onChange={formik.handleChange}
                value={formik.values.address}
                rows="3"
            />
            </div>
            <div className="row">
                <div className="input-group">
                    <label>City *</label>
                    <input
                        type="text"
                        name="city"
                        onChange={formik.handleChange}
                        value={formik.values.city}
                    />
                    {formik.errors.city && <div className="error">{formik.errors.city}</div>}
                    </div>
                    <div className="input-group">
                    <label>State</label>
                    <input
                        type="text"
                        name="state"
                        onChange={formik.handleChange}
                        value={formik.values.state}
                    />
                </div>
                </div>
                <div className="row">
                <div className="input-group">

                    <label>Zip Code</label>
                    <input
                        type="text"
                        name="zipCode"
                        onChange={formik.handleChange}
                        value={formik.values.zipCode}
                        />
                        </div>
                        <div className="input-group">
                        <label>Country *</label>
                        <select name ="country"
                            onChange={formik.handleChange}
                            value={formik.values.country}
                        >
                            <option value="" label="Select country" />
                            <option value="USA" label="USA" />
                            <option value="Canada" label="Canada" />
                            <option value="Kazakhstan" label="Kazakhstan" />
                            <option value="Other" label="Other" />
                            </select>
                            {formik.errors.country && <div className="error">{formik.errors.country}</div>}
                        </div>
                    </div>
                </div>
        <button type="submit" className="submit-btn">Submit Application</button>
        </form>
    </div>
  );
};
export default CourseApplication;
     

          