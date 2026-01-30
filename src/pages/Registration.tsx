import { useEffect, useState } from "react";
import GoogleLogin from "../components/Login-Registration/GoogleLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { updateProfile } from "firebase/auth"; // ✅ Import this
import LoadingSpinner from "../components/LoadingSpinner";

const Registration = () => {
  const [passMatch, setPassMatch] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);

  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;
    const confirmPassword = (
      form.elements.namedItem("confirm_password") as HTMLInputElement
    ).value;

    if (password !== confirmPassword) {
      setPassMatch(false);
      return;
    }
    setPassMatch(true);
    setLoginLoading(true);
    try {
      const data = await auth?.createUser(email, password);

      if (data?.user) {
        // ✅ Proper TypeScript-safe way to update display name in Firebase
        await updateProfile(data.user, { displayName: name });

        // ✅ Redirect after success
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  useEffect(() => {
    if (auth?.user) {
      navigate(from, { replace: true });
    }
  }, [auth?.user, from, navigate]);

  // show spinner when:
  // - auth is globally loading (initial auth check)
  // - OR local loginLoading (after login click)

  if (auth?.loading || loginLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Left Side Info */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Before registering, please contact me via the number in the footer —
            otherwise, your account may be disabled. Feel free to reach out.
          </p>
        </div>

        {/* Form Card */}
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="input input-bordered"
                name="confirm_password"
                required
              />
            </div>

            {/* Password mismatch message */}
            {!passMatch && (
              <p className="text-red-500 my-2">Passwords do not match!</p>
            )}

            {/* Submit */}
            <div className="form-control mt-6">
              <input
                className="btn bg-red-500 text-white"
                type="submit"
                value="Sign up"
              />
            </div>

            {/* Google Login */}
            <div className="mt-6">
              <GoogleLogin />
            </div>

            {/* Redirect to login */}
            <div className="mt-6 text-center">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-red-500">
                  Login/ Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Registration;
