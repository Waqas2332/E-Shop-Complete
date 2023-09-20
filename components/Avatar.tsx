const Avatar = () => {
  const user = JSON.parse(localStorage.getItem("user")!);

  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#1d4946]">
      {user?.username?.charAt(0)}
    </div>
  );
};

export default Avatar;
