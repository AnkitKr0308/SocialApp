const GetGitInfo = async () => {
  const response = await fetch(`https://api.github.com/users/AnkitKr0308`);
  return response.json();
};

export default GetGitInfo;
