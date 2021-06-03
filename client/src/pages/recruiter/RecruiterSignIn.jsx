import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import userLoginAction from "../../redux/user/login/userLoginAction";

export default function RecruiterSignIn() {
  const userLoginData = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const history = useHistory();

  const loginSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(
      userLoginAction.loginRecruiter(
        userLoginData.email,
        userLoginData.password,
        history
      )
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2>{JSON.stringify(userLoginData)}</h2>

        {/* Error Message */}
        {userLoginData.errorMessage && (
          <ul>
            {userLoginData.errorMessage.map((error, index) => {
              return <li key={index}>{error}</li>;
            })}
          </ul>
        )}
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to recruiter
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <p className="text-center text-base font-medium text-gray-500">
              Don't have an account yet?
              <a href="/#" className="text-indigo-600 hover:text-indigo-500">
                <Link to="/signup-jobseeker">Sign up</Link>
              </a>
            </p>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={loginSubmitHandler}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="sr-only">Email address</label>
              <input
                type="email"
                required
                value={userLoginData.email}
                onChange={(event) => {
                  dispatch(userLoginAction.setEmail(event.target.value));
                }}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label className="sr-only">Password</label>
              <input
                type="password"
                required
                value={userLoginData.password}
                onChange={(event) => {
                  dispatch(userLoginAction.setPassword(event.target.value));
                }}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="/#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              value={userLoginData.isLoading ? "Loading..." : "Login"}
              disabled={userLoginData.isLoading ? true : false}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
