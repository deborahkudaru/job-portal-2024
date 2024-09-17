import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase"; // Ensure Firebase is correctly initialized

const FetchPhoto = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const auth = getAuth(); // Get the current authenticated user

  useEffect(() => {
    const fetchUserPhoto = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const docRef = doc(db, "Users", user.uid); // Reference to the user's document
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            if (data.imageUrl) {
              setImageUrl(data.imageUrl); // Set the image URL from Firestore
            } else {
              setError("No image found for this user.");
            }
          } else {
            setError("No document found for this user.");
          }
        } else {
          setError("No authenticated user.");
        }
      } catch (err) {
        console.error("Error fetching document:", err);
        setError("Failed to fetch image.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserPhoto();
  }, [auth]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="User's uploaded" style={{ width: "200px" }} />
      ) : (
        <p>No image available</p>
      )}
    </div>
  );
};

export default FetchPhoto;
