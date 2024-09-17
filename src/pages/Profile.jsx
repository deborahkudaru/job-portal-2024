import React, { useEffect, useState } from "react";
import { auth, db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
// import { FaInstagram } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaWhatsapp } from "react-icons/fa";
// import { FiMail } from "react-icons/fi";
import LoggedHead from "../components/LoggedHead";
// import { toast } from "react-toastify";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  // const [profilePhoto, setProfilePhoto] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "Employers", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserDetails(docSnap.data()); // Update state with user data
            console.log(docSnap.data());
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching document:", error);
        }
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // const handlePhotoChange = (e) => {
  //   const file = e.target.files[0];
  //   setProfilePhoto(URL.createObjectURL(file)); // Create a preview URL
  // };
  return (
    <>
      {" "}
      <div className=" bg-gray-100">
        <LoggedHead />
        <div className="px-48 pt-20">
          <h1>Profile Photo</h1>
        
          {/* {profilePhoto && (

        <img
          src={profilePhoto}
          alt="Profile"
          className="profile-img border-2 w-1/2 h-1/2 rounded-full"
        />
       )} */}
          {/* <input type="file" accept="image/*" onChange={handlePhotoChange} /> */}
          <div>
            {userDetails ? (
              <>
                {/* <h3>Welcome {userDetails.firstName}</h3> */}
                <div>
                  <h3 className="text-xl 3">
                    {userDetails.firstName} {userDetails.lastName}
                  </h3>
                  <div>
                    <h3 className="text-2xl text-violet-500 font-semibold pb-2">
                      About
                    </h3>
                    <div className="flex flex-col gap-5 pb-10">
                      <p>Phone: {userDetails.phoneNumber}</p>
                      <p>
                        Email:{" "}
                        <span className="text-violet-500">
                          {userDetails.email}
                        </span>
                      </p>
                      <p>Status: Employer</p>
                    </div>
                  </div>
                  <div>
                    {/* <h3 className="text-2xl text-violet-500 font-semibold pb-2">
                    Socials
                  </h3>
                  <div className="flex gap-5 text-2xl">
                    <a href="">
                      <FaInstagram />
                    </a>
                    <a href="">
                      <FaXTwitter />
                    </a>
                    <a href="">
                      <FaWhatsapp />
                    </a>
                    <a href="">
                      <FiMail />
                    </a>
                  </div> */}
                  </div>
                </div>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
