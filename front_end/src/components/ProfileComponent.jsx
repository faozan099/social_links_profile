import React, { useEffect, useState } from "react";
import avatar from "../assets/images/avatar-jessica.jpeg";
import axios from "axios";

function ProfileComponent() {
  const [data, setData] = useState([]);
  async function fetchData() {
    try {
      const res = await axios.get("http://localhost:3066/api/get");
      console.log(res.data.payload);
      setData(res.data.payload);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-neutral-off-black w-screen h-screen items-center flex">
      <div className="bg-neutral-dark-grey flex m-auto h-auto justify-center rounded-md w-96 flex-col text-neutral-white text-center">
        <div>
          <img src={avatar} alt="" className="rounded-full w-24 my-6 mx-auto" />
          <h1 className="text-2xl font-semibold">Jessica Randall</h1>
          <h3 className="text-primary-green font-semibold ">
            London, United Kingdom
          </h3>
        </div>
        <div className="mt-2 mb-6">
          <p className="my-4 text-gray-300">
            "Front-end developer and avid reader."
          </p>
          <div>
            {data.map((item) => (
              <div className="flex flex-col items-center gap-3 py-1">
                <h1 className="bg-neutral-grey w-3/4 rounded-md py-2 font-semibold">
                  {item.app}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;
