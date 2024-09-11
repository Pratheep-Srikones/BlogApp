import { useState,useEffect } from "react";
//import { useLocation } from "react-router-dom";
import axios from "axios";

const Menu = ({category}) => {
  console.log(category);
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
      const fetchData = async () => {
          try {
              const res = await axios.get(`http://localhost:2002/api/posts?cat=${category}`);
              const data = Array.isArray(res.data) ? res.data : [];
              console.log(data[0]);
              setPosts(data);
          } catch (err) {
              console.error(err);
          }
      };

      fetchData();
  }, [category]);

  return (
    <div className="menu">
      <h2>Other posts you may like</h2>
      {posts.map(post => (
        <div key={post.id} className="post"> 
            <img src={`./uploads/${post?.image}`} alt="x" />
            <h3>{post.heading}</h3>
            <button>Read more</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
