import Header from "../components/header/Header";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const login = useContext(AuthContext);
  const setAuth = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [loginSuccess, setLoginSuccess] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setLoginError("All fields are required");
      return;
    }

    const url = "https://remote-app-api-c4a491abd7bc.herokuapp.com/api/login";
    await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },

      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(async (res) => {
        let user = await res.json();
        console.log(user.id);
        if (user) {
          // setLoginSuccess("Login successful");

          navigate("/");
          login(user);
          setAuth(true);
        }
      })
      .catch((error) => {
        setLoginError("Login failed", error);
      });
  };

  return (
    <div>
      <Header />
      <section className="login ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 0">
            {loginError &&
              setInterval(
                () => (
                  <div className="text-red-600">
                    <p>{loginError}</p>
                  </div>
                ),
                3000
              )}

            {loginSuccess && (
              <div className="text-green-600">
                <p>{loginSuccess}</p>
              </div>
            )}
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-white ">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium  text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border outline-none border-gray-300 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-white hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  onClick={onSubmitForm}
                  className="w-full text-white outline-none btn-primary bg-red-500 focus:ring-4 focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center  "
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
