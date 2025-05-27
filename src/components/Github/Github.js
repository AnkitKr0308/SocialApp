import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/users/AnkitKr0308`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="mt-[12vh] ml-auto mr-auto p-5 mb-[2vh] min-h-[57vh] justify-center">
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
          Github followers: {data.followers}
        </div>
      </div>
    </div>
  );
}

export default Github;
