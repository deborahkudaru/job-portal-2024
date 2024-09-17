import React from "react";

const CreateProfile = () => {
  return (
    <div>
      <p>Create your profile</p>
      <h2>How would you like to tell us about yourself?</h2>
      <p>
        We need to know more about you, your skills, experience abd education
      </p>
      <Link>Upload your resume</Link>
      <Link to="/create-manually">Fill out manually</Link>

      <div>
        <p>
          "Your WorkBuddy Profile is how you stand up from the crowd. It's what
          you use to win work, so let's make a good one."
        </p>
      </div>
    </div>
  );
};

export default CreateProfile;
