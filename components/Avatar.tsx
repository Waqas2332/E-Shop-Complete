const Avatar = () => {
  const user = JSON.parse(sessionStorage.getItem("user")!);
  console.log(user);
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#1d4946]">
      {user?.username?.charAt(0)}
    </div>
  );
};

export default Avatar;
