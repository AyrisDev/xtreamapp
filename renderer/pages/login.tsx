import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const login = () => {
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
      router.replace("/movie");
    }

    if (data.user_info.auth === 0) {
      setErrorModal(true);
    }
  };

  return (
    <div className="bg-[#3f3f46] w-full min-h-screen flex justify-center items-center">
      <div className="flex justify-center items-center ">
        <div className="bg-[#374151] p-4 rounded-xl ">
          <div className="justify-center items-center">
            <div className="my-2 justify-center items-center flex">Logo</div>
            <div className="rounded-xl">
              <input
                placeholder="username"
                className="rounded-lg p-2  text-gray-900"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="my-4">
              {" "}
              <input
                placeholder="password"
                className="rounded-lg p-2  text-gray-900"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="justify-center items-center flex">
              {" "}
              <button
                className="bg-[#a1a1aa] p-2 rounded-lg"
                type="submit"
                onClick={() => makeRequest()}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      {errorModal && (
        <div className="w-full h-full flex bg-gray-200 text-blue-500">test</div>
      )}
    </div>
  );
};

export default login;
