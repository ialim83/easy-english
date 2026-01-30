import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Button } from "flowbite-react";

const Profile = () => {
  const auth = useAuth();
  // console.log(user);
  return (
    <div className="p-3 w-full">
      <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
        <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
        <div className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
          <img
            src={auth?.user?.photoURL || "/placeholder.jpg"}
            className="rounded-full w-full h-full object-cover border-8 border-[lightgray]"
          />
        </div>
        <h1 className="text-xl md:text-4xl">
          Name: {auth?.user?.displayName || "alim"}
        </h1>
        <h1 className="text-xl md:text-4xl">Email: {auth?.user?.email}</h1>
        <div className="w-full flex items-center justify-center">
          <Link className="" to={`/dashboard/profile/edit/${auth?.user}`}>
            <Button
              type="button"
              gradientDuoTone="purpleToPink"
              className="w-flexDirection: 'column',"
            >
              Edit profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
