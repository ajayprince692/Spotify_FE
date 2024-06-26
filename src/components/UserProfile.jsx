import React, { useState } from "react";
import Header from "./Header";
import { useStateValue } from "../Context/StateProvider";

const UserProfile = () => {
  const [{ user }] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-primary">
      <Header />

      <div
        className="card bg-dark px-4 py-4 w-200 h-150"
        onMouseEnter={() => setIsMenu(true)}
        onMouseLeave={() => setIsMenu(false)}
      >
        <img
          className="w-[150px] min-w-[44px] object-cover rounded-full shadow-lg hover:bg-red"
          src={user?.user?.imageURL}
          alt=""
          referrerpolicy="no-referrer"
        />
        <br/>
        <br />
        <div className="flex flex-col">
          <p className="text-textColor text-lg hover:text-headingColor font-semibold px-5">
            {user?.user.name}
          </p>
          {user?.user.role === "admin"}<><p className="py-2 px-3 text-textColor font-semibold">Premium Member 👑{" "}
        </p></>

        </div>
          </div>
      </div>
  
  );
};

export default UserProfile;
