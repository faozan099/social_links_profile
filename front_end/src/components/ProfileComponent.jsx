import React, { useEffect, useState } from "react";
import axios from "axios";

function ProfileComponent() {
  const [data, setData] = useState(null);
  const api = import.meta.env.VITE_API

  async function fetchData() {
    try {
      const res = await axios.get(`${api}/api/get`);
      setData(res.data.payload[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-neutral-off-black w-screen h-screen items-center px-3 flex">
      {data ? (
        <div className="bg-neutral-dark-grey flex m-auto h-auto justify-center rounded-md w-96 flex-col text-neutral-white text-center">
          <div>
            <img
              src={data.image}
              alt="girl_01__by_tamako_monomi_dgg4qnt.png"
              title="by_tamako_monomi"
              className="hover:cursor-pointer rounded-full w-24 my-6 mx-auto"
            />
            <h1 className="text-2xl font-semibold">{data.name}</h1>
            <h3 className="text-primary-green font-semibold ">
              {data.address}
            </h3>
          </div>
          <div className="mt-2 mb-6">
            <p className="my-4 text-gray-300">"{data.information}."</p>
            {data.app.map((app) => (
              <a href={app.link} key={app._id}>
                <div>
                  <div className="flex flex-col items-center py-1 hover:bg-neutral-off-black transition hover:-translate-y-1 duration-300">
                    <h1 className="bg-neutral-grey w-3/4 rounded-md py-2 font-semibold transition ease-in-out delay-150 hover:scale-110  duration-300 hover:-translate-y-1 hover:bg-neutral-off-black">
                      {app.name}
                    </h1>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center text-center text-neutral-white m-auto">
          <p className="text-3xl font-semibold">Loading...</p>
        </div>
      )}
    </div>
  );
}

export default ProfileComponent;
