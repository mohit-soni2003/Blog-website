import { useState, useRef, useEffect } from 'react';
import "./ProfilePic.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProfilePic({ changeProfile, setChangeProfilePic }) {

    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");

    // Toast Notifications
    const notifySuccess = (msg) => toast.success(msg);
    const notifyError = (msg) => toast.error(msg);

    const hiddenFileInput = useRef(null);

    const handleClick = () => {
        hiddenFileInput.current.click();
    };

    // Upload image to Cloudinary
    useEffect(() => {
        const postDetails = async () => {
            if (image) {
                const data = new FormData();
                data.append("file", image);
                data.append("upload_preset", "blog-website");
                data.append("cloud_name", "mohitcloud2003");
                
                try {
                    const res = await fetch("https://api.cloudinary.com/v1_1/mohitcloud2003/image/upload", {
                        method: "POST",
                        body: data
                    });
                    const result = await res.json();
                    setUrl(result.url);
                    console.log(result)
                    notifySuccess("Image uploaded successfully!");
                } catch (err) {
                    console.error(err);
                    notifyError("Image upload failed!");
                }
            }
        };
        postDetails();
    }, [image]);


    const loadImage = (event) => {
        
            console.log(event.target.files[0])
            setImage(event.target.files[0])
        

    }
    // Update profile picture URL on server
    useEffect(() => {
        const updateProfilePic = async () => {
            if (url) {
                try {
                    const res = await fetch("http://localhost:8080/uploadprofilepic", {
                        method: "put",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + localStorage.getItem("jwt")
                        },
                        body: JSON.stringify({
                            photo: url
                        })
                    });
                    const result = await res.json();
                    console.log(result);
                    notifySuccess("Profile picture updated successfully!");
                } catch (err) {
                    console.error(err);
                    notifyError("Failed to update profile picture!");
                }
            }
        };
        updateProfilePic();
    }, [url]);

    return (
        <div className="dark-bg" >
            <div className="centered modal-container">
                <div className="modal-link" id='change-profile-photo'>Change Profile Photo</div>
                <div className="modal-link" id='upload-photo' onClick={handleClick}>Upload Photo</div>
                <input 
                    type="file" 
                    accept='image/*' 
                    ref={hiddenFileInput} 
                    onChange={loadImage} 
                    style={{ display: "none" }} 
                />
                <div className="modal-link" id='remove-current-photo'>Remove Current Photo</div>
                <div className="modal-link" id='close' onClick={changeProfile}>Close</div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default ProfilePic;
