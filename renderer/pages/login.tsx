import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorModal, setErrorModal] = useState(false);
  console.log(password);

  const makeRequest = async () => {
    const response = await fetch(
      `http://live.forzaxui.xyz:8080/player_api.php?username=${user}&password=${password}`,
      {
        referrerPolicy: "unsafe-url",
      }
    );
    const data = await response.json();
    if (data.user_info.auth === 1) {
      sessionStorage.setItem(
        "password",
        JSON.stringify(data.user_info.password)
      );
      sessionStorage.setItem(
        "username",
        JSON.stringify(data.user_info.username)
      );
      sessionStorage.setItem(
        "xtreamUrl",
        JSON.stringify(
          `http://live.forzaxui.xyz:8080/player_api.php?username=${user}&password=${password}`
        )
      );
      sessionStorage.setItem(
        "dataUrl",
        JSON.stringify(`http://live.forzaxui.xyz:8080/`)
      );
      router.replace("/home");
    }

    if (data.user_info.auth === 0) {
      setErrorModal(true);
    }
  };

  return (
    <div className="relative min-h-screen flex justify-center bg-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover items-center">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
        <div className="grid  gap-8 grid-cols-1">
          <div className="flex flex-col items-center justify-center ">
            <div className="flex ">
              <img
                src="https://images.unsplash.com/photo-1532423622396-10a3f979251a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
                className="h-24"
              />
            </div>
            <div className="mt-5">
              <div className="form">
                <div className="md:space-y-2 mb-3">
                  <div className="flex-auto w-full mb-1 text-xs space-y-2">
                    <label className="font-semibold text-gray-600 py-2">
                      Username
                    </label>
                    <input
                      value={user}
                      onChange={(e) => setUser(e.target.value)}
                      name="message"
                      id=""
                      className="w-full appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                      placeholder="Enter Your Username"></input>
                  </div>

                  <div className="flex-auto w-full mb-1 text-xs space-y-2">
                    <label className="font-semibold text-gray-600 py-2">
                      Password
                    </label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      name="message"
                      id=""
                      className="w-full appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                      placeholder="Enter Your Password"></input>
                  </div>

                  <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                    <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                      Register
                    </button>
                    <button
                      type="submit"
                      onClick={() => makeRequest()}
                      className="mb-2 md:mb-0 bg-gray-600 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
