import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

const Dashboard = () => {
  // const [userInfo, setUserInfo] = useState();
  // console.log(userInfo);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/user/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setUserInfo(data));
  // }, [user]);

  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="my-7 text-center font-semibold text-3xl">
          Welcome to your dashboard
        </h1>
        <div className="w-320 h- self-center cursor-pointer shadow-md overflow-hidden rounded-full">
          <Link className="w-full " to={`/dashboard/profile`}>
            <img src="/giphy.gif" className="" alt="" />
          </Link>
        </div>
        <div className="w-full flex items-center justify-center">
          <Link className="" to={`/dashboard/profile`}>
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

export default Dashboard;
