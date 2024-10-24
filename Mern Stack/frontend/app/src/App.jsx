import React, { useState } from 'react';
import './App.css'
function App() {
  const [formData1, setFormData1] = useState({
    name: '',
    email: ''
  });

  const [formData2, setFormData2] = useState({
    username: '',
    password: ''
  });

  const handleForm1Submit = (event) => {
    event.preventDefault();
    console.log('Form 1 Data:', formData1);
  };

  const handleForm2Submit = (event) => {
    event.preventDefault();
    console.log('Form 2 Data:', formData2);
  };

  const handleForm1Change = (e) => {
    const { name, value } = e.target;
    setFormData1((prev) => ({ ...prev, [name]: value }));
  };

  const handleForm2Change = (e) => {
    const { name, value } = e.target;
    setFormData2((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="App">
      

  
      <form onSubmit={handleForm1Submit}>
        <h2>Contact Information</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData1.name}
            onChange={handleForm1Change}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData1.email}
            onChange={handleForm1Change}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <hr />

      {/* Form 2 */}
      <form onSubmit={handleForm2Submit}>
        <h2>Login Information</h2>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData2.username}
            onChange={handleForm2Change}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData2.password}
            onChange={handleForm2Change}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
