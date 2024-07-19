import { useLocation } from 'react-router-dom';
import "./Blog.css"

const Blog = () => {
  const location = useLocation();
  const { blogData } = location.state || {};
  console.log(blogData)
  return (
    <div className='full-blog-container'>
      {blogData ? (
        <div className='blog'>
          <div className="blog-title">{blogData.title}</div>
          <div className="blog-image"><img src={blogData.image} alt="" /></div>
          <div className="blog-description">{blogData.description}</div>
          <div className="blog-content">{blogData.content}</div>
          <h5>{blogData.categories}</h5>
          <div className="created-by">Created by : {blogData.author.name}Harshil dhoot
            
          </div>

          
        
        </div>
      ) : (
        <p>No blog data available.</p>
      )}
    </div>
  );
};

export default Blog;
