import React from "react";

const Employer = () => {
  return (
    <div>
      <h2>Sign up to hire</h2>
      <button>Continue with Google</button>
      <button>Continue with Apple</button>
      <p>or</p>
      <label htmlFor="">First Name</label>
      <input type="text" />
      <label htmlFor="">Last Name</label>
      <input type="text" />
      <label htmlFor="">Work Email Address</label>
      <input type="text" />
      <label htmlFor="">Password</label>
      <input type="text" placeholder="Password (8 or more characters)" />

      <button>Create my account</button>
    </div>
  );
};

export default Employer;
