import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const GoBack = () => {
    navigate("/user");
  };
  return (
    <div className="w-1/2 m-auto mt-10">
      <h1 className="text-red-200 text-3xl mb-2">Hi ! {name}</h1>
      <button
        onClick={GoBack}
        className="text-2xl px-3 py-2 rounded-md bg-orange-300 mt-5"
      >
        Go Back
      </button>
    </div>
  );
};

export default UserDetail;
