import React, { useState, useEffect } from 'react';
import profile from "../img/profile.png";
import "./Profile.css";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'; // Import toast if using react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

export default function Profile() {
  const [data, setData] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const navigate = useNavigate();

  // Toast Functions
  const notifyA = (msg) => toast.success(msg);
  const notifyB = (msg) => toast.error(msg);

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      notifyB("Please Sign in to see the Profile");
      navigate("/");
      return;
    }

    const fetchData = async () => {
      try {
        const profileRes = await fetch("http://localhost:8080/myprofile", {
          headers: {
            "Authorization": "Bearer " + token
          },
        });

        const profileResult = await profileRes.json();
        setProfileData(profileResult);

        const blogsRes = await fetch("http://localhost:8080/myblogs", {
          headers: {
            "Authorization": "Bearer " + token
          },
        });

        const blogsResult = await blogsRes.json();

        if (blogsResult.message) {
          notifyA(blogsResult.message);
          setData([]);
        } else {
          setData(blogsResult);
        }

      } catch (err) {
        console.error(err);
        notifyB("Error fetching data");
      }
    };

    fetchData();
  }, [navigate]);

  const visitBlog = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/blog/${id}`);
      const blogData = await response.json();
      navigate("/blog", { state: { blogData } });
    } catch (err) {
      console.error(err);
      notifyB("Error fetching blog data");
    }
  };

  if (!profileData || data === null) {
    return <div className="loadu">Loading............</div>;
  }

  if (data.length === 0) {
   return(
    <>
     <div className="profile-container">
        <div className="profile">
          <div className="profile-img"><img src={profile} alt="" /></div>
          <div className="profile-name">{profileData.name}</div>
          <div className="follower-detail">
            <h6>Follower 33</h6>
            <h6>Following 33</h6>
          </div>
        </div>

        <div className="profile-details">
          <div className="full-name profile-inp">Full Name: <div className="profile-data">{profileData.name}</div></div>
          <div className="email profile-inp">Email: <div className="profile-data">{profileData.email}</div></div>
          <div className="mobile profile-inp">Mobile: <div className="profile-data">985757844</div></div>
          <div className="username profile-inp">Username: <div className="profile-data">{profileData.username}</div></div>
          <Button variant="outline-primary">Edit</Button>
        </div>
      </div>

      <div className="profile-blogs">No blogs are posted by you</div>
    </>
   )
    
  }

  return (
    <div className="full-page-profile">
      <div className="profile-container">
        <div className="profile">
          <div className="profile-img"><img src={profile} alt="" /></div>
          <div className="profile-name">{profileData.name}</div>
          <div className="follower-detail">
            <h6>Follower 33</h6>
            <h6>Following 33</h6>
          </div>
        </div>

        <div className="profile-details">
          <div className="full-name profile-inp">Full Name: <div className="profile-data">{profileData.name}</div></div>
          <div className="email profile-inp">Email: <div className="profile-data">{profileData.email}</div></div>
          <div className="mobile profile-inp">Mobile: <div className="profile-data">985757844</div></div>
          <div className="username profile-inp">Username: <div className="profile-data">{profileData.username}</div></div>
          <Button variant="outline-primary">Edit</Button>
        </div>
      </div>

      <div className="profile-blogs">
        {data.map((blogs) => (
          <div key={blogs._id} id={blogs._id} onClick={() => visitBlog(blogs._id)}>
            <Card className="category-card">
              <div className="cat-image">
                <Card.Img variant="top" src={blogs.image} />
              </div>
              <Card.Body>
                <Card.Title>{blogs.title}</Card.Title>
                <Card.Text className="cat-card-desc">
                  {blogs.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
