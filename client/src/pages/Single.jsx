import { Link, useNavigate } from "react-router-dom";
import Menu from '../components/Menu';
import { useState,useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import {AuthContext} from "../context/authCotext.jsx";


const Single = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[2];

  const {currentUser} = useContext(AuthContext);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const res = await axios.get(`http://localhost:2002/api/posts/${postId}`);
              setPost(res.data);
          } catch (err) {
              console.error(err);
          }
      };

      fetchData();
  }, [postId]);

  const handleDelete = async () => {
      try {
        await axios.delete(`http://localhost:2002/api/posts/${postId}`);
        navigate('/');
      } catch (err) {
        console.error(err);
      }
  }

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
}
  return (
    <div className="single">
      <div className="content">
        <img src={`/uploads/${post.image}`} alt="" />
        <div className="user">
          {post.picture && <img src={post.picture} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post.username && <div className="edit">
            <Link to = {'/write?edit=2'} state = {post}>
              <img className="icon" src='/edit.png' alt="edit" />
            </Link>
            <img onClick={handleDelete} className="icon" src='/delete.png' alt="delete" />
          </div>}
        </div>

        <h1>{post.heading}</h1>
        {getText(post.description)}
          
      </div>
      <div className="menu">
        <Menu category={post.category}/>
      </div>
      
    </div>
  )
}

export default Single
