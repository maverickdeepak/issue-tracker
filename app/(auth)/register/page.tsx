import React from "react";

const Register = () => {
  return (
    <div className="regiter">
      <form className="regiter__form">
        <div className="regiter__form__field">
          <label>Full Name</label>
          <input type="text" />
        </div>
        <div className="regiter__form__field">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="regiter__form__field">
          <label>Password</label>
          <input type="password" />
        </div>
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
