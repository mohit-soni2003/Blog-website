import { useLocation } from 'react-router-dom';

const Blog = () => {
  const location = useLocation();
  const { blogData } = location.state || {};

  return (
    <div>
      {blogData ? (
        <div>
          <h1>{blogData.title}</h1>
          <h1>{blogData.description}</h1>
          <h1>{blogData.categories}</h1>
          <h1>{blogData._id}</h1>
          <img src={blogData.image} alt="" />
          <h2>{blogData.content}</h2>
          
          {/* Render other blog data as needed */}
        </div>
      ) : (
        <p>No blog data available.</p>
      )}
    </div>
  );
};

export default Blog;
