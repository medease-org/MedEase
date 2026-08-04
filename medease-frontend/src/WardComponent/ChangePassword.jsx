import React, { useState } from 'react';
import axios from 'axios';

const ChangePassword = () => {
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9090/api/user/change-password", {
  email,
  oldPassword,
  newPassword
});
      setMessage(response.data);
    } catch (error) {
      setMessage(error.response?.data || "Error changing password");
    }
  };

  return (
    <div className="container mt-4">
      <h3>Change Password</h3>
      <form onSubmit={handleChangePassword}>
        <input
          type="email"
          className="form-control mb-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button className="btn btn-primary">Change Password</button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default ChangePassword;
