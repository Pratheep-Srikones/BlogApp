import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Register = () => {

  const [formData, setFormData] = useState({
    username:"",
    email:"",
    password:"",
  });
  const [file, setFile] = useState(null);
  const [err,setErr] = useState(null);
  const navigate = useNavigate();

  const upload = async() => {
    try{
      const picData = new FormData();
      picData.append('file', file);
      const res = await axios.post('http://localhost:2002/api/uploadprofilepic',picData);
      return res.data;
    } catch(err) {
      console.log(err);
    }
  }
  const handleChange = (e) => {
      setFormData(prev => ({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log("Button Clicked!!")
    const picUrl = await upload();
    try {
      //console.log(`sending data: ${JSON.stringify(formData)}`);
      await axios.post("http://localhost:2002/api/auth/register",{...formData,picUrl});
      navigate('/login');
      console.log('sent');
    } catch(err) {
      setErr(err.response.data);
    }
    
  }
  
  return (
    <div className="auth">
        <h1>Register</h1>
        <form action="" onSubmit={handleSubmit}>
          <input required autoComplete="off" type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange}/>
          <input required autoComplete="off" type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange}/>
          <input required autoComplete="off" type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange}/>
          <input style = {{display:"none"}} type="file" id='file' onChange={(e)=>setFile(e.target.files[0])}/>
          <label className='file' htmlFor="file">Upload Profile Picture</label>
          <button type="submit">Register</button>
          {err && <p>{err}</p>}
          <span>{"Already  have an account? "} <a href="/login">Login</a></span>
        </form>
    </div>
  )
}

export default Register