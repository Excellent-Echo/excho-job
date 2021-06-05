import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import userLoginAction from "../../redux/user/login/userLoginAction";
import SignUpText from "../../components/SignUpText";
import ExchoJobIcon from "../../components/ExchoJobIcon";

export default function RecruiterSignInPage() {
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
    <div className="flex items-center justify-center px-4 py-12 min-h-screen bg-gray-50 select-none sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/* <h2>{JSON.stringify(userLoginData)}</h2> */}

        {/* Error Message */}
        {userLoginData.errorMessage && (
          <ul>
            {userLoginData.errorMessage.map((error, index) => {
              return <li key={index}>{error}</li>;
            })}
          </ul>
        )}

        <div>
          <ExchoJobIcon />
          <h2 className="mt-6 text-center text-gray-900 text-3xl font-extrabold">
            <span className="text-yellow-500">Sign in</span> to recruiter
          </h2>
          <p className="mt-2 text-center text-gray-600 text-sm">
            Or
            <SignUpText />
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
                className="placeholder-gray-500 relative focus:z-10 block px-3 py-2 w-full text-gray-900 text-yellow-500 border border-gray-300 focus:border-indigo-500 rounded-none rounded-t-md focus:outline-none appearance-none focus:ring-indigo-500 sm:text-sm"
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
                className="placeholder-gray-500 relative focus:z-10 block px-3 py-2 w-full text-gray-900 text-yellow-500 border border-gray-300 focus:border-indigo-500 rounded-b-md rounded-none focus:outline-none appearance-none focus:ring-indigo-500 sm:text-sm"
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
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label
                htmlFor="remember_me"
                className="block ml-2 text-gray-900 text-sm"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="/#"
                className="hover:text-indigo-500 text-indigo-600 font-medium"
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
              className="group relative flex justify-center px-4 py-2 w-full text-white text-sm font-medium bg-blue-700 hover:bg-blue-800 border border-transparent rounded-md focus:outline-none focus:ring-blue-500 focus:ring-offset-2 focus:ring-2"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}