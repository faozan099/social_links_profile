import React, { useState, useEffect } from 'react';

const Test = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3066/api/get'); // Ganti dengan URL API sesuai kebutuhan
        const data = await response.json();

        // Data berhasil diambil
        setUserData(data.payload[0]);
        console.log(data.payload)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs once on mount

  return (
    <div>
      {userData ? (
        <div>
          <img src={userData.image} alt={userData.name} />
          <h2>{userData.name}</h2>
          <p>{userData.address}</p>
          <p>{userData.information}</p>
          <ul>
            {userData.app.map((app) => (
              <li key={app._id}>
                <a href={app.link} target="_blank" rel="noopener noreferrer">
                  {app.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Test;
