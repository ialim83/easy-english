import { Link, useRouteError } from "react-router-dom";

interface RouteError {
  message: string;
}

const ErrorPage = () => {
  const { error, status } = useRouteError() as {
    error: RouteError;
    status: number | null;
  };

  return (
    <div className="container flex flex-col justify-center items-center h-screen text-center py-32">
      <h1 className="text-7xl font-extrabold mb-8">Error {status || 404}</h1>
      <p className="lg:text-3xl">{error?.message}</p>
      <button className="btn bg-red-500 text-white mt-8">
        <Link to="/">HomePage</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
