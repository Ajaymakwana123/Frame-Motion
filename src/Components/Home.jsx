import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Context";

const Home = () => {
  const {users,setusers}= useContext(UserContext);
  return (
    <div className="items-center">
      <h1 className="text-3xl text-black p-4"></h1>;
      <div className="mt-10">
        
        <Link className="p-4 bg-blue-100"></Link>
      </div>
    </div>
  );
};

export default Home;
