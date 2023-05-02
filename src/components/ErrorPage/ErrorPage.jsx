import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex flex-col items-center justify-center text-center h-screen">
      <div id="error-page">
        <img className="h-[300px] w-[300px]" src="https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131_960_720.png" alt="404 Not Found" />
        <h1 className="text-4xl font-bold mt-8">Oops!</h1>
        <p className="text-lg text-gray-600 mt-4">Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <button className="btn btn-warning"><Link to="/">Back to Home</Link></button>
    </div>
  );
};

export default ErrorPage;
