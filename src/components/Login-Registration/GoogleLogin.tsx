import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {
  const auth = useAuth();

  const handleGoogleSignIn = () => {
    auth?.googleLogin().then((data: any) => {
      if (data?.user?.email) {
        const userInfo = {
          email: data.user.email,
          name: data.user.displayName,
        };
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      }
    });
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="btn w-full border border-gray-300 hover:border-green-300"
    >
      <div className="flex items-center gap-2">
        <FcGoogle size={24} />
        <p>Google Login</p>
      </div>
    </button>
  );
};

export default GoogleLogin;
