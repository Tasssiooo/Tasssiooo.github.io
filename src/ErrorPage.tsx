import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error:any = useRouteError();
  error && console.error(error);

  return (
    <div className="flex flex-col justify-center gap-1 items-center w-screen h-max text-center">
      <h1 className="text-4xl font-bold leading-snug">Opa!</h1>
      <p className="text-xl">Sorry, an unexpected error occurred.</p>
      <p className="text-[#5e5e5e] font-semibold">
        <i>{error.statusText}</i>
        <br />
        <i>{error.error.message}</i>
      </p>
      <Link
        to={"/"}
        role="button"
        className="block w-max mt-3 font-semibold text-[--font-color] dark:text-white bg-[#242424] rounded-lg border-b-4 border-black p-2 shadow-sm shadow-black"
        aria-label="Go to home"
      >
        Go to home
      </Link>
    </div>
  );
};

export default ErrorPage;
