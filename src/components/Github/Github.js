import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("AnkitKr0308");

  

  useEffect(() => {
    setUsername(document.getElementById('username').value)
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [username]);
  return (
    <div className="mt-[12vh] ml-auto mr-auto p-5 mb-[2vh] min-h-[57vh] justify-center">
     
      <input
      id='username'
        type="text"
        placeholder="Enter Github Username"
        className="border-2 border-gray-300 rounded p-2 mb-4 w-full max-w-md"
        value={username}
        onChange={(e) => setUsername(e.target.value)}/>
     {/* <img src="/images/arrow button.png" alt="Submit" className="w-16 h-16 mx-auto mb-4" onClick={submit} /> */}
      <div className="bg-gray-400 rounded text-white text-pretty text-3xl font-mono font-semibold h-36 flex flex-wrap justify-center gap-6">
        <div>
          <img
            src={data.avatar_url}
            alt="Git Profile"
            className="max-h-24 max-w-24 mt-6 mb-5"
          />
        </div>
        <div className="flex flex-col justify-center">
          Github Name: {data.name}
          <br />
          Github Followers: {data.followers}
        </div>
      </div>
    </div>
  );
}

export default Github;
