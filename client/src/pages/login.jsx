import { useContext, useState} from "react";
//import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authCotext";


const Login = () => {

  const [formData, setFormData] = useState({
    username:"",
    password:"",
  });

  const [err,setErr] = useState(null);
  const navigate = useNavigate();
  const {login} = useContext(AuthContext);

  
  const handleChange = (e) => {
      setFormData(prev => ({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log("Button Clicked!!")
    try {
      //console.log(`sending data: ${JSON.stringify(formData)}`);
      await login(formData);
      navigate('/');
      console.log('sent');
    } catch(err) {
      setErr(err.response.data);
    }
    
  }

  return (
    <div className="auth">
        <h1>Login</h1>
        <form action="">
          <input required autoComplete="off" type="text" placeholder="Username" name="username" onChange={handleChange}/>
          <input required autoComplete="off"type="password" placeholder="Password" name="password" onChange={handleChange}/>
          <button onClick={handleSubmit}>Log in</button>
          {err && <p>{err}</p>}
          <span>{"Don't have an account? "} <a href="/register">Register</a></span>
        </form>
    </div>
  )
}

export default Login
