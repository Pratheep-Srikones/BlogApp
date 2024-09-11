import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import moment from 'moment';

const Write = () => {

  const state = useLocation().state;

  const [value, setValue] = useState(state?.description || '');
  const [heading, setHeading] = useState(state?.heading || '');
  const [file, setFile] = useState(null);
  const [category,setCategory] = useState(state?.category || '');

  const upload = async() => {
   try{
    const formData = new FormData();
    formData.append('file', file);
    const res = await axios.post("http://localhost:2002/api/upload", formData);
    return res.data;
   } catch(err)
 {
  console.log(err);
 }  }
  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state ? await axios.put(`http://localhost:2002/api/posts/${state.post_id}`,{heading,description:value,category,image:file?imgUrl : ""})
      : await axios.post(`http://localhost:2002/api/posts/`,{heading,description:value,category,image:file?imgUrl : "",date:moment(Date.now()).format('YYYY-MM-DD HH:mm:ss' )});
    }catch(err) {
      console.log(err);
    }
  }
  return (
    <div className="add">
      <div className="content">
        <input required type="text" value={heading} name="" id="" placeholder="Title" onChange={(e)=>setHeading(e.target.value)}/>
        <div className="editorContainer">
        <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>

      <div className="menu">
        <div className="item">
          <h2>Publish</h2>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style = {{display:"none"}} type="file" id='file' onChange={(e)=>setFile(e.target.files[0])}/>
          <label className='file' htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as Draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h2>Category</h2>

          <div className="cate">
            <input type="radio" checked={category==='objects'} name="cat" value='objects' id = 'objects' onChange={e=>setCategory(e.target.value)}/>
            <label htmlFor="objects">Celestial Objects</label>
          </div>
          
          <div className="cate">
            <input type="radio" checked={category==='explore'} name="cat" value='explore' id = 'explore' onChange={e=>setCategory(e.target.value)}/>
            <label htmlFor="explore">Space Exploration</label>
          </div>
          
          <div className="cate">
            <input type="radio" checked={category==='science'} name="cat" value='science' id = 'science' onChange={e=>setCategory(e.target.value)}/>
            <label htmlFor="science">Astronomy Science</label>
          </div>
          
          <div className="cate">
            <input type="radio" checked={category==='history'} name="cat" value='history' id = 'history' onChange={e=>setCategory(e.target.value)}/>
            <label htmlFor="history">Astronomy History</label>
          </div>
          
          
        </div>
      </div>
      
    </div>
  )
}

export default Write
