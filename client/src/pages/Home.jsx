import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const cat = useLocation().search;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:2002/api/posts${cat}`);
                const data = Array.isArray(res.data) ? res.data : [];
                setPosts(data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, [cat]);


    return (
        <div className="home">
            <div className="posts">
                {posts.map(post => (
                    <div className="post" key={post.post_id}>
                        <div className="img">
                            <img src={`./uploads/${post.image}`} alt={post.heading} />
                        </div>
                        <div className="content">
                            <Link className='link' to={`/post/${post.post_id}`}>
                                <h1>{post.heading}</h1>
                            </Link>
                            <p>{post.description}</p>
                            <button>Read more</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;
